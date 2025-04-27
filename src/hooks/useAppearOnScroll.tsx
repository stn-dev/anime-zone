import { useEffect, useRef, useState } from "react"

export const useAppearOnScroll = () => {
  const [toggle, setToggle] = useState(true)
  const lastScrollValueRef = useRef(window.scrollY)

  useEffect(() => {
    const scrollHandler = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScrollValueRef.current) {
        setToggle(false)
      } else {
        setToggle(true)
      }
      lastScrollValueRef.current = currentScroll
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [toggle])

  return toggle
}