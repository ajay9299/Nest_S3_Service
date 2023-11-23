import { Joi } from 'celebrate';

export const createBucketValidationSchema = Joi.object({
  bucketName: Joi.string()
    .required()
    .messages({ 'any.required': 'bucketName is required' }),
  isPublic: Joi.boolean().optional(),
});
