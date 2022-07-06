import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Region, RegionDocument } from './database/region.schema';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private readonly regionModel: Model<RegionDocument>,
  ) {}

  async getAll(): Promise<Region[]> {
    return await this.regionModel.find().exec();
  }

  async getById(id): Promise<Region> {
    return await this.regionModel.findById(id).exec();
  }

  async create(region: Region): Promise<Region> {
    const newRegion = new this.regionModel(region);
    return await newRegion.save();
  }

  async update(id, region: Region): Promise<Region> {
    return await this.regionModel.findByIdAndUpdate(id, region, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.regionModel.findByIdAndRemove(id);
  }
}
