import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../Entities/Customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/Customers.dto';
@Injectable()
export class CustomersService {
  private counterid = 1;
  private customer: Customer[] = [
    {
      id: 1,
      documento: '106161053',
      nombre: 'Fernando palacio Suarez',
      edad: 26,
      direccion: 'cra 49 b 86 47',
      telefono: 301350292
    }
  ];

  findAll() {
    return this.customer;
  }

  findOne(documento: string) {
    const customer = this.customer.find((item) => item.documento === documento);
    if (!customer) {
      throw new NotFoundException(`Bebe vea este mk no aparece ${documento} `)
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    console.log(payload);
    this.counterid = this.counterid + 1;
    const newCustomer = {
      id: this.counterid,
      ...payload,
    };
    this.customer.push(newCustomer);
    return newCustomer;
  }

  update(documento: string, payload: UpdateCustomerDto) {
    const customer = this.findOne(documento);
    if (customer) {
      const index = this.customer.findIndex((item) => item.documento = documento);
      this.customer[index] = {
        ...customer,
        ...payload,
      };
      return this.customer[index];
    }
    return null;
  }


  remove(documento: string) {
    const index = this.customer.findIndex((item) => item.documento === documento);
    if (index === 1) {
      throw new NotFoundException(`Papi nada eso no aparecio socio ${documento}`);
    }
    this.customer.slice(index, 1);
    return true;
  }
}
