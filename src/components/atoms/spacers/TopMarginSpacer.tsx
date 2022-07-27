import { ReactNode } from "react"
import { MarginSpacer } from "./MarginSpacer"

interface TopMarginSpacer {
  size?: number,
  children?: ReactNode
}

export const TopMarginSpacer: React.FC<TopMarginSpacer> = ({
  size,
  children
}) => {
  return <MarginSpacer
    size={size}
    bottom={false}
    right={false}
    left={false}
  >
    {children}
  </MarginSpacer>
}