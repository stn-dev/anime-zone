import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SkeletonGroup from '../SkeletonGroup'

describe('skeleton group', () => {

  test('to be render and have right class', () => {
    render(<SkeletonGroup />)
    const element = screen.getByTestId('skeleton-group')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('w-full min-h-screen pt-[50px] md:pt-[70px] xl:pt-[100px] grid items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-6 md:grid-rows-3 xl:grid-rows-2 gap-5 ')
  })

  test('to have six skeleton', () => {
    render(<SkeletonGroup />)
    const skeletons = screen.queryAllByTestId('skeleton')
    expect(skeletons).toHaveLength(6)
  })

})