'use client';

import { useState } from 'react';
import { ArrowRight, CalendarDays, Camera, ChevronLeft, ChevronRight, Coffee, ExternalLink, MapPin, Menu, MessageCircle, Palmtree, ParkingCircle, Quote, Shell, Sparkles, Sun, Waves, Wifi, X } from 'lucide-react';

const whatsapp = 'https://wa.me/5527998316730';
const maps = 'https://www.google.com.br/maps/place/Nossa+Toca+Pousada+e+Viv%C3%AAncias+na+Barra+do+Jucu+-+Vila+Velha%2FES+@pousadanossatocabarradojucu/@-20.4288889,-40.3268523,17.88z/data=!4m9!3m8!1s0xb83ff5ce6f93cf:0x8e1a66712ccf7c9b!5m2!4m1!1i2!8m2!3d-20.4294194!4d-40.3248846!16s%2Fg%2F11fmljlptx';
const gallery = [
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=88', alt: 'Mar azul e faixa de areia em um dia ensolarado', label: 'Dias de mar' },
  { src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=88', alt: 'Varanda tropical acolhedora próxima à natureza', label: 'Clima de férias' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=88', alt: 'Área externa relaxante com vegetação tropical', label: 'Desacelerar' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=88', alt: 'Espaço de hospedagem cercado por natureza', label: 'Sua temporada' },
  { src: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=88', alt: 'Paisagem litorânea vista entre palmeiras', label: 'Natureza por perto' },
];
const experiences = [
  { icon: Waves, title: 'Praia & brisa do mar', text: 'Comece o dia sem pressa e siga o ritmo da Barra do Jucu.' },
  { icon: Palmtree, title: 'Natureza viva', text: 'Caminhos, paisagens e a energia singular do litoral capixaba.' },
  { icon: Sparkles, title: 'Cultura local', text: 'Uma vila com identidade, tradição, arte e histórias para conhecer.' },
  { icon: Coffee, title: 'Sabores capixabas', text: 'Descubra pequenos comércios e a gastronomia da região.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', checkin: '', checkout: '', guests: '2', message: '' });
  const sendBooking = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `Olá! Acessei o site da Nossa Toca e gostaria de consultar disponibilidade.\n\nNome: ${form.name}\nEntrada: ${form.checkin}\nSaída: ${form.checkout}\nHóspedes: ${form.guests}\nMensagem: ${form.message || '—'}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };
  const nav = [['A pousada', 'a-pousada'], ['Vivências', 'vivencias'], ['Galeria', 'galeria'], ['Localização', 'localizacao']];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Nossa Toca, início"><span className="brand-mark"><Sun size={22} /></span><span><strong>Nossa Toca</strong><small>Pousada & Vivências</small></span></a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
          {nav.map(([item, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-book" href={`${whatsapp}?text=${encodeURIComponent('Olá! Encontrei a Nossa Toca pelo site e gostaria de consultar disponibilidade.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Reservar</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-sun" /><div className="hero-content"><div className="eyebrow"><MapPin size={16} /> Barra do Jucu · Vila Velha, ES</div><h1>Seu refúgio<br />perto do <em>mar.</em></h1><p>Um lugar acolhedor para desacelerar, viver bons momentos e sentir de perto a energia da praia e da cultura capixaba.</p><div className="hero-actions"><a className="button primary" href="#reservar">Consultar disponibilidade <ArrowRight size={18} /></a><a className="button ghost" href="#a-pousada">Conhecer a pousada</a></div><a className="rating" href={maps} target="_blank" rel="noreferrer"><span className="stars">★★★★★</span><strong>4,8</strong><span>58 avaliações no Google</span></a></div>
        <div className="hero-caption"><Shell size={18} /> O seu canto na Barra do Jucu</div><a className="scroll-cue" href="#a-pousada">Descubra <span>↓</span></a>
      </section>

      <section id="a-pousada" className="section intro-section">
        <div className="intro-copy"><span className="section-kicker">Bem-vindo à Nossa Toca</span><h2>Uma pausa gostosa,<br /><em>do jeitinho capixaba.</em></h2><p>Na Nossa Toca, cada estadia é um convite para aproveitar o melhor da Barra do Jucu. Um espaço para viajantes, casais, famílias e quem busca descanso, praia, cultura e boas experiências em Vila Velha.</p><div className="feature-row"><div><Wifi /><span><strong>Conecte-se</strong>Wi-Fi disponível</span></div><div><ParkingCircle /><span><strong>Chegue tranquilo</strong>Estacionamento</span></div><div><MessageCircle /><span><strong>Conte com a gente</strong>Atendimento direto</span></div></div></div>
        <div className="intro-image-wrap"><img src={gallery[1].src} alt={gallery[1].alt} /><div className="sun-stamp"><Sun /><span>Sol • Mar •<br />Boas vibrações</span></div></div>
      </section>

      <section id="vivencias" className="section experiences-section"><div className="section-heading"><div><span className="section-kicker light">Viva a Barra do Jucu</span><h2>Mais que uma estadia.<br /><em>Uma vivência.</em></h2></div><p>Um destino para sentir com calma — entre o mar, a natureza e a cultura de uma das vilas mais queridas do Espírito Santo.</p></div><div className="experience-grid">{experiences.map(({ icon: Icon, title, text }, index) => <article key={title} className="experience-card"><span className="card-number">0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="galeria" className="section gallery-section"><div className="gallery-head"><div><span className="section-kicker">Inspire-se</span><h2>Entre no clima<br /><em>da nossa toca.</em></h2></div><p>Este é o espírito da sua próxima temporada. Em breve, este espaço receberá a galeria oficial completa da pousada.</p></div><div className="gallery-grid">{gallery.map((image, index) => <button key={image.src} className={`gallery-item item-${index + 1}`} onClick={() => setActiveImage(index)} aria-label={`Ampliar foto: ${image.label}`}><img src={image.src} alt={image.alt} loading={index > 1 ? 'lazy' : undefined} /><span>{image.label}<ArrowRight size={18} /></span></button>)}</div><p className="photo-note">Imagens de atmosfera, provisórias. A galeria está pronta para receber as fotos oficiais autorizadas da pousada.</p></section>

      <section className="quote-section"><Quote size={40} /><blockquote>“Um cantinho para chamar de seu, mesmo que seja só por alguns dias.”</blockquote><div><span className="stars">★★★★★</span> <strong>4,8 no Google</strong> · 58 avaliações</div></section>

      <section id="localizacao" className="section location-section"><div className="location-card"><span className="section-kicker light">Onde estamos</span><h2>Perto da praia.<br />No coração da <em>Barra.</em></h2><p><MapPin size={19} /> R. Domingos Ribeiro Pinto<br />Barra do Jucu, Vila Velha — ES<br />CEP 29125-090</p><a className="button sand" href={maps} target="_blank" rel="noreferrer">Abrir no Google Maps <ExternalLink size={17} /></a></div><div className="location-visual"><img src={gallery[0].src} alt="Praia ensolarada representando o litoral da Barra do Jucu" /><div className="map-pin"><MapPin /><span><strong>Nossa Toca</strong>Barra do Jucu</span></div></div></section>

      <section id="reservar" className="section booking-section"><div className="booking-copy"><span className="section-kicker">Sua próxima pausa</span><h2>Pronto para viver dias especiais <em>perto do mar?</em></h2><p>Conte quando você pretende vir. A consulta é enviada diretamente para o WhatsApp da pousada, onde confirmamos disponibilidade e valores.</p><div className="contact-line"><MessageCircle /><span><small>WhatsApp</small><strong>(27) 99831-6730</strong></span></div><div className="contact-line"><Camera /><span><small>Siga no Instagram</small><strong>@pousadanossatocabarradojucu</strong></span></div></div>
        <form className="booking-form" onSubmit={sendBooking}><div className="form-title"><CalendarDays /><div><strong>Consulte sua estadia</strong><span>Responderemos pelo WhatsApp</span></div></div><label>Seu nome<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Como podemos te chamar?" /></label><div className="form-row"><label>Entrada<input type="date" required min={new Date().toISOString().split('T')[0]} value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} /></label><label>Saída<input type="date" required min={form.checkin || new Date().toISOString().split('T')[0]} value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} /></label></div><label>Hóspedes<select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}><option value="1">1 hóspede</option><option value="2">2 hóspedes</option><option value="3">3 hóspedes</option><option value="4">4 hóspedes</option><option value="5+">5 ou mais hóspedes</option></select></label><label>Mensagem (opcional)<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Conte algo sobre a sua viagem..." /></label><button className="button primary submit" type="submit"><MessageCircle size={19} /> Consultar pelo WhatsApp</button><small className="form-disclaimer">A reserva será confirmada diretamente pela pousada.</small></form>
      </section>

      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Sun size={22} /></span><span><strong>Nossa Toca</strong><small>Pousada & Vivências</small></span></a><p>Um refúgio acolhedor na Barra do Jucu,<br />Vila Velha — Espírito Santo.</p><div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/pousadanossatocabarradojucu/" target="_blank" rel="noreferrer">Instagram</a><a href={maps} target="_blank" rel="noreferrer">Google Maps</a></div><small>© {new Date().getFullYear()} Nossa Toca. Todos os direitos reservados.</small></footer>
      <a className="floating-whatsapp" href={`${whatsapp}?text=${encodeURIComponent('Olá! Encontrei a Nossa Toca pelo site e gostaria de consultar disponibilidade.')}`} target="_blank" rel="noreferrer" aria-label="Reservar pelo WhatsApp"><MessageCircle /><span>Reservar</span></a>
      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização da galeria"><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Fechar"><X /></button><button className="lightbox-arrow left" onClick={() => setActiveImage((activeImage + gallery.length - 1) % gallery.length)} aria-label="Foto anterior"><ChevronLeft /></button><img src={gallery[activeImage].src} alt={gallery[activeImage].alt} /><button className="lightbox-arrow right" onClick={() => setActiveImage((activeImage + 1) % gallery.length)} aria-label="Próxima foto"><ChevronRight /></button><span>{gallery[activeImage].label}</span></div>}
    </main>
  );
}

