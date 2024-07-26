import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchCepModule } from './search-cep/search-cep.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [SearchCepModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
