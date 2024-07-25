import { Test, TestingModule } from '@nestjs/testing';
import { SearchCepController } from './search-cep.controller';

describe('SearchCepController', () => {
  let controller: SearchCepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchCepController],
    }).compile();

    controller = module.get<SearchCepController>(SearchCepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
