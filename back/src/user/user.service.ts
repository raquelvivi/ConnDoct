
import { Injectable, NotFoundException } from '@nestjs/common';


import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// export type User = {
//   id: number;
//   name: string;
//   age: number;
//   uf: string;
// }


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  // users: User[] = [];

  

  getUsers(): Promise<User[]> {
    return this.userRepository.find(); // fazer a pesquisa no repositorio
  }

  async getUser(id: number): Promise<User> {
     
    let algo = await this.userRepository.findOneBy({ id });

    if (!algo){
      throw new NotFoundException(`{o id com o numero ${id} não foi achado}`)
    }
    return algo
  }

  async addUser(user: User): Promise<User> {
    let algo = await this.userRepository.save(user);

    if (!algo) {
      throw new NotFoundException(`{não foi possivel cadastrar}`)
    }
    return algo
  }
  



async replaceUser(id: number, user: User): Promise < User > {
  const existingUser = await this.userRepository.findOne({ where: { id } });

  if(!existingUser) {
    throw new NotFoundException(`Usuário com id ${id} não encontrado`);
  }

  // substitui os dados
  await this.userRepository.update(id, user);

  // busca o registro atualizado
  let algo = await this.userRepository.findOne({ where: { id } });

  if (!algo) {
    throw new NotFoundException(`{não foi possivel achar o dado modificado}`)
  }
  return algo

}

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (!result) {
      throw new NotFoundException(`não deu para apagar o usuario com id: ${id}`);
    }
  }


}
