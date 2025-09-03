
import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { User } from './app.service';  // deve sempre ser importado assim

@Controller('users') //dentro dos parenteses coloque o nome da rota ex: 'teste' e então tera de pesquisar http://localhost:3000/teste
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  addUser(@Body() user: User): User {
    return this.appService.addUser(user);
  }


  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }


  @Get(":id")
  getUser(@Param("id") id: number): User | undefined {
    return this.appService.getUser(id);
  }

}

