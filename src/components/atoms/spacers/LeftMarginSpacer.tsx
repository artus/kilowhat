import { ReactNode } from "react"
import { MarginSpacer } from "./MarginSpacer"

interface LeftMarginSpacer {
  size?: number,
  children: ReactNode
}

export const LeftMarginSpacer: React.FC<LeftMarginSpacer> = ({
  size,
  children
}) => {
  return <MarginSpacer
    size={size}
    bottom={false}
    right={false}
    top={false}
  >
    {children}
  </MarginSpacer>
}