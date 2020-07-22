import { useEffect, useState } from "preact/hooks"
import { create, subscribe } from "../reactivity/create"

export const useViewModel = <T,>(cb: () => T): T => {
  const forceUpdate = useState(Object.create(null))[1]
  const vm$ = useState(() => create(cb()))[0]
  
  useEffect(() => {
    const sub = subscribe(vm$, () => forceUpdate(Object.create(null)))
    return () => sub.unsubscribe()
    // eslint-disable-next-line
  }, [vm$])

  return vm$
}