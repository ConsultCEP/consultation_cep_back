import { Injectable } from "@nestjs/common";
import { IHistory } from "src/interface/history";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class HistoryService {
    constructor( private readonly prisma: PrismaService ){}

    async getAllHistory(): Promise<IHistory[]>{
        const data = await this.prisma.history.findMany();

        const hydratation = data.filter((obj, index, self) =>
            index === self.findIndex((o) => o.search === obj.search));

        return hydratation;
    }

    async createHistory(data: IHistory): Promise<IHistory> {
        return this.prisma.history.create({ data });
    }
}