"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {motion} from "framer-motion"
const CustomBreadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center  text-xs font-bold">
        {items.map((item, index) => {
          const isFirst = index === 0
          const isLast = index === items.length - 1

          return (
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 * index }}
              key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${isFirst ? "text-main-orange" : "text-main-navy"} hover:underline`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`${isFirst ? "text-main-orange" : "text-main-navy"}`}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="mx-2 h-4 w-4 text-main-orange" />
              )}
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

export default CustomBreadcrumbs
