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
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getCountry() {
    return await this.countryService.getCountry();
  }

  @Get('/:id')
  async getCountryById(@Param('id') id) {
    return await this.countryService.getCountryById(id);
  }

  @Get('/citiesByCountry/:country')
  async getCitiesByCountry(@Param('country') country) {
    return await this.countryService.getCitiesByCountry(country);
  }

  @Delete('/:id')
  async deleteCountry(@Param('id') id) {
    return await this.countryService.deletecountry(id);
  }

  @Post()
  async createCountry(@Body() country: any) {
    return await this.countryService.createCountry(country);
  }

  @Put()
  async updateCountry(@Body() country: any) {
    return await this.countryService.updateCountry(country);
  }

}
