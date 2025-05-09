import type { Producto, Imperdible, Inspirate } from '../interfaces/Producto';

export const productos: Producto[] = [
    {
        titulo: 'Tejas',
        img: '/img/teja.jpg',
        url: '/productos/tejas'
    },
    /*{
        titulo: 'Pisos',
        img: '/img/pisos.jpg',
        url: ''
    },*/
    {
        titulo: 'Ladrillo y block',
        img: '/img/ladrillo.jpg',
        url: ''
    },
    {
        titulo: 'Fachaletas',
        img: '/img/fachaleta.jpg',
        url: ''
    },
    {
        titulo: 'Adoquines',
        img: '/img/adoquin.jpg',
        url: ''
    },
]

export const imperdibles: Imperdible[] = [
    {
        titulo: 'Tejas',
        img: '/img/teja.jpg'
    },
    {
        titulo: 'Adoquines',
        img: '/img/adoquin.jpg'
    },
    {
        titulo: 'Fachaletas',
        img: '/img/fachaleta.jpg'
    },
]

export const puntos: Inspirate[] = [
    {
        descripcion: 'Paso a paso para que todo quede perfecto',
        url: '/recursos',
        img: '/img/img-imperdible-1.avif'
    },
    {
        descripcion: 'Aprende visualmente y sin complicaciones',
        url: '/recursos',
        img: '/img/img-imperdible-2.avif'
    },
    {
        descripcion: 'Ideas, estilos y tendencias para tu espacio',
        url: '/recursos',
        img: '/img/img-imperdible-3.avif'
    },
    {
        descripcion: 'Explora toda nuestra biblioteca de contenido',
        url: '/recursos',
        img: '/img/img-imperdible-4.avif'
    },
]