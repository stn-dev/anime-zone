import { describe, test, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import useScrollToTop from '../useScrollTop'
import { MemoryRouter } from 'react-router'

describe.only('useScrollTop', () => {

  test('window to be on the top', () => {
    const fn = vi.fn()
    window.scrollTo = fn
    renderHook(useScrollToTop, { wrapper: MemoryRouter })
    expect(fn).toHaveBeenCalledWith(0, 0)
  })

})