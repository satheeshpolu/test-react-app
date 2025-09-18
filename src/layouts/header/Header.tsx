import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{
            width: '95%',
            padding: '1rem',
            background: '#222',
            color: '#fff',
            textAlign: 'center',
            position: 'fixed',
            left: 0,
            top: 0,
        }}>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo on the left */}
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
                    MyLogo
                </div>
                {/* Links on the right */}
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;