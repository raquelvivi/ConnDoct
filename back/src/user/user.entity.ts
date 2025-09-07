import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pessoa') // tabela já criada
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    nasc: Date;

    @Column()
    nome: string;

    @Column()
    acesso: boolean;

    @Column({ nullable: true })
    cep: number;

    @Column()
    senha: string;

    @Column({  nullable: true })
    email: string;

    @Column({  nullable: true })
    cpf: string;

    @Column({  nullable: true }) // 👈 diferença de camelCase
    telem: string;

    @Column({  nullable: true })
    numsus: string;

    @Column({  nullable: true })
    sexo: string;

    @Column({  nullable: true }) // 👈 diferença
    identgenero: string;
}
