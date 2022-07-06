import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CITY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'city',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'city-consumer',
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
