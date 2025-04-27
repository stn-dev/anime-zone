import { describe, test, expect } from 'vitest'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useAppearOnScroll } from '../useAppearOnScroll'

describe('useAppearOnScroll', () => {

  test("should be true on mounted", () => {
    const { result } = renderHook(useAppearOnScroll)
    expect(result.current).toBe(true)
  })

  test('should be false on scroll down', async () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 100 })

    const { result } = renderHook(useAppearOnScroll)

    act(() => {
      window.scrollY = 200
      window.dispatchEvent(new Event('scroll'))
    })

    await waitFor(() => expect(result.current).toBe(false))

  })

  test('should be true on scroll to top', async () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 1000 })

    const { result } = renderHook(useAppearOnScroll)

    act(() => {
      window.screenY = 500
      window.dispatchEvent(new Event('scroll'))
    })

    await waitFor(() => expect(result.current).toBe(true))
  })

})