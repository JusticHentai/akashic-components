import { ForwardedRef, forwardRef, MouseEventHandler, useRef } from 'react'
import useMergeProps from '../hooks/useMergeProps'
import mergeChildren from '../utils/mergeChildren'
import mergeClassName from '../utils/mergeClassName'
import { defaultProps } from './config'
import { ButtonProps } from './interface'
// import style from './style/index.module.scss'

const Button = (
  baseProps: ButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) => {
  // 处理 props
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, {})
  const { onClick, disabled, loading, icon, children, htmlType, ...rest } =
    props

  // 让父组件使用 button 的 dom 节点
  const innerButtonRef = useRef<HTMLButtonElement>(null)
  const buttonRef = ref || innerButtonRef

  // 基础样式处理
  const classNames = mergeClassName([])

  // 点击事件处理
  const handleClick: MouseEventHandler<HTMLElement> = (e: any) => {
    if (loading || disabled) {
      typeof e?.preventDefault === 'function' && e.preventDefault()

      return
    }

    onClick && onClick(e)
  }

  // 子元素和 icon 组合处理
  const iconNode = loading ? <div>todo</div> : icon
  const InnerContent = (
    <>
      {iconNode}
      {mergeChildren(children)}
    </>
  )

  return (
    <button
      ref={buttonRef}
      {...rest}
      // style={style}
      className={classNames}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {InnerContent}
    </button>
  )
}

const ForwardRefButton = forwardRef<HTMLButtonElement, ButtonProps>(Button)

ForwardRefButton.displayName = 'Button'

export default Button
