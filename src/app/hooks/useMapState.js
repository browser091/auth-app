import { useSelector, shallowEqual } from 'react-redux'

export const useMapState = (selector) => {
  return useSelector(selector, shallowEqual)
}
