import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

export function InfoButton() {
    return (
        <Dialog>
            <DialogTrigger className="h-full">
                <Info className="h-[2rem] w-auto stroke-[1.7] xs:h-[2.8rem]" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Информация за страницата</DialogTitle>
                    <DialogDescription>
                        <ul className="list-disc">
                            <li>
                                За поръчки над 80лв без стойността на
                                опаковките- доставката е БЕЗПЛАТНА.
                            </li>
                            <li>Lorem.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
