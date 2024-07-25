import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchCepModule } from './search-cep/search-cep.module';

@Module({
  imports: [SearchCepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
