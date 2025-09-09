
import { Injectable, NotFoundException } from '@nestjs/common';


import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './consulta.entity';

// export type Consulta = {
//   id: number;
//   name: string;
//   age: number;
//   uf: string;
// }


@Injectable()
export class ConsultaService {

  constructor(
    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,
  ) { }

  // Consultas: Consulta[] = [];



  getConsultas(): Promise<Consulta[]> {
    return this.consultaRepository.find(); // fazer a pesquisa no repositorio
  }

  async getConsulta(id: number): Promise<Consulta> {

    let algo = await this.consultaRepository.findOneBy({ id });

    if (!algo) {
      throw new NotFoundException(`{o id com o numero ${id} não foi achado}`)
    }
    return algo
  }

  async addConsulta(consulta: Consulta): Promise<Consulta> {
    let algo = await this.consultaRepository.save(consulta);

    if (!algo) {
      throw new NotFoundException(`{não foi possivel cadastrar}`)
    }
    return algo
  }




  async replaceConsulta(id: number, consulta: Consulta): Promise<Consulta> {
    const existingConsulta = await this.consultaRepository.findOne({ where: { id } });

    if (!existingConsulta) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }

    // substitui os dados
    await this.consultaRepository.update(id, consulta);

    // busca o registro atualizado
    let algo = await this.consultaRepository.findOne({ where: { id } });

    if (!algo) {
      throw new NotFoundException(`{não foi possivel achar o dado modificado}`)
    }
    return algo

  }

  async remove(id: number): Promise<void> {
    const result = await this.consultaRepository.delete(id);
    if (!result) {
      throw new NotFoundException(`não deu para apagar o usuario com id: ${id}`);
    }
  }


}
