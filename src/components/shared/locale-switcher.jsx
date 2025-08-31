"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    startTransition(() => {
      const segments = pathname.split("/");
      segments[1] = newLocale; 
      router.push(segments.join("/"));
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="size-10 bg-main-orange text-white rounded-full  font-semibold flex items-center justify-center cursor-pointer hover:bg-main-navy  transition-all duration-300"
    >
      {locale === "en" ? "ع" : "EN"}
    </button>
  );
};

export default LocaleSwitcher;

