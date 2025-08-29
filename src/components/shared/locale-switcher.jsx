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
      className="px-3 py-1 rounded-md border bg-gray-200 hover:bg-gray-300 transition"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LocaleSwitcher;

