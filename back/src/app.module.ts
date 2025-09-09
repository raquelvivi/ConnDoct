import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ExameModule } from './exame/exame.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Itabor1i',
      database: 'conndoct',
      autoLoadEntities: true,
      synchronize: false, // para que essa bosta serve????????????
    }),
    UserModule,
    ExameModule,
  ],
})
export class AppModule { }
