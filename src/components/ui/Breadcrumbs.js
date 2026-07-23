import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate">
        <li>
          <Link className="hover:text-deep" href="/">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.href}>
            <ChevronRight className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            <Link className="hover:text-deep" href={item.href} aria-current={item.current ? "page" : undefined}>
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
