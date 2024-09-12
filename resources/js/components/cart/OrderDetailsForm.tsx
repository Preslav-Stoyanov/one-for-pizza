import { orderDetailsSchema } from "@/schemas/orderDetailsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import qs from "query-string";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { router } from "@inertiajs/react";
import { useCartStore } from "@/stores/cartStore";
import axios from "axios";
import { api } from "@/api";
import { Dispatch, SetStateAction } from "react";

export function OrderDetailsForm({
    setCheckoutData,
}: {
    setCheckoutData: Dispatch<
        SetStateAction<{ orderUuid: string; clientSecret: string } | undefined>
    >;
}) {
    const pizzas = useCartStore((state) => state.pizzas);
    const form = useForm<z.infer<typeof orderDetailsSchema>>({
        resolver: zodResolver(orderDetailsSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            entrance: "",
            floor: undefined,
            appartment: "",
            additionalInfo: "",
        },
    });

    async function onSubmit(orderDetails: z.infer<typeof orderDetailsSchema>) {
        const res = await api.getClientSecret({
            pizzas,
            ...orderDetails,
        });
        if (res) setCheckoutData(res);
    }

    return (
        <div className="w-fit">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Име
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Джон" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Фамилия
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Доу" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Мобилен телефон
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="08xxxxxxxx/+3598xxxxxxxx"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Адрес за доставка
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='bulevard "Lipnik", 123'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-8">
                        <FormField
                            control={form.control}
                            name="entrance"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Вход</FormLabel>
                                    <FormControl>
                                        <Input placeholder="А" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="floor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Етаж</FormLabel>
                                    <FormControl>
                                        <Input placeholder="6" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="appartment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Апартамент</FormLabel>
                                <FormControl>
                                    <Input placeholder="1ForFit" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Допълнителна информация</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder='Моля въведете коментари само по доставката (Напр: "Звънецът не работи", "Моля обадете се при пристигане")'
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col-reverse justify-between gap-4 2xs:flex-row">
                        <Button type="submit" variant="outline" disabled={true}>
                            Наложен платеж
                        </Button>
                        <Button type="submit" variant="outline">
                            Плащане онлайн
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
