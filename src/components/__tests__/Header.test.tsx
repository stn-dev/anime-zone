import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'

describe('header', () => {

  test('should render correctly', () => {
    render(<Header />, { wrapper: MemoryRouter })

    const el = screen.getByRole('banner')
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('text-white  flex justify-between items-center text-sm lg:text-base xl:text-lg py-0 md:py-3 xl:py-5 z-10')
  })

  test('should switch on CLOSE and MENU', async () => {
    render(<Header />, { wrapper: MemoryRouter })

    const p = screen.getByRole('paragraph')
    expect(p).toBeInTheDocument()
    expect(p).toHaveTextContent('MENU')

    await userEvent.click(p)
    expect(p).toHaveTextContent('CLOSE')
  })

  test('should render five links', () => {
    render(<Header />, { wrapper: MemoryRouter })

    const links = screen.queryAllByRole('link')
    expect(links).toHaveLength(5)
  })

})