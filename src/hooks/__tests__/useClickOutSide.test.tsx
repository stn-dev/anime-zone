import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useClickOutSide } from '../useClickOutSide'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'

// more easy to create a fake component for custom hook that interact with the dom
const TestComponents = ({ fn }: { fn: () => void }) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutSide(ref, fn)
  return (
    <>
      <div ref={ref} >inside</div>
      <div >outside</div>
    </>
  )
}

describe('useClickOutSide', () => {

  test('should call the function if click outside', async () => {
    const fn = vi.fn()
    render(<TestComponents fn={fn} />)
    const outsideElement = screen.getByText('outside')
    await userEvent.click(outsideElement)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('shoul not calm the funtion when click in the element', async () => {
    const fn = vi.fn()
    render(<TestComponents fn={fn} />)
    const insideElement = screen.getByText('inside')
    await userEvent.click(insideElement)

    expect(fn).not.toHaveBeenCalled()
  })

})