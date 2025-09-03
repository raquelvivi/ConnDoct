import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  age: number;
  uf: string;
}


@Injectable()
export class AppService {


  users: User[] = [];

  addUser(newUser: User): User {
    const nextId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    newUser.id = nextId;
    this.users.push(newUser);
    return newUser;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined{
    return this.users.find(u => u.id == id);
  }

}
