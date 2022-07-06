import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Country, CountryDocument } from './database/country.schema';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<CountryDocument>,
  ) {}

  async getAll(): Promise<Country[]> {
    return await this.countryModel.find().exec();
  }

  async getCitiesByCountry(country): Promise<any[]> {
    return await this.countryModel.aggregate()
      .match({ title: country })
      .lookup({
        from: 'city',
        localField: '_id',
        foreignField: 'country',
        as: 'cities',
      })
      .exec();
  }


  async getById(id): Promise<Country> {
    return await this.countryModel.findById(id).exec();
  }

  async create(country: Country): Promise<Country> {
    const newCountry = new this.countryModel(country);
    return await newCountry.save();
  }

  async update(id, country: Country): Promise<Country> {
    return await this.countryModel.findByIdAndUpdate(id, country, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.countryModel.findByIdAndRemove(id);
  }
}
