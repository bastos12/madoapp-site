"use client";

import Link from "next/link";
import React from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

type TrackedLinkProps = React.ComponentProps<typeof Link> & {
  eventName: string;
  eventProps?: Record<string, string>;
};

export function TrackedLink({
  eventName,
  eventProps,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.plausible?.(eventName, { props: eventProps });
    onClick?.(e);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
