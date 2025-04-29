export interface Ladrillo {
    rockStoneTab: RockStoneTab[],
    rockStone: RockStone[],
    mextile: Mextile[],
}

export interface RockStoneTab {
    titulo: string,
    img: string[],
    medidas: string,
    contenido: string,
    cubre: string,
    juntaRecom: string,
    pesoxCaja: string,
    margenVariacion: string,
}

export interface RockStone {
    titulo: string,
    img: string[],
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
    blockxTar: string,
}