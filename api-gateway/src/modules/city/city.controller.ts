import {
  Controller,
  Delete,
  Post,
  Get,
  Param,
  Body,
  Put,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly appService: CityService) {}

  @Get()
  async getCity() {
    return await this.appService.getCity();
  }

  @Get('/:id')
  async getCityById(@Param('id') id) {
    return await this.appService.getCityById(id);
  }

  @Get('/cityByRegion/:region')
  async getRegionCities(@Param('region') region) {
    return await this.appService.getCityByRegion(region);
  }

  @Delete('/:id')
  async deleteCity(@Param('id') id) {
    return await this.appService.deletecity(id);
  }

  @Post()
  async createCity(@Body() city: any) {
    return await this.appService.createCity(city);
  }

  @Put()
  async updateCity(@Body() city: any) {
    return await this.appService.updateCity(city);
  }

  @Put('update-many')
  async updatemanyCity(@Body() city: any) {
    return await this.appService.updateManyCity(city);
  }
}
