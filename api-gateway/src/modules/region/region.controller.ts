import {
  Controller,
  Delete,
  Post,
  Get,
  Param,
  Body,
  Put,
} from '@nestjs/common';
import { response } from 'express';
import { json } from 'stream/consumers';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly appService: RegionService) {}

  @Get()
  async getRegion() {
    return await this.appService.getRegion();
  }

  @Get('/:id')
  async getRegionById(@Param('id') id) {
    return await this.appService.getRegionById(id);
  }

  @Delete('/:id')
  async deleteRegion(@Param('id') id) {
    return await this.appService.deleteregion(id);
  }

  @Post()
  async createRegion(@Body() region: any) {
    return await this.appService.createRegion(region);
  }

  @Put()
  async updateRegion(@Body() region: any) {
    return await this.appService.updateRegion(region);
  }

}
