import mongoose from 'mongoose';
import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';
import { RegionService } from './region.service';

@Controller()
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @MessagePattern('get_region')
  async getAllRegion() {
    const regions = await this.regionService.getAll();
    return regions;
  }

  @MessagePattern('get_region_by_id')
  async getRegionById(@Payload() data) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    const region = await this.regionService.getById(id);
    return region;
  }

  @MessagePattern('create_region')
  async createRegion(@Payload() data: any) {
    return await this.regionService.create(data.value);
  }

  @MessagePattern('delete_region')
  async deleteRegion(@Payload() data) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    return await this.regionService.delete(id);
  }

  @MessagePattern('update_region')
  async updateRegion(@Payload() data: any) {
    const id = new mongoose.Types.ObjectId(data.value.id);
    return await this.regionService.update(id, data.value);
  }
}
