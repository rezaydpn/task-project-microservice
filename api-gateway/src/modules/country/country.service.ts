import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class CountryService {
  constructor(@Inject('COUNTRY_SERVICE') private clientKafka: ClientKafka) {}

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('get_country');
    this.clientKafka.subscribeToResponseOf('get_country_cities');
    this.clientKafka.subscribeToResponseOf('get_country_by_id');
    this.clientKafka.subscribeToResponseOf('create_country');
    this.clientKafka.subscribeToResponseOf('delete_country');
    this.clientKafka.subscribeToResponseOf('update_country');
    await this.clientKafka.connect();
  }

  async getCountry() {
    return await this.clientKafka.send('get_country', {});
  }

  async getCitiesByCountry(country: string) {
    return await this.clientKafka.send('get_country_cities', { country: country });
  }

  async getCountryById(id: number) {
    return await this.clientKafka.send('get_country_by_id', { id: id });
  }

  async createCountry(country: any) {
    return await this.clientKafka.send('create_country', country);
  }

  async deletecountry(id: number) {
    return await this.clientKafka.send('delete_country', { id: id });
  }

  async updateCountry(country: any) {
    return await this.clientKafka.send('update_country', country);
  }
}
