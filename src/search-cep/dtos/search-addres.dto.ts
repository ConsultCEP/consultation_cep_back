import { IsNotEmpty, Length } from 'class-validator';

export abstract class SearchAddres {
  @IsNotEmpty()
  @Length(2, 2)
  uf: string;

  @IsNotEmpty()
  @Length(3, 35)
  cidade: string;

  @IsNotEmpty()
  @Length(3, 100)
  logradouro: string;
}
