import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [
    ClientsModule.register([
     {
      name: 'COUNTRY_SERVICE',
      transport: Transport.KAFKA,
      options:{
        client:{
          clientId: 'country',
          brokers: ['localhost:9092'],
        },
        consumer:{
          groupId: 'country-consumer',
        }
      }
    }
   ])
  ],
  controllers: [CountryController],
  providers: [CountryService],
})

export class CountryModule {}
