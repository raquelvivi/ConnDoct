
export type Consultas = {
    id: number;
    data: Date;
    hora: string;
    ano: number;
    pessoa: number;
    medico: number;
    hospital: number;
}

export type Exame = {
    id: number;
    data: Date;
    hora: string;
    ano: number;
    tipo: string;
    resultado: string;
    documento: Buffer;
    pessoa: number;
    medico: number;
    hospital: number;
}