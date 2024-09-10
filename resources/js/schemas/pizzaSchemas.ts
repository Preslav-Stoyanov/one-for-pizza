import { z } from "zod";

export const editCartPizzaSchema = z.object({
    ingredients: z.array(z.string()),
});
