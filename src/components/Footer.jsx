import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Op. Dr. Gönül İzzat Miriyev</h3>
            <p style={{ marginTop: '1rem', color: '#9ca3af' }}>
              Diyarbakır'da kadın hastalıkları ve doğum uzmanı olarak, sağlığınız için en güvenilir ve modern tıbbi yaklaşımlarla yanınızdayız.
            </p>
          </div>
          
          <div>
            <h3>Hızlı Menü</h3>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/hakkimda" className="footer-link">Hakkımda</Link>
              <Link to="/hizmetler" className="footer-link">Hizmetlerimiz</Link>
              <Link to="/blog" className="footer-link">Sağlık Köşesi (Blog)</Link>
              <Link to="/iletisim" className="footer-link">İletişim & Randevu</Link>
            </div>
          </div>
          
          <div>
            <h3>İletişim</h3>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
                <Phone size={18} />
                <span>+90 555 123 45 67</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
                <Mail size={18} />
                <span>info@drgonulizzat.com</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
                <MapPin size={18} />
                <span>Kayapınar / Diyarbakır</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3>Çalışma Saatleri</h3>
            <div style={{ marginTop: '1rem', color: '#9ca3af' }}>
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 09:00 - 14:00</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Op. Dr. Gönül İzzat Miriyev. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
