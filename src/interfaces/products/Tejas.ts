export interface Teja {
    delcon: Delcon[],
    aguila: Aguila[],
    iko: Iko[],
    lapusa: Lapusa[],
    mextile: Mextile[],
}

export interface Delcon {
    id: number;
    titulo:string,
    img: string[],
    medidas: string,
    piezasxM2: string,
    peso: string,
}

export interface Aguila {
    id: number;
    titulo: string,
    img: string[],
    descripcion: string,
    reqInstalacion: string,
    medidas: string,
    piezasxM2: string,
    absorcion: string,
    resistencia: string,
}
 export interface Iko {
    id: number;
    titulo: string,
    img: string[],
    medidas: string, 
}

export interface Lapusa {
    id: number;
    titulo: string,
    img: string[],
    ancho: string,
    largo: string,
    piezasxM2: string,
    peso: string,
    espesor: string,
}

export interface Mextile {
    id: number;
    titulo: string,
    img: string[],
    medidas: string,
    piezasxM2: string,
    translapeMin: string,
    piezasxTarima: string;
}