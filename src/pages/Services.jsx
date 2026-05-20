import { Baby, CalendarHeart, Activity, HeartPulse, Stethoscope, Dna } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Baby size={32} />,
      title: 'Gebelik Takibi ve Doğum',
      desc: 'Normal ve riskli gebeliklerin detaylı takibi, 4 boyutlu ultrasonografi, normal doğum ve sezaryen işlemleri.'
    },
    {
      icon: <CalendarHeart size={32} />,
      title: 'Genel Jinekoloji',
      desc: 'Adet düzensizlikleri, polikistik over sendromu (PCOS), miyom ve kist tedavileri, rutin jinekolojik muayeneler.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Menopoz Dönemi Takibi',
      desc: 'Menopoz belirtilerinin hafifletilmesi, kemik erimesi (osteoporoz) takibi ve hormon replasman tedavileri.'
    },
    {
      icon: <HeartPulse size={32} />,
      title: 'İnfertilite (Kısırlık) Tedavisi',
      desc: 'Çocuk sahibi olamayan çiftler için nedenlerin araştırılması, yumurtlama takibi ve aşılama (IUI) tedavileri.'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Kanser Taramaları',
      desc: 'Rahim ağzı kanseri (Smear ve HPV testi), meme muayenesi ve diğer erken teşhis tarama programları.'
    },
    {
      icon: <Dna size={32} />,
      title: 'Aile Planlaması',
      desc: 'Kişiye en uygun doğum kontrol yönteminin belirlenmesi, spiral (RİA) takılması ve çıkarılması.'
    }
  ];

  return (
    <div className="container section fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Hizmetlerimiz</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Kadın sağlığının her aşamasında, en güncel tıbbi yaklaşımlar ve cihazlarla kapsamlı sağlık hizmetleri sunuyoruz.
        </p>
      </div>
      
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {services.map((service, index) => (
          <div key={index} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent-color)', backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px' }}>
              {service.icon}
            </div>
            <div>
              <h3 style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
