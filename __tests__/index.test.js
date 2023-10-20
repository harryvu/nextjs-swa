import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
 
describe('LFS Unit Tests', () => {
  it('sort by product names', () => {
    const products = [
      { name: 'apple' },
      { name: 'orange' },
      { name: 'banana' },
    ]
 
    const sortedProducts = products.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    expect(products[1].name).toBe('banana')
  })
})