import { z } from "zod";
import {
  schedulesRequestSchemas,
  schedulesSchemas,
} from "../schemas/schedules.schemas";

type TSchedules = z.infer<typeof schedulesSchemas>;

type TShedulesRequest = z.infer<typeof schedulesRequestSchemas>;

export { TSchedules, TShedulesRequest };
