import { Controller, Get, Param, Post } from '@nestjs/common';
import { InjectService, MapArrayResponse, MapResponse, ValidateBody } from 'src/common/decorators';
import { Service } from 'src/common/services';
import { ConvertRateDto } from './dtos';
import { CreateConvertRateDto } from './dtos/create-convert-rate.dto';
import { ConvertRate } from './models';
import { CreateConvertRatePipe } from './pipes';

@Controller('convert-rates')
export class ConvertRatesController {
	constructor(
		@InjectService(ConvertRate) private readonly convertRatesService: Service<ConvertRate>,
	) {}

	@Get()
	@MapArrayResponse(ConvertRateDto, ConvertRate)
	async getAll(): Promise<ConvertRate[]> {
		return this.convertRatesService.getAll({});
	}

	@Post()
	@MapResponse(ConvertRateDto, ConvertRate)
	async create(
		@ValidateBody(CreateConvertRateDto, CreateConvertRatePipe) createDto: CreateConvertRateDto,
	): Promise<ConvertRate> {
		const t = await this.convertRatesService.create(createDto);

		// console.log(this.mapper.map(t, ConvertRateDto, ConvertRate));

		return t;
	}

	@Get(':id')
	@MapResponse(ConvertRateDto, ConvertRate)
	async getById(@Param('id') id: string): Promise<ConvertRate> {
		return this.convertRatesService.getById(id);
	}
}
