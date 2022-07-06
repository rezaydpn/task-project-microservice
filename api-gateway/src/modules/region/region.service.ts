import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class RegionService {
  constructor(@Inject('REGION_SERVICE') private clientKafka: ClientKafka) {}

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('get_region');
    this.clientKafka.subscribeToResponseOf('get_region_by_id');
    this.clientKafka.subscribeToResponseOf('create_region');
    this.clientKafka.subscribeToResponseOf('delete_region');
    this.clientKafka.subscribeToResponseOf('update_region');
    await this.clientKafka.connect();
  }

  async getRegion() {
    return await this.clientKafka.send('get_region', {});
  }

  async getRegionById(id: number) {
    return await this.clientKafka.send('get_region_by_id', { id: id });
  }

  async createRegion(region: any) {
    return await this.clientKafka.send('create_region', region);
  }

  async deleteregion(id: number) {
    return await this.clientKafka.send('delete_region', { id: id });
  }

  async updateRegion(region: any) {
    return await this.clientKafka.send('update_region', region);
  }
}
