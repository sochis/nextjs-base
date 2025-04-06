import "server-only";

import { RootProps } from "@/types/features/language";
import { AppHeader } from "@/features/common/components/header";
import { AppNavigationRail } from "@/features/common/components/navigation-rail";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Layout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<RootProps>;
  }>,
) {
  const params = await props.params;

  const { children } = props;

  const dict = await getDictionary(params.lang);

  return (
    <div className="flex flex-col">
      <AppHeader params={params} dict={dict} />
      <div className="flex flex-row">
        <AppNavigationRail />
        {children}
      </div>
    </div>
  );
}
