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
        .min(10, { message: "Моля въведете телефонния си номер" })
        .max(20, { message: "Невалиден телефонен номер" }),
    address: z
        .string()
        .min(1, { message: "Моля въведете адрес за доставка" })
        .max(64, { message: "Твърде дълъг адрес" }),
    entrance: z.string().optional(),
    floor: z
        .string()
        .optional()
        .refine(
            (floor) =>
                floor
                    ? Number(floor) &&
                      !floor.includes(".") &&
                      !floor.includes(",") &&
                      floor[0] !== "-"
                    : true,
            "Моля ползвайте валидни числа",
        )
        .refine(
            (floor) => (floor ? Number(floor) < 164 : true),
            "Няма сграда с толкова етажи все още",
        ),
    appartment: z.string().optional(),
    additionalInfo: z
        .string()
        .max(256, {
            message: "Допълнителната информация трябва да е под 256 символа",
        })
        .optional(),
});
