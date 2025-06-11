import type { Producto, Imperdible, Inspirate } from '../interfaces/Producto';

export const productos: Producto[] = [
    {
        titulo: 'Tejas',
        img: '/img/teja.jpg',
        url: '/productos/tejas'
    },
    {
        titulo: 'Fachaletas y Piedras',
        img: '/img/fachaleta.jpg',
        url: '/productos/fachaletas-y-piedras'
    },
    {
        titulo: 'Ladrillo y block',
        img: '/img/ladrillo.jpg',
        url: '/productos/ladrillos-y-block'
    },
    {
        titulo: 'Adoquines',
        img: '/img/adoquin.jpg',
        url: '/productos/adoquines'
    },
    {
        titulo: 'Canteras',
        img: '/img/rockstone/cantera-laminada-hueso.jpg',
        url: '/productos/canteras'
    },
    {
        titulo: 'Accesorios',
        img: '/img/perdura/ANTIGRAFITTI LIMPIADOR.jpg',
        url: '/productos/accesorios'
    },
]

export const imperdibles: Imperdible[] = [
    {
        titulo: 'Tejas',
        img: '/img/teja.jpg',
        url: '/productos/tejas'
    },
    {
        titulo: 'Adoquines',
        img: '/img/adoquin.jpg',
        url: '/productos/adoquines'
    },
    {
        titulo: 'Fachaletas',
        img: '/img/fachaleta.jpg',
        url: '/productos/fachaletas-y-piedras'
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