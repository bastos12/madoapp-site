"use client";

import Link from "next/link";
import React from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void;
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
    window.fbq?.("trackCustom", eventName, eventProps);
    onClick?.(e);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
