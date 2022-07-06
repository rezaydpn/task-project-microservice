import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';

import { Region, RegionSchema } from './database/region.schema';
import { RegionSeeder } from './database/region.seeder';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-seeder-sample'),
    MongooseModule.forFeature([{ name: Region.name, schema: RegionSchema }]),
  ],
}).run([RegionSeeder]);