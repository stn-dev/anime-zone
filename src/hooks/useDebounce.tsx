import { useEffect, useState } from 'react'

function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebonceValue] = useState(value)

  useEffect(() => {
    const timeOut = setTimeout(() => setDebonceValue(value), delay)
    return () => clearTimeout(timeOut)
  }, [value, delay])

  return debounceValue
}

export default useDebounce