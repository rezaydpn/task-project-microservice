import { Module } from '@nestjs/common';
import { CityModule } from './modules/city/city.module';
import { CountryModule } from './modules/country/country.module';
import { RegionModule } from './modules/region/region.module';

@Module({
  imports: [
    CityModule,
    CountryModule,
    RegionModule,
  ],
})
export class AppModule {}
