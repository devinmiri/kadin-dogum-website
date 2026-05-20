import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      slug: 'gebelik-takibi',
      title: 'Diyarbakır\'da Gebelik Takibi: Bilmeniz Gerekenler',
      excerpt: 'Diyarbakır\'da gebelik takibi sürecinde hangi testlerin ne zaman yapılması gerektiğini ve doktor seçiminde dikkat edilecekleri anlattık.',
      category: 'Diyarbakır\'a Özel',
      date: '15 Mayıs 2026',
      image: '/pregnancy_tracking.png'
    },
    {
      id: 2,
      slug: 'ilk-gebelik-belirtileri',
      title: 'İlk Gebelik Belirtileri Ne Zaman Başlar?',
      excerpt: 'Hamile olduğunuzu ne zaman anlayabilirsiniz? En sık karşılaşılan erken gebelik belirtileri ve evde test yapmanın doğru zamanı.',
      category: 'Gebelik & Doğum',
      date: '10 Mayıs 2026',
      image: '/pregnancy_tracking.png'
    },
    {
      id: 3,
      slug: 'menopoz-belirtileri',
      title: 'Menopoz Belirtileri Ne Zaman Başlar? Erken Belirtiler',
      excerpt: 'Menopoz bir hastalık değil, doğal bir süreçtir. Perimenopoz dönemindeki değişiklikleri nasıl yönetebileceğinizi öğrenin.',
      category: 'Menopoz',
      date: '5 Mayıs 2026',
      image: '/clinic_reception.png'
    },
    {
      id: 4,
      slug: 'jinekolojik-muayene',
      title: 'Yıllık Jinekolojik Muayene Neden Önemli?',
      excerpt: 'Hiçbir şikayetiniz olmasa bile neden her yıl jinekolojik muayeneye gitmelisiniz? Erken teşhisin hayat kurtaran önemi.',
      category: 'Kadın Sağlığı',
      date: '1 Mayıs 2026',
      image: '/clinic_reception.png'
    }
  ];

  return (
    <div className="container section fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Sağlık Köşesi (Blog)</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Kadın sağlığı, gebelik, doğum ve menopoz süreçleriyle ilgili en güncel ve doğru tıbbi bilgileri sizin için derliyoruz.
        </p>
      </div>

      <div className="card-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} />
            <div className="blog-post-content">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {post.category}
              </span>
              <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.25rem' }}>
                <Link to={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">{post.title}</Link>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{post.date}</span>
                <Link to={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>Devamını Oku &rarr;</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
