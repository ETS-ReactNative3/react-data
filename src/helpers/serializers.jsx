import BaseSerializer from 'serializers/base';
import { logger } from 'utils/helpers';
import { dashToCapital } from 'utils/transforms';

async function importSerializers() {
	let serilizers = await import(/* webpackIgnore: true */ /* webpackMode: "lazy" */ 'serializers');
	logger('models: ', serilizers);
	return serilizers;
}

function serializerFor(serializers, modelName, store, data = {}) {
	let Serializer = serializers[dashToCapital(modelName)];
	return Serializer ? new Serializer(store, data) : new BaseSerializer(store, data);
}

export {
	importSerializers,
	serializerFor
};