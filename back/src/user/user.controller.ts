
import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users') //dentro dos parenteses coloque o nome da rota ex: 'teste' e então tera de pesquisar http://localhost:3000/teste
export class UserController {
    constructor(private readonly userService: UserService) {}


  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }


  @Get(':id')
  getUser(@Param('id') id: number): Promise<User> {
    
    return this.userService.getUser(id);
  }


  @Post()
  addUser(@Body() user: User): Promise<User> {
    return this.userService.addUser(user);
  }



  @Put(":id")
  replaceUser(@Param("id") id: number, @Body() newData: User): Promise<User> {
    return this.userService.replaceUser(id, newData);
  }


  @Delete(':id')
  removeUser(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }


}

