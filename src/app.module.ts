import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { ProductsService } from './services/products.service';
import { UserServiceService } from './services/user.service';
// import { ProductsController } from './controller/products.controller';
import { CustomersService } from './services/customers.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'tu_usuario',
    //   password: 'tu_contraseña',
    //   database: 'nombre_base',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'], // Asegúrate de tener entidades
    //   synchronize: true,
    //   options: {
    //     encrypt: false,
    //     trustServerCertificate: true,
    //   },
    // }),
  ],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    CustomersController,
    UsersController,
  ],
  providers: [AppService, ProductsService, UserServiceService, CustomersService],
})
export class AppModule {}
