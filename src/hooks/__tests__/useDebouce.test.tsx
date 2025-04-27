import { describe, test, expect, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useDebounce from '../useDebounce'

describe('useDebounce', () => {

  // this allow us to control time in test file
  vi.useFakeTimers()

  test('should update value after 500ms', async () => {

    //initialize the hook with a default value and dalay
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'test', delay: 500 }
    })

    expect(result.current).toBe('test')

    // write a new value 500ms after the default value
    rerender({ value: 'hello test', delay: 500 })
    expect(result.current).toBe('test')

    // wait 400ms after the new value
    act(() => vi.advanceTimersByTime(400))
    expect(result.current).toBe('test')

    // wait 100ms again to to see de debounced value
    act(() => vi.advanceTimersByTime(100))
    expect(result.current).toBe('hello test')
  })
})