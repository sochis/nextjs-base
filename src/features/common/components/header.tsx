import "server-only";

import { TextLink } from "@/components/link/link";
import { AppBar } from "@/components/header/app-bar";
import { NavigationRailButton } from "@/components/navigation-rail/navigation-rail";
import { I18nProps, LangProps } from "@/types/i18n/language";

export async function AppHeader({
  params,
  dict,
}: Readonly<{ params: LangProps; dict: I18nProps }>) {
  return (
    <AppBar>
      <div className="flex items-center gap-x-10">
        <NavigationRailButton />
        <TextLink
          className="font-serif text-lg font-bold tracking-wide"
          path={`/${params.lang}/home`}
          text={dict.product.title}
        />
      </div>
    </AppBar>
  );
}
