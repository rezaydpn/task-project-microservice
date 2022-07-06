import { Test, TestingModule } from '@nestjs/testing';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';

describe('AppController', () => {
  let appController: RegionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RegionController],
      providers: [RegionService],
    }).compile();

    appController = app.get<RegionController>(RegionController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
