"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex relative  w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative rounded-none lg:px-6 px-4  py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none w-fit text-main-gray data-[state=active]:text-main-navy data-[state=active]:before:w-full data-[state=active]:before:bg-main-navy data-[state=active]:before:h-[2px]  data-[state=active]:before:-bottom-[2px] data-[state=active]:before:start-0 data-[state=active]:before:absolute   text-xs font-medium outline-none data-[state=active]:font-semibold",
        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
