import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className='container'>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo on the left */}
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer', color: '#646cff' }} onClick={() => window.location.href = '/'}>
                    MyLogo
                </div>
                {/* Links on the right */}
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;