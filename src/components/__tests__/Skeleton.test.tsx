import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skeleton from '../Skeleton'

describe('skeleton', () => {

  test('to be render', () => {
    render(<Skeleton />)
    const element = screen.getByTestId('skeleton')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('w-full max-w-[450px] h-full min-h-[400px] max-h-[620px] rounded-xl bg-blue flex flex-col gap-5 p-5 relative overflow-hidden brightness-65')
  })

})