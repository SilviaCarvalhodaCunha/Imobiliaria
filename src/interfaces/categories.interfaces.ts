import { z } from "zod";
import {
  categoriesResponseSchema,
  categoryRequestSchema,
  categorySchema,
} from "../schemas/categories.schemas";

type TCategory = z.infer<typeof categorySchema>;

type TCategoryRequest = z.infer<typeof categoryRequestSchema>;

type TCategories = z.infer<typeof categoriesResponseSchema>;

export { TCategory, TCategoryRequest, TCategories };
