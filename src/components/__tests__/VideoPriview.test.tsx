import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import VideoPriview from '../VideoPriview'

describe('video', () => {

  test('to be rendered', () => {
    render(<VideoPriview src='/video' title='naruto' />)
    const element = screen.getByTitle('naruto_trailer')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('w-full h-auto')
    expect(element).toHaveAttribute('allowfullscreen')
  })

})