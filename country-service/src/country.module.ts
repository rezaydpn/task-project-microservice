import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { Country, CountrySchema } from './database/country.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    MongooseModule.forFeature([
      { name: Country.name, schema: CountrySchema, collection: 'country' },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
