import { z } from "zod";
import {
  propertyRequestSchema,
  propertyResponseSchema,
  propertySchema,
  realEstateSchema,
} from "../schemas/realEstate.schemas";

type TRealEstate = z.infer<typeof realEstateSchema>;

type TProperty = z.infer<typeof propertySchema>;

type TPropertyRequest = z.infer<typeof propertyRequestSchema>;

type TPropertyResponse = z.infer<typeof propertyResponseSchema>;

export { TRealEstate, TProperty, TPropertyRequest, TPropertyResponse };
