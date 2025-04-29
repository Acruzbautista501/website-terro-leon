export interface Fachaleta {
    lapusa: Lapusa[],
    rockStone: RockStone[],
    mextile: Mextile[],
    perdura: Perdura[],
}

export interface Lapusa {
    titulo: string,
    img: string[],
    ancho: string,
    largo: string,
    piezasxM2: string,
    peso: string,
    espesor: string,
}

export interface RockStone {
    titulo: string,
    img: string[],
    medidas: string,
    largo: string,
    ancho: string,
    espesor: string,
    contenido: string,
    cubre: string,
    juntaRecom: string,
    pesoxCaja: string,
    margenVariacion: string,
}

export interface Mextile {
    titulo: string,
    img: string[],
    medidas: string,
    espesor: string,
    pesoxPzas: string,
    pzasxM2: string,
    pesoxM2: string,
    resistencia: string,
    fachxTar: string, 
}

export interface Perdura {
    titulo: string,
    img: string[],
    largo: string,
    ancho: string,
    grosor: string,
    pzasxCaja: string,
}