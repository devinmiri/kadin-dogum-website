import { Link, useLocation } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar container">
      <Link to="/" className="nav-brand">
        <Stethoscope size={28} />
        <span>Op. Dr. Gönül İzzat Miriyev</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={isActive('/')}>Ana Sayfa</Link>
        <Link to="/hakkimda" className={isActive('/hakkimda')}>Hakkımda</Link>
        <Link to="/hizmetler" className={isActive('/hizmetler')}>Hizmetler</Link>
        <Link to="/blog" className={isActive('/blog')}>Sağlık Köşesi</Link>
        <Link to="/iletisim" className="btn btn-primary">Randevu Al</Link>
      </div>
    </nav>
  );
}
