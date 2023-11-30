import BaseProps from '../@types/BaseProps'

export interface ButtonProps extends BaseProps {
  size: string
  disabled: boolean
  loading: boolean
  onClick: (event: MouseEvent) => void
}
