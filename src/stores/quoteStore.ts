import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2';

export interface QuoteItem {
  id: string
  name: string
  color: string
  quantity: number
  // Puedes agregar más propiedades si lo necesitas (pero sin precios)
}

export const useQuoteStore = defineStore('quote', () => {
  const quote = ref<QuoteItem[]>([])

  // Cargar desde localStorage al inicio
  const loadFromStorage = () => {
    const saved = localStorage.getItem('quote')
    if (saved) quote.value = JSON.parse(saved)
  }

  loadFromStorage()

  // Guardar en localStorage cada vez que cambie
  watch(quote, () => {
    localStorage.setItem('quote', JSON.stringify(quote.value))
  }, { deep: true })

  const totalItems = computed(() => {
    return quote.value.reduce((total, item) => total + item.quantity, 0)
  })

  const addToQuote = (item: Omit<QuoteItem, 'quantity'>) => {
    const existing = quote.value.find(i => i.id === item.id && i.color === item.color);
    if (existing) {
      existing.quantity += 1;
    } else {
      quote.value.push({ ...item, quantity: 1 });
    }
  }

  const removeFromQuote = (id: string) => {
    quote.value = quote.value.filter(i => i.id !== id)
    localStorage.setItem('quote', JSON.stringify(quote.value))
  }

  const increaseQuantity = (id: string) => {
    const item = quote.value.find(i => i.id === id)
    if (item) item.quantity += 1
  }

  const decreaseQuantity = (id: string) => {
    const item = quote.value.find(i => i.id === id)
    if (item && item.quantity > 1) item.quantity -= 1
  }

  const sendQuoteByEmail = async (email: string) => {
    try {
      const response = await axios.post('https://terroacabados.com/correo/formulario-cotizacion.php', {
        email,
        quote: quote.value,
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Cotización enviada!',
          text: 'Hemos enviado tu solicitud de cotización. Revisa tu correo para la copia.',
        });
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error del servidor',
          text: response.data.error || 'No se pudo enviar la cotización.',
        });
        return false;
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'Hubo un problema al intentar enviar la cotización. Intenta de nuevo.',
      });
      console.error(error);
      return false;
    }
  };

  return {
    quote,
    totalItems,
    addToQuote,
    removeFromQuote,
    increaseQuantity,
    decreaseQuantity,
    sendQuoteByEmail
  }
})
