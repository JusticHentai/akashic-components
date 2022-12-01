import { ButtonProps } from './interface'
import style from './style/index.module.scss'

const Button = (props: ButtonProps) => {
  return <div className={style.button}>{props.size}</div>
}

export default Button
