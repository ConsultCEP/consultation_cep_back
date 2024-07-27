import { Body, Controller, Get, Param } from '@nestjs/common';
import { SearchCepService } from './search-cep.service';
import { SearchAddres } from './dtos/search-addres.dto';

@Controller('search-cep')
export class SearchCepController {
  constructor(private readonly searchCepService: SearchCepService) {}

  @Get('/:cep')
  async findAddresByCep(@Param('cep') cep: string): Promise<string> {
    const data = await this.searchCepService.findAddresByCep(cep);

    return data;
  }

  @Get()
  findAdrress(@Body() body: SearchAddres): Promise<any> {
    const { uf, cidade, logradouro } = body;
    return this.searchCepService.findAddres({ uf, cidade, logradouro });
  }
}
