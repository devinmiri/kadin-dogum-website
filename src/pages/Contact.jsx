import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container section fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>İletişim & Randevu</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Sorularınız veya randevu talepleriniz için bize aşağıdaki kanallardan ulaşabilirsiniz.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        
        {/* İletişim Bilgileri */}
        <div>
          <h2 style={{ marginBottom: '2rem' }}>İletişim Bilgilerimiz</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-color)', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '50%' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Klinik Adresi</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Kayapınar Mahallesi, Diclekent Bulvarı<br />No: 123/4, Kayapınar / Diyarbakır</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-color)', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '50%' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Telefon & WhatsApp</h4>
                <p style={{ color: 'var(--text-secondary)' }}>+90 555 123 45 67</p>
                <a href="https://wa.me/905551234567" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#25D366', fontWeight: 500 }}>
                  WhatsApp'tan Yazın
                </a>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-color)', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '50%' }}>
                <Clock size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Çalışma Saatleri</h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 09:00 - 14:00<br />
                  Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* İletişim Formu */}
        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Randevu Talebi Gönderin</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Adınız Soyadınız</label>
              <input type="text" placeholder="Örn: Ayşe Yılmaz" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Telefon Numaranız</label>
              <input type="tel" placeholder="05xx xxx xx xx" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Konu</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', backgroundColor: 'white' }}>
                <option>Gebelik Takibi</option>
                <option>Genel Jinekolojik Muayene</option>
                <option>Menopoz</option>
                <option>Diğer</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              Talebi Gönder
            </button>
            <p style={{ fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center', marginTop: '0.5rem' }}>
              En kısa sürede size dönüş yapacağız.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
