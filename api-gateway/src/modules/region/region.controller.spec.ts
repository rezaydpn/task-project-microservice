import { Test, TestingModule } from '@nestjs/testing';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';

describe('RegionController', () => {
  let regionController: RegionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RegionController],
      providers: [RegionService],
    }).compile();

    regionController = app.get<RegionController>(RegionController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(regionController.getHello()).toBe('Hello World!');
  //   });
  // });
});
