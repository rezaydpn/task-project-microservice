import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RegionController } from './region.controller';
import { RegionService } from './region.service';
import { Region, RegionSchema } from './database/region.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    MongooseModule.forFeature([
      { name: Region.name, schema: RegionSchema, collection: 'region' },
    ]),
  ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
