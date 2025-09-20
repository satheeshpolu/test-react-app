import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

// (Optional) safely stub window.location for the logo click test
const originalLocation = window.location
beforeAll(() => {
  Object.defineProperty(window, 'location', {
    // replace the entire object so setting href doesn't throw in JSDOM
    value: { ...originalLocation, href: 'http://localhost/' },
    writable: true,
  })
})

afterAll(() => {
  Object.defineProperty(window, 'location', { value: originalLocation })
})

const renderWithRouter = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  )

describe('Header', () => {
  it('renders logo and nav links with correct hrefs', () => {
    renderWithRouter()

    // Logo is visible
    expect(screen.getByText(/MyLogo/i)).toBeInTheDocument()

    // Links exist and point to correct routes
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
  })

//   it('sets window.location when the logo is clicked (manual redirect)', async () => {
//     const user = userEvent.setup()
//     renderWithRouter()

//     const logo = screen.getByText(/MyLogo/i)
//     await user.click(logo)

//     // Your component does: window.location.href = '/'
//     expect(window.location.href.endsWith('/')).toBe(true)
//   })
})
