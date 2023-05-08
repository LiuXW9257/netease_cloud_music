import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../index'

// 通过函数构造签名的形式使得useAppSelector能够推断出store的类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
