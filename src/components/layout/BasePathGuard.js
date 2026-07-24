"use client";

import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function prefixPath(value) {
  if (!basePath || !value || !value.startsWith("/")) return value;
  if (value === basePath || value.startsWith(`${basePath}/`)) return value;
  return `${basePath}${value}`;
}

function applyBasePath(root) {
  if (!basePath || !(root instanceof Element)) return;

  const elements = root.matches?.("a[href], img[src], source[src], source[srcset], video[poster], form[action]")
    ? [root]
    : Array.from(root.querySelectorAll?.("a[href], img[src], source[src], source[srcset], video[poster], form[action]") || []);

  for (const element of elements) {
    for (const attribute of ["href", "src", "poster", "action"]) {
      if (!element.hasAttribute(attribute)) continue;
      const value = element.getAttribute(attribute);
      const updated = prefixPath(value);
      if (updated !== value) element.setAttribute(attribute, updated);
    }

    if (element.hasAttribute("srcset")) {
      const value = element.getAttribute("srcset");
      const updated = value
        .split(",")
        .map((entry) => {
          const [url, ...descriptor] = entry.trim().split(/\s+/);
          return [prefixPath(url), ...descriptor].join(" ");
        })
        .join(", ");
      if (updated !== value) element.setAttribute("srcset", updated);
    }
  }
}

export function BasePathGuard() {
  useEffect(() => {
    if (!basePath) return undefined;
    applyBasePath(document.documentElement);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) applyBasePath(node);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
