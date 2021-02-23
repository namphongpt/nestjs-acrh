import { Provider } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getRepositoryToken } from '.';
import { repositoryProviderModelNames } from '../decorators';
import { BaseModel } from '../models';
import { BaseRepository } from '../repositories';
import { BaseDocument } from '../types';

function repositoryFactory<TModel extends BaseModel>(
	repository: BaseRepository<TModel>,
	model: Model<BaseDocument<TModel>>,
) {
	repository.setModel(model);

	return repository;
}

function createRepositoryProvider<TModel extends BaseModel>(
	modelName: string,
): Provider<BaseRepository<TModel>> {
	return {
		provide: getRepositoryToken(modelName),
		useFactory: (repository: BaseRepository<TModel>, model: Model<BaseDocument<TModel>>) => {
			return repositoryFactory<TModel>(repository, model);
		},
		inject: [BaseRepository, getModelToken(modelName)],
	};
}

export function createRepositoryProviders(): Array<Provider<BaseRepository<BaseModel>>> {
	return repositoryProviderModelNames.map((modelName) => {
		return createRepositoryProvider(modelName);
	});
}
