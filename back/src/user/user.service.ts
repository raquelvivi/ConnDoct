
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

  // addUser(newUser: User): User {
  //   const nextId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
  //   newUser.id = nextId;
  //   this.users.push(newUser);
  //   return newUser;
  // }

  getUsers(): Promise<User[]> {
    return this.userRepository.find(); // fazer a pesquisa no repositorio
  }

  // getUser(id: number): User | undefined{
  //   return this.users.find(u => u.id == id);
  // }

  // replaceUser(id: number, newData: User): User {
  //   const index = this.users.findIndex(u => u.id == id);
  //   if (index === -1) throw new NotFoundException();

  //   newData.id = id;
  //   this.users[index] = newData;

  //   return newData;
  // }

  // updateUser(id: number, newData: User): User {
  //   const index = this.users.findIndex(u => u.id == id);
  //   if (index === -1) throw new NotFoundException();

  //   const user = this.users[index];

  //   if (newData.name) user.name = newData.name;
  //   if (newData.age) user.age = newData.age;
  //   if (newData.uf) user.uf = newData.uf;
  //   this.users[index] = user;

  //   return user;
  // }


  // deleteUser(id: number): boolean {
  //   const index = this.users.findIndex(u => u.id == id);
  //   if (index === -1) throw new NotFoundException();

  //   this.users.splice(index, 1);
  //   return true;
  // }

}
