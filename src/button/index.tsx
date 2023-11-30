import React from 'react'
import { ButtonProps } from './interface'
import style from './style/index.module.scss'

const Button = (props: ButtonProps) => {
  const { onClick, disabled, loading } = props

  const handleClick: React.MouseEventHandler<HTMLElement> = (
    event: any
  ): void => {
    if (loading || disabled) {
      typeof event?.preventDefault === 'function' && event.preventDefault()
      return
    }
    onClick && onClick(event)
  }

  return <button className={style.button} onClick={handleClick}></button>
}

export default Button
