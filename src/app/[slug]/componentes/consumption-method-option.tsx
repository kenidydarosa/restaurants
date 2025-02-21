import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ConsumptionMethod } from "@prisma/client";

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageUrl,
  imageAlt,
  buttonText,
  option
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            className="object-contain"
            src={imageUrl}
            fill
            alt={imageAlt}
          />
        </div>
        <Button variant={"secondary"} className="rounded-full">
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
