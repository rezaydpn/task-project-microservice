import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class CityService implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject('CITY_SERVICE') private clientKafka: ClientKafka) {}

  async onModuleInit() {
    const patterns = [
      'get_city',
      'get_city_by_region',
      'get_city_by_id',
      'create_city',
      'delete_city',
      'update_city',
      'update_many_city',
    ];

    patterns.map((pattern) => {
      this.clientKafka.subscribeToResponseOf(pattern);
    });

    await this.clientKafka.connect();
  }

  async onModuleDestroy() {
    await this.clientKafka.close();
  }

  async getCity() {
    return await this.clientKafka.send('get_city', {});
  }

  async getCityByRegion(region: string) {
    return await this.clientKafka.send('get_city_by_region', {
      region: region,
    });
  }

  async getCityById(id: number) {
    return await this.clientKafka.send('get_city_by_id', { id: id });
  }

  async createCity(city: any) {
    return await this.clientKafka.send('create_city', city);
  }

  async deletecity(id: number) {
    return await this.clientKafka.send('delete_city', { id: id });
  }

  async updateCity(city: any) {
    return await this.clientKafka.send('update_city', city);
  }

  async updateManyCity(city: any) {
    return await this.clientKafka.send('update_many_city', city);
  }
}
