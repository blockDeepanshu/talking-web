"use client";

import { PropsWithChildren } from "react";
import { HeroUIProvider } from "@heroui/react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
