import { Expose, Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { QueryProps } from '../constants';
import { IQueryOption } from '../interfaces';

export function QueryPaginatePage(option: IQueryOption = {}) {
	const { key } = option;
	return function (target: any, propertyKey: string) {
		const exposedKey = key || propertyKey;

		Expose({ name: exposedKey })(target, propertyKey);
		IsOptional()(target, propertyKey);
		IsNumber()(target, propertyKey);
		IsInt()(target, propertyKey);
		Min(0)(target, propertyKey);
		Max(100000)(target, propertyKey);

		Transform(({ obj, value }) => {
			if (!obj[QueryProps.PaginateProp]) {
				obj[QueryProps.PaginateProp] = {};
			}

			if (!obj[QueryProps.PaginateProp][QueryProps.PaginatePageProp] && value) {
				obj[QueryProps.PaginateProp][QueryProps.PaginatePageProp] = value;
			}

			delete obj[exposedKey];

			return value;
		})(target, propertyKey);
	};
}
