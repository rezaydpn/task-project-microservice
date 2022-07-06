import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';

@Module({
  imports: [
    ClientsModule.register([
     {
      name: 'REGION_SERVICE',
      transport: Transport.KAFKA,
      options:{
        client:{
          clientId: 'region',
          brokers: ['localhost:9092'],
        },
        consumer:{
          groupId: 'region-consumer',
        }
      }
    }
   ])
  ],
  controllers: [RegionController],
  providers: [RegionService],
})

export class RegionModule {}
