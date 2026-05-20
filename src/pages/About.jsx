export default function About() {
  return (
    <div className="container section fade-in">
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <img 
            src="/doctor_hero.png" 
            alt="Op. Dr. Gönül İzzat Miriyev" 
            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>
        
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Op. Dr. Gönül İzzat Miriyev</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: '400', marginBottom: '2rem' }}>Kadın Hastalıkları ve Doğum Uzmanı</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <p>
              Merhaba, ben Op. Dr. Gönül İzzat Miriyev. Yılların getirdiği tecrübe ve modern tıbbın sunduğu yenilikçi yaklaşımlarla Diyarbakır'da kadın sağlığı alanında hizmet vermekteyim.
            </p>
            <p>
              Meslek hayatım boyunca "önce insan" felsefesini benimsedim. Kadınların hayatın her döneminde -ergenlikten menopoza- karşılaştıkları sağlık sorunlarına çözüm bulmak, gebelik gibi mucizevi bir süreçte onların en güvenilir destekçisi olmak temel gayemdir.
            </p>
            
            <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Eğitim ve Uzmanlık</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Tıp Eğitimi - [Üniversite Adı] (Güncellenecek)</li>
              <li style={{ marginBottom: '0.5rem' }}>Uzmanlık Eğitimi - Kadın Hastalıkları ve Doğum (Güncellenecek)</li>
            </ul>
            
            <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Tıbbi İlgi Alanları</h3>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: 0 }}>
              {['Riskli Gebelik Takibi', 'Laparoskopik Cerrahi', 'Kısırlık Tedavisi (İnfertilite)', 'Menopoz Yönetimi', 'Genital Estetik'].map(item => (
                <li key={item} style={{ background: 'var(--bg-tertiary)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--accent-color)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
