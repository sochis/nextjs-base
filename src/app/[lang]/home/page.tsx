import "server-only";

import { LangProps } from "@/types/i18n/language";
import { getDictionary } from "@/i18n/dictionaries";
import { Introduction } from "@/features/home/introduction";

export default async function Home({ params }: { params: Promise<LangProps> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <Introduction dict={dict} />;
}
