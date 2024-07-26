import { IHistory } from "src/interface/history";
import { HistoryService } from "./history.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateHistory } from "./dtos/create-history.dto";

@Controller('history')
export class HistoryController {
    constructor(private readonly historyService: HistoryService) {}

    @Get()
    async getAllHistory(): Promise<IHistory[]>{
        return this.historyService.getAllHistory();
    }

    @Post()
    async createHistory(@Body() body: CreateHistory) {
        return this.historyService.createHistory({
            id: randomUUID(),
            ...body,
        });
    }
}