/**
 * 是否是纯元素
 * @param el
 */
export default function isPureElement(el: any): el is string | number {
  return typeof el === 'string' || typeof el === 'number'
}
