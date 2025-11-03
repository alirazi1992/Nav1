"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useUIStore } from "@/lib/store/ui-store";

interface SidebarItem {
  titleFa: string;
  titleEn: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarItem[];
  /** Optional callback for when a nav item is clicked (used to close mobile sheet) */
  onNavigate?: () => void;
}

export function Sidebar({
  items,
  className,
  onNavigate,
  ...props
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-full flex-col border-l border-border bg-sidebar",
        className
      )}
      {...props}
    >
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="flex flex-col gap-2" aria-label="Primary navigation">
          {items.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "group w-full justify-between gap-3 px-3 py-2 text-right transition",
                  "flex-row-reverse",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                    : "hover:bg-sidebar-accent/40"
                )}
              >
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="flex w-full flex-row-reverse items-center gap-3"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border transition-colors",
                      isActive
                        ? "border-transparent bg-sidebar text-sidebar-foreground"
                        : "border-border bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col items-end leading-tight">
                    <span className="truncate text-sm font-semibold">{item.titleFa}</span>
                    <span className="truncate text-xs text-muted-foreground">{item.titleEn}</span>
                  </span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}

export function MobileSidebar({ items }: { items: SidebarProps["items"] }) {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const setSidebarOpen = useUIStore((s) => s.setSidebarOpen);

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent side="right" className="w-64 p-0">
        {/* Hidden but accessible title to satisfy Radix Dialog a11y */}
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        </SheetHeader>

        <Sidebar
          items={items}
          onNavigate={() => setSidebarOpen(false)}
          className="border-0"
        />
      </SheetContent>
    </Sheet>
  );
}
