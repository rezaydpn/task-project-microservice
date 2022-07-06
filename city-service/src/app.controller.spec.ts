import { Test, TestingModule } from '@nestjs/testing';
import { CityController } from './city.controller';
import { CityService } from './city.service';

describe('AppController', () => {
  let appController: CityController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [CityService],
    }).compile();

    appController = app.get<CityController>(CityController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
