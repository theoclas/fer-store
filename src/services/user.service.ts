import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './../Entities/User.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/Users.dto';
@Injectable()
export class UserServiceService {
  private counterid = `1`;
  private Users: User[] = [
    {
      documento: '1026161053',
      nombre: 'Fernando',
      edad: 26,
    },
  ];

  findAll() {
    return this.Users;
  }

  findOne(documento: string) {
    const user = this.Users.find((item) => item.documento === documento);
    if (!user) {
      throw new NotFoundException(`Papi no se encontro nah pero nah`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterid = this.counterid + 1;
    const newUser = {
      documento: this.counterid,
      ...payload,
    };
    this.Users.push(newUser);
    return newUser;
  }

  update(documento: string, payload: UpdateUserDto) {
    const user = this.findOne(documento);
    if (user) {
      const index = this.Users.findIndex(
        (item) => item.documento === documento,
      );
      this.Users[index] = {
        ...user,
        ...payload,
      };
      return this.Users[index];
    }
    return null;
  }

  remove(documento: string) {
    const index = this.Users.findIndex((item) => item.documento === documento);
    if (index === -1) {
      throw new NotFoundException(`papi el usuario no existo si sabe`);
    }
    this.Users.splice(index, 1);
    return true;
  }
}
