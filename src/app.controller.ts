import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { REDIRECT_METADATA } from '@nestjs/common/constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Erika';
  }
}
