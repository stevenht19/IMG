import { useEffect } from 'react'

export const useScrollBehavior = (pos, dependencies) => {
  return useEffect(() => {
    const toPosition = () => {
      window.scrollTo(pos)
    }
    toPosition()
  }, dependencies)
}
