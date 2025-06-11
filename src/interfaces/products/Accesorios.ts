export interface Accesorio {
    perdura: Perdura[],
    rockSrone: RockStone[],

}

export interface Perdura {
    productos: string[],
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