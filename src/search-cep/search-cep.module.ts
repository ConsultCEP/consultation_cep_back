import { Module } from '@nestjs/common';
import { SearchCepController } from './search-cep.controller';
import { SearchCepService } from './search-cep.service';

@Module({
  controllers: [SearchCepController],
  providers: [SearchCepService]
})
export class SearchCepModule {}
