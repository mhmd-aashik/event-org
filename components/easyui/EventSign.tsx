import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Button } from "../ui/button";

type Props = {
  imageUrl: string;
  description: string;
  btn: string;
};

const EventSign = ({ description, imageUrl, btn }: Props) => {
  return (
    <Link
      href="/sign-up"
      className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border bg-slate-300"
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <Image
          className="rounded-t-lg object-cover h-[200px]"
          src={imageUrl}
          alt="image"
          width={300}
          height={100}
        />
      </div>
      <div className="p-6">
        <p className="text-base line-clamp-2 text-center">{description}</p>
      </div>
      <p className="text-center p-3 bg-black text-white">{btn}</p>
    </Link>
  );
};

export default EventSign;
