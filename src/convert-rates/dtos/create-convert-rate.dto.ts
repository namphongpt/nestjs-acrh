import { AutoMap } from '@automapper/classes';
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { Schema } from 'mongoose';
import { StringObjectId } from 'src/data/decorators';

export class CreateConvertRateDto {
	@StringObjectId()
	fromCurrency: Schema.Types.ObjectId;

	@StringObjectId()
	toCurrency: Schema.Types.ObjectId;

	@AutoMap()
	@IsNumber()
	@Expose()
	convertRateValue: number;
}
