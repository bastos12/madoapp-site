"use client";

import Link from "next/link";
import { usePlausible } from "next-plausible";
import React from "react";

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
  const plausible = usePlausible();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    plausible(eventName, { props: eventProps });
    onClick?.(e);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
