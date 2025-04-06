"use client";

import { MdMenu } from "react-icons/md";
import { ReactElement } from "react";
import { NavigationRailProps } from "@/types/components/navigation-rail/navigation-rail";
import { useNavigationRailStore } from "@/features/common/stores";

export function NavigationRailButton(): ReactElement {
  const { isOpen, setIsOpen } = useNavigationRailStore();

  const toggleNavigationRail = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="bg-transparent rounded-full hover:bg-gray-200 hover:dark:bg-opacity-20"
      onClick={toggleNavigationRail}
    >
      <MdMenu className="text-2xl" />
    </button>
  );
}

export function NavigationRail({
  children,
}: NavigationRailProps): ReactElement {
  const { isOpen } = useNavigationRailStore();

  return (
    <div
      className={`transition-all duration-300 overflow-hidden transform flex-shrink-0 ${
        isOpen ? "w-20 translate-x-0" : "w-0"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
