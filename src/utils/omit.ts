export default function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string> // string 为了某些没有声明的属性被 omit
): Omit<T, K> {
  const clone = { ...obj }

  for (const key of keys) {
    if (key in clone) {
      delete clone[key as K]
    }
  }

  return clone
}
