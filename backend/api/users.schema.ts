import Joi from 'joi'

export const createUserProfileSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    age: Joi.number(),
    tags: Joi.array().items(Joi.string())
})

export const updateUserProfileSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    age: Joi.number(),
    tags: Joi.array().items(Joi.string())
})