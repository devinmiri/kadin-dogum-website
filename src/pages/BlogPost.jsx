import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const blogContent = {
  'gebelik-takibi': {
    title: 'Diyarbakır\'da Gebelik Takibi: Bilmeniz Gerekenler',
    category: 'Diyarbakır\'a Özel',
    date: '15 Mayıs 2026',
    image: '/pregnancy_tracking.png',
    content: `Gebelik süreci, bir anne adayının hayatındaki en heyecan verici ve önemli dönemlerden biridir. Diyarbakır'da sunduğumuz gebelik takibi hizmetlerinde, hem anne adayının hem de bebeğin sağlığını en ince detayına kadar değerlendiriyoruz.

İlk 12 hafta, organ gelişiminin tamamlandığı kritik bir süreçtir. Bu dönemde yapılacak kan tahlilleri, ultrason kontrolleri ve vitamin destekleri büyük önem taşır. Kliniğimizde, 4 boyutlu ultrasonografi cihazlarıyla bebeğinizin gelişimini an be an takip edebilir, ikili, üçlü, dörtlü tarama testleri ve detaylı ultrason (ayrıntılı ultrason) ile olası riskleri önceden saptayabiliriz.

Düzenli doktor kontrollerini ihmal etmemek, sağlıklı bir doğumun ilk adımıdır.`
  },
  'ilk-gebelik-belirtileri': {
    title: 'İlk Gebelik Belirtileri Ne Zaman Başlar?',
    category: 'Gebelik & Doğum',
    date: '10 Mayıs 2026',
    image: '/pregnancy_tracking.png',
    content: `Hamileliğin ilk belirtileri genellikle adet gecikmesi ile fark edilse de, vücut çok daha erken sinyaller vermeye başlayabilir. Döllenmeden sadece birkaç gün sonra memelerde hassasiyet, hafif kramplar, lekelenme tarzı kanamalar (yerleşme kanaması) veya aşırı yorgunluk görülebilir.

Birçok kadın mide bulantısı ve koku hassasiyetini 4. ile 6. haftalar arasında yoğun şekilde hisseder. Sık idrara çıkma ve ani duygu durum değişiklikleri de erken dönemin tipik belirtilerindendir.

Eğer adetiniz geciktiyse ve bu belirtileri yaşıyorsanız, kesin sonuç için kanda Beta-hCG testi veya ev tipi gebelik testi yapmanız, ardından hemen bir uzman hekime başvurmanız en doğru yoldur.`
  },
  'menopoz-belirtileri': {
    title: 'Menopoz Belirtileri Ne Zaman Başlar? Erken Belirtiler',
    category: 'Menopoz',
    date: '5 Mayıs 2026',
    image: '/clinic_reception.png',
    content: `Menopoz bir hastalık değil, kadın hayatının doğal bir evresidir. Genellikle 45-55 yaşları arasında gerçekleşir, ancak belirtileri (perimenopoz dönemi) yıllar öncesinden başlayabilir.

En sık karşılaşılan erken belirtiler; adet düzensizlikleri, ani ateş basmaları, gece terlemeleri, uyku bozuklukları ve vajinal kuruluktur. Östrojen seviyesindeki dalgalanmalar nedeniyle duygu durum değişiklikleri, odaklanma zorluğu ve metabolizma yavaşlaması da yaşanabilir.

Menopoz sürecini daha kaliteli ve sağlıklı geçirmek için hormon replasman tedavileri, beslenme düzeni ve yaşam tarzı değişiklikleri konusunda kliniğimizden destek alabilirsiniz.`
  },
  'jinekolojik-muayene': {
    title: 'Yıllık Jinekolojik Muayene Neden Önemli?',
    category: 'Kadın Sağlığı',
    date: '1 Mayıs 2026',
    image: '/clinic_reception.png',
    content: `Çoğu kadın jinekoloğa sadece bir şikayeti olduğunda gitmeyi tercih eder. Oysa kadın sağlığında erken teşhis hayat kurtarır. Hiçbir şikayetiniz olmasa bile yılda en az bir kez düzenli jinekolojik muayeneden geçmek, birçok ciddi hastalığın önüne geçilmesini sağlar.

Yıllık muayenelerde yapılan ultrasonografi ile rahim ve yumurtalıklar değerlendirilir, kist veya miyom gibi oluşumlar erkenden tespit edilir. Ayrıca rahim ağzı kanseri taraması olan smear testi, hayat kurtarıcı bir rutin kontroldür.

Sağlığınızı ertelemeyin. Kendi bedeninize yapacağınız en büyük iyilik, düzenli doktor kontrollerinizi aksatmamaktır.`
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container section" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h2>Yazı bulunamadı.</h2>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>Blog'a Dön</Link>
      </div>
    );
  }

  return (
    <article className="container section fade-in">
      <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Blog'a Dön
      </Link>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {post.category}
        </span>
        <h1 style={{ margin: '1rem 0', fontSize: '2.5rem', color: 'var(--primary-color)' }}>
          {post.title}
        </h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>{post.date}</p>
        
        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '2.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }} />
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
