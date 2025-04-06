import "server-only";

import Link from "next/link";
import { TextLinkParams } from "@/types/components/link/link";

export function TextLink({ path, text, className }: Readonly<TextLinkParams>) {
  return (
    <Link
      className={`text-black dark:text-white ${className || ""}`}
      href={path}
    >
      {text}
    </Link>
  );
}
