import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

describe('CountryController', () => {
  let cuntryController: CountryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService],
    }).compile();

    cuntryController = app.get<CountryController>(CountryController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(CountryController.getHello()).toBe('Hello World!');
  //   });
  // });
});
