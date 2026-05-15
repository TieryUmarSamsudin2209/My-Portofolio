"use client";

import { usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NProgressProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
   NProgress.start();
    setTimeout(() => NProgress.done(), 200);

    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return children;
}