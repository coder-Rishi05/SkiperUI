import React from "react"
import { IceCream2Icon, SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const BadgeButton = () => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-base md:left-6"
    >
      <IceCream2Icon className=" mr-2  fill-[#eeeebd] stroke-1 size-20 text-neutral-800" />
      Template
    </Badge>
  )
}

export default BadgeButton
