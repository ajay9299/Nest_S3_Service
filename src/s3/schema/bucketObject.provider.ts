import { Mongoose } from 'mongoose';
import { BucketObjectSchema } from './bucketObject.schema';

export const BucketObjectProviders = [
  {
    provide: 'BUCKET_OBJECT_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('BucketObject', BucketObjectSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
