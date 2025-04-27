import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CardAnime from '../CardAnime'
import { MemoryRouter } from 'react-router'

describe('card anime', () => {

  test('hould correctly rendered', () => {

    render(<CardAnime
      id={1}
      imageSrc='/test'
      isFullData
      title='test anime'
      episode={22}
      genres={[{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }]}
    />, { wrapper: MemoryRouter })

    const el = screen.getByRole('link')
    expect(el).toBeInTheDocument()
    expect(el).toHaveAttribute('href', '/anime/1')
    expect(el).toHaveClass('group w-full shadow-neutral-50 relative delay-0 duration-0 overflow-hidden border border-neutre rounded-tl-3xl rounded-br-3xl max-h-[550px]')
  })

  test('should not rendter p nor span', () => {
    render(<CardAnime
      id={1}
      imageSrc='/test'
      isFullData={false}
      title='test anime'
      episode={22}
      genres={[{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }]}
    />, { wrapper: MemoryRouter })

    const paragraph = screen.queryAllByRole('paragraph')
    expect(paragraph).toHaveLength(0)
    const span = screen.queryByText('1')
    expect(span).not.toBeInTheDocument()
  })

})