import mongoose from 'mongoose';
import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';
import { CountryService } from './country.service';

@Controller()
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @MessagePattern('get_country')
  async getAllCountry() {
    const countries = await this.countryService.getAll();
    return countries;
  }

  @MessagePattern('get_country_by_id')
  async getCountryById(@Payload() data) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    const country = await this.countryService.getById(id);
    return country;
  }

  @MessagePattern('get_country_cities')
  async getCitiesByCountry(@Payload() data) {
    const country = data.value.country;
    const countries = await this.countryService.getCitiesByCountry(country);
    return countries;
  }

  @MessagePattern('create_country')
  async createCountry(@Payload() data: any) {
    return await this.countryService.create(data.value);
  }

  @MessagePattern('delete_country')
  async deleteCountry(@Payload() data) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    return await this.countryService.delete(id);
  }

  @MessagePattern('update_country')
  async updateCountry(@Payload() data: any) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    return await this.countryService.update(id, data.value);
  }
}
