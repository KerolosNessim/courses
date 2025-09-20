"use client"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { motion } from "framer-motion"
import { FaX } from "react-icons/fa6"

const CustomAlert = ({ open, onOpenChange, icon, title, description }) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogPortal>
        {/* الخلفية السودا */}
        <AlertDialogOverlay className="fixed inset-0 z-50 bg-black/40" />

        {/* المحتوى مع الأنيمشن */}
        <AlertDialogContent asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="!p-0 overflow-hidden fixed top-1/2 left-1/2 z-50  lg:!w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-2xl lg:rounded-[50px] bg-white  shadow-lg bg-[url('/home/bg-squares.svg')] bg-cover  bg-no-repeat"
          >
            <div className="lg:p-16 p-10 bg-gradient-to-r from-main-orange/20 to-transparent">

              {/* عناصر لازم لـ Radix (مخفيين للـ accessibility) */}
              <AlertDialogTitle className="sr-only">{title || "Alert"}</AlertDialogTitle>
              <AlertDialogDescription className="sr-only">
                {description || "Alert description"}
              </AlertDialogDescription>

              {/* زرار الإغلاق
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-main-orange"
            >
              <FaX size={18} />
            </button> */}

              {/* الأيقونة */}
              {icon && <div className="mx-auto text-5xl mb-4 w-fit">{icon}</div>}

              {/* العنوان */}
              {title && (
                <h3 className="text-xl font-bold text-main-orange text-center">
                  {title}
                </h3>
              )}

              {/* الوصف */}
              {description && (
                <p className="text-sm text-main-navy font-semibold text-center mt-2">
                  {description}
                </p>
              )}
            </div>

          </motion.div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  )
}

export default CustomAlert
