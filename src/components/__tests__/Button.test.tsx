import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button'

describe("button", () => {

  test('render text', () => {
    render(<Button label='button' />)
    const button = screen.getByText('button')
    expect(button).toBeInTheDocument()
  })

  test('call click event', async () => {
    const fn = vi.fn()
    render(<Button label='button' onClick={fn} />)
    const button = screen.getByText('button')
    await fireEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('to be disabled', () => {
    render(<Button label='button' disable={true} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveClass('opacity-50')
  })

  test('orange style', () => {
    render(<Button label='button' variant='orange' />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-contrasted text-dark')
  })

  test('stroked style', () => {
    render(<Button label='button' variant='stroked' />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-transparent text-contrasted border border-contrasted')
  })
})