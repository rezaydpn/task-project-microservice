import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './database/city.schema';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';
import { retry } from 'rxjs';
import mongoose from 'mongoose';

@Controller()
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @MessagePattern('get_city')
  async getAllCity() {
    const cities = await this.cityService.getAll();
    return cities;
  }

  @MessagePattern('get_city_by_id')
  async getCityById(@Payload() data) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    const city = await this.cityService.getById(id);
    return city;
  }

  @MessagePattern('get_city_by_region')
  async getRegionCities(@Payload() data) {
    const region = data.value.region;
    const cities = await this.cityService.getCityByRegion(region);
    return cities;
  }

  @MessagePattern('create_city')
  async createCity(@Payload() data: any) {
    return await this.cityService.create(data.value);
  }

  @MessagePattern('delete_city')
  async deleteCity(@Payload() data) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    return await this.cityService.delete(id);
  }

  @MessagePattern('update_city')
  async updateCity(@Payload() data: any) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    return await this.cityService.update(id, data.value);
  }

  @MessagePattern('update_many_city')
  async updateManyCity(@Payload() data: any) {
    const city = data.value;
    return await this.cityService.updateMany(city);
  }
}
