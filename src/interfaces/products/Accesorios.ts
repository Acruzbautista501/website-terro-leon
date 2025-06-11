export interface Accesorio {
    perdura: Perdura[],
    rockStone: RockStone[],

}

export interface Perdura {
    titulo: string,
    img: string[],
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