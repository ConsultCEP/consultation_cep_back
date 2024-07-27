import { Prisma } from '@prisma/client';

export class History implements Prisma.HistoryCreateInput {
  id?: string;
  search: string;
  result: string;
}
