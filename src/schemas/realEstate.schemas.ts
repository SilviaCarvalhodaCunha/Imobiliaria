import { z } from "zod";
import { addressRequestSchema, addressSchema } from "./address.schemas";
import { categorySchema } from "./categories.schemas";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const propertySchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  address: addressRequestSchema,
  categoryId: z.number().int(),
  sold: z.boolean().optional().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const propertyRequestSchema = propertySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const propertyResponseSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number().int(),
  address: addressSchema,
  category: categorySchema,
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export {
  realEstateSchema,
  propertySchema,
  propertyRequestSchema,
  propertyResponseSchema,
};
