import { Test, TestingModule } from '@nestjs/testing';
import { SearchCepService } from '../search-cep.service';

describe('SearchCepService', () => {
  let service: SearchCepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchCepService],
    }).compile();

    service = module.get<SearchCepService>(SearchCepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
