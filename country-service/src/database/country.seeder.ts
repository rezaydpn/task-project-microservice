import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './country.schema';
import { Seeder, DataFactory } from 'nestjs-seeder';

@Injectable()
export class CountrySeeder implements Seeder {
  constructor(@InjectModel(Country.name) private readonly country: Model<Country>) {}

  async seed(): Promise<any> {
    const countries = DataFactory.createForClass(Country).generate(10);
    return this.country.insertMany(countries);
  }

  async drop(): Promise<any> {
    return this.country.deleteMany({});
  }
}
