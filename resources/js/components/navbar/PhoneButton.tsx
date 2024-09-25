import { PhoneCall as PhoneCallIcon } from "lucide-react";
import { toast } from "sonner";

export function PhoneButton() {
    function onClick() {
        const currentHours = new Date().getHours();
        const openingHour = 8;
        const closingHour = 23;

        if (currentHours >= openingHour && currentHours < closingHour)
            window.open("tel:0888888888", "_self");
        else toast.error("Работим между 08:00 и 23:00");
    }

    return (
        <div className="flex h-full items-center gap-2">
            <PhoneCallIcon
                className="h-[1.8rem] w-auto cursor-pointer stroke-[1.8] xs:h-[2.55rem]"
                onClick={onClick}
            />
            <div className="hidden flex-col md:flex">
                <span className="text-white">от 08:00 до 23:00</span>
                <span className="font-sans font-bold">0888 888888</span>
            </div>
        </div>
    );
}
