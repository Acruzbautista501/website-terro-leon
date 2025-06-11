export interface Cantera {
    rockStone: RockStone[],
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
    pesoxCaja: string,
    margenVariacion: string,
}