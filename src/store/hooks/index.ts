import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { RootState, DispatchType } from '../index'

// 通过函数构造签名的形式使得useAppSelector能够推断出store的类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
