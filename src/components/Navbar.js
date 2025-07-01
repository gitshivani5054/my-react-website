import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{marginRight:'1rem'}}>About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
