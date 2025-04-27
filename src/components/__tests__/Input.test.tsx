import { describe, test, expect, vi } from 'vitest'
import { logRoles, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../Input'

describe('input components', () => {

  test('to exist', () => {
    const view = render(<Input placeholder='input text' />)
    logRoles(view.container)
    const input = screen.getByPlaceholderText('input text')
    expect(input).toBeInTheDocument()
  })

  test("to have value", () => {
    render(<Input placeholder='input text' value='mario' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('mario')
  })

  test('call onChange function', async () => {
    const fn = vi.fn()
    render(<Input placeholder='input text' onChange={fn} />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'test')
    expect(fn).toHaveBeenCalledTimes(4)
    expect(input).toHaveValue('test')
  })
})