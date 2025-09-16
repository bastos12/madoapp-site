"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1 hover:cursor-pointer relative z-20"
    >
      <Image
        src="/icon_app.png"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="font-medium text-black dark:text-white">Mado</span>
    </Link>
  );
};
