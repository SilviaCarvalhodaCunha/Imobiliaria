import { z } from "zod";

const schedulesSchemas = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int(),
  userId: z.number(),
});

const schedulesRequestSchemas = schedulesSchemas.omit({
  id: true,
  userId: true,
});

export { schedulesSchemas, schedulesRequestSchemas };
