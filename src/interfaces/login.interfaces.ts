import { z } from "zod";
import loginSchema from "../schemas/login.schemas";

type Tlogin = z.infer<typeof loginSchema>;

export default Tlogin;
