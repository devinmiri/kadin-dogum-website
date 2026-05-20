import { Link } from 'react-router-dom';
import { CalendarHeart, Baby, Activity, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Sağlığınız İçin <br />
            <span style={{ color: 'var(--accent-color)' }}>Güvenilir</span> Ellerdesiniz
          </h1>
          <p className="hero-subtitle">
            Diyarbakır'da kadın hastalıkları ve doğum uzmanı olarak, modern tıbbın sunduğu imkanlarla yanınızdayız.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/iletisim" className="btn btn-primary">Randevu Al</Link>
            <Link to="/hizmetler" className="btn btn-outline">Hizmetlerimiz</Link>
          </div>
        </div>
        <div className="hero-image fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/doctor_hero.png" alt="Op. Dr. Gönül İzzat Miriyev" />
        </div>
      </section>

      {/* Quick Services */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Öne Çıkan Hizmetlerimiz</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Size özel, kapsamlı sağlık çözümleri sunuyoruz.</p>
        </div>
        
        <div className="card-grid">
          <div className="card">
            <div className="card-icon"><Baby size={24} /></div>
            <h3>Gebelik Takibi</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Hamilelik sürecinizin başından sonuna kadar bebeğinizin ve sizin sağlığınız için detaylı takipler yapıyoruz.
            </p>
            <Link to="/hizmetler" style={{ color: 'var(--accent-color)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Detaylı Bilgi <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="card">
            <div className="card-icon"><CalendarHeart size={24} /></div>
            <h3>Genel Jinekoloji</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Yıllık rutin kontroller, smear testi, enfeksiyon tedavileri ve diğer jinekolojik rahatsızlıkların teşhisi.
            </p>
            <Link to="/hizmetler" style={{ color: 'var(--accent-color)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Detaylı Bilgi <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="card">
            <div className="card-icon"><Activity size={24} /></div>
            <h3>Menopoz Yönetimi</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Menopoz dönemini sağlıklı ve konforlu geçirmeniz için hormon replasman terapileri ve yaşam tarzı danışmanlığı.
            </p>
            <Link to="/hizmetler" style={{ color: 'var(--accent-color)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Detaylı Bilgi <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-pink">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Sağlığınızı Ertelemeyin</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 2rem', color: 'var(--text-secondary)' }}>
            Düzenli kontroller hayat kurtarır. Erken teşhis ve doğru tedavi yöntemleriyle sağlığınızı güvence altına alın.
          </p>
          <Link to="/iletisim" className="btn btn-primary">Hemen Randevu Alın</Link>
        </div>
      </section>
    </div>
  );
}
