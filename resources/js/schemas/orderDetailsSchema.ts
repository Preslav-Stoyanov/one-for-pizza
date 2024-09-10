import { z } from "zod";

export const orderDetailsSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "Моля въведете личното си име" })
        .max(32, { message: "Твърде дълго име" }),
    lastName: z
        .string()
        .min(1, { message: "Моля въведете фамилията си" })
        .max(32, { message: "Твърде дълга фамилия" }),
    phone: z
        .string()
        .min(1, { message: "Моля въведете телефонния си номер" })
        .max(32, { message: "Невалиден телефонен номер" }),
    address: z
        .string()
        .min(1, { message: "Моля въведете адрес за доставка" })
        .max(64, { message: "Твърде дълъг адрес" }),
    entrance: z.string().optional(),
    floor: z.number().optional(),
    appartment: z.string().optional(),
    additionalInfo: z
        .string()
        .max(256, {
            message: "Допълнителната информация трябва да е под 256 символа",
        })
        .optional(),
});
