import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CityController } from './city.controller';
import { CityService } from './city.service';
import { City, CitySchema } from './database/city.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    MongooseModule.forFeature([
      { name: City.name, schema: CitySchema, collection: 'city' },
    ]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
