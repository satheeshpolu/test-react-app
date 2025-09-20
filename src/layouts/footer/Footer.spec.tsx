import { describe, it, expect } from 'vitest'
import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
    it('renders the current year and text', () => {
        const currentYear = new Date().getFullYear()

        render(<Footer />)
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
        expect(footer).toHaveClass('footer')
        expect(footer).toHaveTextContent(`© ${currentYear} My App. All rights reserved.`)
    })
})