import { MailIcon, MapPinIcon, PhoneIcon } from "@icons";

export default function CardPreview() {
    return (
        <div className="bg-white dark:bg-neutral-900 relative rounded-md overflow-hidden">
            <div className="h-20 from-green-500 bg-gradient-to-br to-green-300">

            </div>

            <div className="px-4 py-2">
                <h1 className="font-Poppins font-bold text-3xl dark:text-white">Maks Zając</h1>
                <p className="text-sm text-neutral-600 font-Roboto">Software Developer</p>

                <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-2 items-center text-neutral-700">
                        <div className="w-5 text-green-500">
                            <MailIcon />
                        </div>
                        <p className="font-Roboto text-sm dark:text-neutral-400">zaksiu279@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700">
                        <div className="w-5 text-green-500">
                            <PhoneIcon />
                        </div>
                        <p className="font-Roboto text-sm flex gap-1 items-center dark:text-neutral-400"><span className="text-xs dark:text-neutral-500 text-neutral-600">+48</span> 571 381 382</p>
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700">
                        <div className="w-5 text-green-500">
                            <MapPinIcon />
                        </div>
                        <p className="font-Roboto text-sm dark:text-neutral-400">Ubiad 119, Chełmiec 33-311</p>
                    </div>
                    <p className="text-center italic font-Roboto font-bold mt-4 dark:text-white">
                        "Passion for life."
                    </p>
                </div>
            </div>
        </div>
    );
}