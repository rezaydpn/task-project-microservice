import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';

import { City, CitySchema } from './database/city.schema';
import { CitySeeder } from './database/city.seeder';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-seeder-sample'),
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
}).run([CitySeeder]);