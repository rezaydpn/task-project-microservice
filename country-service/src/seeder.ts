import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';

import { Country, CountrySchema } from './database/country.schema';
import { CountrySeeder } from './database/country.seeder';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-seeder-sample'),
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
}).run([CountrySeeder]);