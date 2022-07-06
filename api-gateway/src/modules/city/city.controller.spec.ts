import { Test, TestingModule } from '@nestjs/testing';
import { CityController } from './city.controller';
import { CityService } from './city.service';

describe('CityController', () => {
  let cityController: CityController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [CityService],
    }).compile();

    cityController = app.get<CityController>(CityController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(cityController.getHello()).toBe('Hello World!');
  //   });
  // });
});
