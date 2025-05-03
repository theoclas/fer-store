import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserServiceService } from './../services/user.service';
import { CreateUserDto, UpdateUserDto } from './../dtos/Users.dto';
@Controller('users')
export class UsersController {
  constructor(private UserServiceService: UserServiceService) {}
  @Get()
  GetUsers() {
    return this.UserServiceService.findAll();
  }

  @Get('/:id')
  GetOne(@Param('documento') documento: string) {
    return this.UserServiceService.findOne(documento);
  }

  @Post()
  create(@Body() paylod: CreateUserDto) {
    return this.UserServiceService.create(paylod);
  }

  @Put('/:documento')
  Update(@Param('documento') documento: string, @Body() paylod: UpdateUserDto) {
    return this.UserServiceService.update(documento, paylod);
  }

  @Delete('/:documento')
  Delete(@Param('documento') documento: string) {
    return this.UserServiceService.remove(documento);
  }
}
