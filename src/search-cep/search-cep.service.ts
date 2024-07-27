import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { SearchAddresByCep } from './dtos/search-addres-by-cep.dto';
import { SearchAddres } from './dtos/search-addres.dto';

@Injectable()
export class SearchCepService {
  constructor(private readonly httpService: HttpService) {}

  async findAddresByCep(cep: string): Promise<string> {
    const data = this.httpService.axiosRef
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(({ data }) => {
        if (data.erro === 'true') {
          throw new NotFoundException('CEP não encontrado');
        }

        const { localidade, uf, cep } = data;

        return `${localidade}, ${uf} ${cep}`;
      })
      .catch((error: AxiosError) => {
        throw new BadRequestException(
          `Tivemos um problema em nosso servidor: ${error.message}`,
        );
      });

    return data;
  }

  async findAddres({
    uf,
    cidade,
    logradouro,
  }: SearchAddres): Promise<AxiosResponse<SearchAddresByCep>> {
    const data = this.httpService.axiosRef
      .get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`)
      .then((e) => {
        if (e.data.erro === 'true') {
          throw new NotFoundException('Endereço não encontrado');
        }

        return e.data;
      })
      .catch((error: AxiosError) => {
        throw new BadRequestException(
          `Tivemos um problema em nosso servidor: ${error.message}`,
        );
      });

    return data;
  }
}
