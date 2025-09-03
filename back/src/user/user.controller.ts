
import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './user.service';  // deve sempre ser importado assim

@Controller('users') //dentro dos parenteses coloque o nome da rota ex: 'teste' e então tera de pesquisar http://localhost:3000/teste
export class UserController {
    constructor(private readonly userService: UserService) {}


  @Post()
  addUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }


  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }


  @Get(":id")
  getUser(@Param("id") id: number): User | undefined {
    return this.userService.getUser(id);
  }

  @Put(":id")
  replaceUser(@Param("id") id: number, @Body() newData: User): User {
    return this.userService.replaceUser(id, newData);
  }

  @Patch(":id")
  updateUser(@Param("id") id: number, @Body() newData: User): User {
    return this.userService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number): boolean {
    return this.userService.deleteUser(id);
  }


}

