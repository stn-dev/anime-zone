import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CardCharacters from '../CardCharacters'
import { MemoryRouter } from 'react-router'

describe.only('card characters', () => {

  test('should render correctly', () => {
    render(<CardCharacters
      id='1'
      imageSrc='/test'
      japan_name='japan name'
      name='name'
    />, { wrapper: MemoryRouter })

    const el = screen.getByRole('link')
    expect(el).toBeInTheDocument()
    expect(el).toHaveAttribute('href', '/characters/1')

    const name = screen.getByRole('heading', { level: 2 })
    expect(name).toHaveTextContent('name')

    const japanName = screen.getByRole('paragraph')
    expect(japanName).toHaveTextContent('japan name')

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/test')
  })

})