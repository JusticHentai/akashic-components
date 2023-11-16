import { useMemo } from 'react'
import omit from '../utils/omit'

export type MergePropsOptions = {
  ignorePropsFromGlobal?: boolean
}

export default function useMergeProps<PropsType>(
  componentProps: PropsType & MergePropsOptions,
  defaultProps: Partial<PropsType>,
  globalComponentConfig: Partial<PropsType>
): PropsType {
  const { ignorePropsFromGlobal } = componentProps

  const _defaultProps = useMemo(() => {
    return {
      ...defaultProps,
      ...(ignorePropsFromGlobal ? {} : globalComponentConfig),
    }
  }, [defaultProps, globalComponentConfig, ignorePropsFromGlobal])

  return useMemo(() => {
    // 移除 ignorePropsFromGlobal
    const mProps = omit(componentProps, ['ignorePropsFromGlobal']) as PropsType

    return {
      ..._defaultProps,
      ...mProps,
    }
  }, [componentProps, _defaultProps])
}
