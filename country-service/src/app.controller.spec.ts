import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

describe('AppController', () => {
  let appController: CountryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService],
    }).compile();

    appController = app.get<CountryController>(CountryController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
