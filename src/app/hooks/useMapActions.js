import { useMemo, useRef } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export const useMapActions = (actionsMap) => {
  const cachedActions = useRef(actionsMap).current
  const dispatch = useDispatch()
  return useMemo(() => {
    return bindActionCreators(cachedActions, dispatch)
  }, [cachedActions, dispatch])
}
