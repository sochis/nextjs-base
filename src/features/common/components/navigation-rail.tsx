"use client";

import { NavigationRail } from "@/components/navigation-rail/navigation-rail";
import { usePathname, useRouter } from "next/navigation";
export function AppNavigationRail() {
  const router = useRouter();
  const pathname = usePathname();

  async function navigatePage(path: string) {
    const lang = pathname.split("/")[1];
    const newPath = `/${lang}/${path}`;

    router.push(newPath);
  }

  return <NavigationRail></NavigationRail>;
}
