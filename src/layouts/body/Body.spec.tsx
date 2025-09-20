// Body.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom'
import Body from './Body'

describe('<Body />', () => {
  it('renders the index route inside the Outlet', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<div>Home content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Home content')).toBeInTheDocument()
  })

  it('renders a nested child route inside the Outlet', () => {
    render(
      <MemoryRouter initialEntries={['/a']}>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="a" element={<div>Page A</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Page A')).toBeInTheDocument()
  })

  it('updates the Outlet when navigating between child routes', async () => {
    const user = userEvent.setup()

    function A() {
      return (
        <div>
          <h1>Page A</h1>
          <Link to="/b">Go to B</Link>
        </div>
      )
    }

    function B() {
      return (
        <div>
          <h1>Page B</h1>
          <Link to="/a">Go to A</Link>
        </div>
      )
    }

    render(
      <MemoryRouter initialEntries={['/a']}>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="a" element={<A />} />
            <Route path="b" element={<B />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    // Starts on /a
    expect(screen.getByRole('heading', { name: 'Page A' })).toBeInTheDocument()

    // Navigate to /b
    await user.click(screen.getByRole('link', { name: 'Go to B' }))
    expect(screen.getByRole('heading', { name: 'Page B' })).toBeInTheDocument()

    // Navigate back to /a
    await user.click(screen.getByRole('link', { name: 'Go to A' }))
    expect(screen.getByRole('heading', { name: 'Page A' })).toBeInTheDocument()
  })
})
