import { CSSProperties, ReactNode } from 'react'

export default interface BaseProps {
  style?: CSSProperties
  className?: string | string[]
  children?: ReactNode
}
