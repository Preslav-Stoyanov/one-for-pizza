import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { editCartPizzaSchema } from "@/schemas/pizzaSchemas";
import { CartPizza } from "@/types";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { cn, getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";

type EditCartPizzaProps = {
    pizza: CartPizza;
    pizzaIndex: number;
};

export function EditCartPizza({ pizza, pizzaIndex }: EditCartPizzaProps) {
    const [isOpen, setIsOpen] = useState<boolean>();
    const setWithoutIngredients = useCartStore(
        (state) => state.setWithoutIngredients,
    );

    const form = useForm<z.infer<typeof editCartPizzaSchema>>({
        resolver: zodResolver(editCartPizzaSchema),
        defaultValues: {
            ingredients: [],
        },
    });

    function onSubmit(values: z.infer<typeof editCartPizzaSchema>) {
        setWithoutIngredients(pizzaIndex, values.ingredients);
        setIsOpen(false);
    }

    function onOpenChange(open: boolean) {
        form.setValue("ingredients", pizza.withoutIngredients ?? []);

        setIsOpen(open);
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <Button
                variant="link"
                className="group text-lg font-medium"
                onClick={() => onOpenChange(true)}
            >
                {pizza.name} ({getSizeGrams(pizza.sizes[pizza.size])})
                <Pencil className="mb-1 hidden group-hover:inline" size={20} />
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>РЕДАКТИРАНЕ</DialogTitle>
                    <DialogDescription>
                        {pizza.quantity} x {pizza.name} -{" "}
                        {getPriceInLevas(
                            pizza.quantity * pizza.prices[pizza.size],
                        )}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        {pizza.ingredients?.map((ingredient) => (
                            <FormField
                                key={ingredient}
                                control={form.control}
                                name="ingredients"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(
                                                        ingredient,
                                                    )}
                                                    onCheckedChange={(
                                                        checked,
                                                    ) =>
                                                        checked
                                                            ? field.onChange([
                                                                  ...field.value,
                                                                  ingredient,
                                                              ])
                                                            : field.onChange(
                                                                  field.value?.filter(
                                                                      (value) =>
                                                                          value !==
                                                                          ingredient,
                                                                  ),
                                                              )
                                                    }
                                                />
                                            </FormControl>
                                            <FormLabel
                                                className={cn(
                                                    "font-normal capitalize",
                                                    field.value?.includes(
                                                        ingredient,
                                                    )
                                                        ? "text-zinc-400 line-through"
                                                        : "",
                                                )}
                                            >
                                                {ingredient}
                                            </FormLabel>
                                        </FormItem>
                                    );
                                }}
                            />
                        ))}
                        <FormMessage />
                        <div className="flex w-full justify-between">
                            <Button variant="secondary">Отказ</Button>
                            <Button type="submit">Запазване</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
