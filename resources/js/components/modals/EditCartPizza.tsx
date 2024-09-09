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
import { cn, getPriceInLevas } from "@/lib/utils";

type EditCartPizzaProps = {
    pizza: CartPizza;
};

export function EditCartPizza({ pizza }: EditCartPizzaProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const form = useForm<z.infer<typeof editCartPizzaSchema>>({
        resolver: zodResolver(editCartPizzaSchema),
        defaultValues: {
            ingredients: pizza.withoutIngredients,
        },
    });

    function onSubmit(values: z.infer<typeof editCartPizzaSchema>) {
        console.log("zustand set pizza ingredients", values);
        setIsOpen(false);
    }

    function onOpenChange(open: boolean) {
        if (!open) {
            form.setValue("ingredients", pizza.withoutIngredients ?? []);
        }
        setIsOpen(open);
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <Button
                variant="link"
                className="group text-lg font-medium"
                onClick={() => setIsOpen(true)}
            >
                {pizza.name}
                <Pencil className="mb-1 hidden group-hover:inline" size={20} />
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>РЕДАКТИРАНЕ</DialogTitle>
                    <DialogDescription>
                        {pizza.quantity} x {pizza.name} -{" "}
                        {getPriceInLevas(pizza.prices[pizza.size])}
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
                                        <FormItem
                                            // key={ingredient}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                        >
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
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
