import { Module } from '@nestjs/common';
import { SearchCepController } from './search-cep.controller';
import { SearchCepService } from './search-cep.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [SearchCepController],
  providers: [SearchCepService],
})
export class SearchCepModule {}
