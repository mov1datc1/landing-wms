import { useState, useEffect, useRef } from 'react';
import {
  BarChart3, ScanLine, Scissors, Package, Truck, ShieldCheck,
  ArrowRight, CheckCircle2, XCircle, Play, Zap, Clock, AlertTriangle,
  Target, MapPin, Eye, Layers, ChevronRight
} from 'lucide-react';

/* ===================== NAVBAR ===================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img src="https://movidatci.com/wp-content/uploads/2022/02/cropped-movida_azul_150x150-300x300.png" alt="Movida TCI" style={{ height: 42, borderRadius: 8 }} />
        </a>
        <ul className="nav-links">
          <li><a href="#dolor">Problemas</a></li>
          <li><a href="#features">Módulos</a></li>
          <li><a href="#metodologia">Metodología</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#contacto" className="nav-cta">Agendar Diagnóstico</a>
      </div>
    </nav>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="animate-fade-left">
          <div className="hero-badge">
            <span></span> WMS 360+ by Movida TCI
          </div>
          <h1>
            Tu almacén en<br />
            <span className="gradient-text">piloto automático.</span>
          </h1>
          <p className="hero-sub">
            Elimina errores de inventario, acelera el picking con escáneres Zebra
            y obtén visibilidad total de cada rollo, cada ubicación, cada movimiento.
          </p>
          <div className="hero-ctas">
            <a href="#contacto" className="btn-primary">
              <Target size={18} /> Agendar diagnóstico GRATIS
            </a>
            <a href="#demo" className="btn-secondary">
              <Play size={18} /> Ver demo 60s
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">99.2%</span>
              <span className="hero-stat-label">Precisión inventario</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">-40%</span>
              <span className="hero-stat-label">Tiempo de picking</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">+35%</span>
              <span className="hero-stat-label">Productividad</span>
            </div>
          </div>
        </div>
        <div className="hero-visual animate-fade-right delay-2">
          <div className="hero-glow"></div>
          <img
            src="/img/wms-dashboard.png"
            alt="WMS 360+ Dashboard — Vista operativa en tiempo real"
            className="hero-mockup animate-float"
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== SOCIAL PROOF ===================== */
function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-inner animate-fade-up">
        <p>Tecnologías que potencian nuestra solución</p>
        <div className="social-logos">
          {['Google Cloud', 'Microsoft Azure', 'Oracle', 'SAP', 'AWS'].map(name => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== PAIN → SOLUTION ===================== */
function PainSection() {
  const cards = [
    {
      icon: <AlertTriangle size={24} />,
      title: 'Inventario desactualizado',
      before: 'Diferencias del 15% entre tu sistema y lo que realmente hay en el almacén. Pérdidas invisibles cada mes.',
      after: 'Precisión del 99.2% con escaneo en tiempo real y conteo cíclico automatizado.',
      solution: <ShieldCheck size={24} />,
    },
    {
      icon: <Clock size={24} />,
      title: 'Picking demasiado lento',
      before: '45 minutos por pedido. Recorridos innecesarios. Errores de surtido que generan devoluciones.',
      after: 'Ruta optimizada con escáner Zebra: 12 min promedio por pedido. Cero errores de surtido.',
      solution: <Zap size={24} />,
    },
    {
      icon: <Eye size={24} />,
      title: 'Sin visibilidad ni trazabilidad',
      before: 'No sabes dónde está cada producto. No puedes rastrear movimientos. Merma sin control.',
      after: 'Cada HU con ubicación exacta, QR único y genealogía completa de cada movimiento.',
      solution: <MapPin size={24} />,
    },
  ];

  return (
    <section className="pain-section" id="dolor">
      <div className="section-inner">
        <div className="section-tag">Diagnóstico</div>
        <h2 className="section-title">
          ¿Te suena familiar<br />alguno de estos?
        </h2>
        <p className="section-sub">
          El 78% de los almacenes en México operan con herramientas que no fueron diseñadas
          para logística. El resultado: pérdidas silenciosas.
        </p>
        <div className="pain-grid">
          {cards.map((card, i) => (
            <div key={i} className={`pain-card animate-fade-up delay-${i + 1}`}>
              <div className="pain-icon red">{card.icon}</div>
              <h3>{card.title}</h3>
              <p className="pain-before">❌ {card.before}</p>
              <div className="pain-arrow"><ArrowRight size={20} /></div>
              <div className="pain-icon emerald">{card.solution}</div>
              <p className="pain-after">✅ {card.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== FEATURES ===================== */
function FeaturesSection() {
  const features = [
    { icon: <BarChart3 size={24} />, color: 'blue', title: 'Dashboard en Tiempo Real', desc: 'KPIs de inventario, picking, despacho y recepciones. Todo en un solo vistazo con alertas inteligentes.' },
    { icon: <ScanLine size={24} />, color: 'green', title: 'Picking con Escáner Zebra', desc: 'PWA optimizada para Zebra TC22. Ruta guiada, escaneo obligatorio de HU y validación en cada paso.' },
    { icon: <Scissors size={24} />, color: 'purple', title: 'Corte con Genealogía', desc: 'Trazabilidad completa: de rollo padre a retazo hijo. Cada corte documentado con metraje exacto.' },
    { icon: <Package size={24} />, color: 'blue', title: 'Recepción Inteligente', desc: 'Genera HUs automáticamente al recibir mercancía. Etiquetas con código de barras y QR al instante.' },
    { icon: <Layers size={24} />, color: 'green', title: 'Inventario HU-Centric', desc: 'Cada rollo es una Handling Unit con código único, ubicación exacta y estado en tiempo real.' },
    { icon: <Truck size={24} />, color: 'purple', title: 'Despacho y Tránsito', desc: 'Control de embarques, confirmación de entrega, mercancía en tránsito visible y reservable.' },
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-inner">
        <div className="section-tag">Módulos</div>
        <h2 className="section-title">
          6 módulos que transforman<br />tu operación
        </h2>
        <p className="section-sub">
          Cada módulo fue diseñado para resolver un problema específico del almacén.
          Todos conectados, todos en tiempo real.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card animate-fade-up delay-${i + 1}`}>
              <div className={`feature-icon ${f.color}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== METRICS ===================== */
function MetricsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const metrics = [
    { value: '99.2%', label: 'Precisión de inventario' },
    { value: '-40%', label: 'Tiempo de picking' },
    { value: '+35%', label: 'Productividad almacén' },
    { value: '24/7', label: 'Visibilidad en tiempo real' },
  ];

  return (
    <section className="metrics-section" ref={ref}>
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <div key={i} className="metric-item" style={{
            animation: visible ? `count-up 0.6s ease-out ${i * 0.15}s forwards` : 'none',
            opacity: visible ? undefined : 0,
          }}>
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================== COMPARISON ===================== */
function ComparisonSection() {
  return (
    <section className="comparison-section" id="comparacion">
      <div className="section-inner">
        <div className="section-tag">Diferenciador</div>
        <h2 className="section-title">¿Por qué un WMS y no solo tu ERP?</h2>
        <p className="section-sub">Un ERP gestiona tu negocio. Un WMS controla tu almacén. No son competencia — son complemento.</p>
        <div className="comparison-grid">
          <div className="comp-col comp-erp animate-fade-left">
            <h3><XCircle size={24} color="#EF4444" /> Solo con ERP</h3>
            <ul className="comp-list">
              {[
                'Inventario por SKU (sin ubicación exacta)',
                'Sin escaneo de códigos en piso',
                'Picking manual sin ruta optimizada',
                'Trazabilidad limitada a lotes',
                'Sin control de merma en tiempo real',
                'Sin módulo de corte ni genealogía',
              ].map((item, i) => (
                <li key={i}><XCircle size={14} color="#EF4444" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="comp-vs">VS</div>
          <div className="comp-col comp-wms animate-fade-right">
            <h3><CheckCircle2 size={24} color="#10B981" /> Con WMS 360+</h3>
            <ul className="comp-list">
              {[
                'Ubicación exacta por rack, pasillo y nivel',
                'Escaneo obligatorio con Zebra TC22',
                'Ruta de picking optimizada por IA',
                'Trazabilidad a nivel HU (cada rollo/retazo)',
                'Alertas de merma con configuración por rango',
                'Corte inteligente con genealogía completa',
              ].map((item, i) => (
                <li key={i}><CheckCircle2 size={14} color="#10B981" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== METHODOLOGY ===================== */
function MethodologySection() {
  const steps = [
    { num: 1, title: 'Diagnóstico', desc: 'Analizamos tu operación actual, identificamos cuellos de botella y definimos KPIs objetivo.' },
    { num: 2, title: 'Configuración', desc: 'Mapeamos tu almacén: zonas, racks, ubicaciones. Importamos catálogos y configuramos reglas.' },
    { num: 3, title: 'Implementación', desc: 'Instalamos el sistema, generamos etiquetas, configuramos escáneres y capacitamos al equipo.' },
    { num: 4, title: 'Go Live', desc: 'Arranque supervisado con soporte en sitio. Ajustes en tiempo real durante las primeras semanas.' },
    { num: 5, title: 'Optimización', desc: 'Análisis de datos post-implementación. Ajuste fino de rutas, reglas FIFO y alertas.' },
  ];

  return (
    <section className="method-section" id="metodologia">
      <div className="section-inner">
        <div className="section-tag">Proceso</div>
        <h2 className="section-title">5 pasos para transformar tu almacén</h2>
        <p className="section-sub">Implementación completa en 4-8 semanas. Sin interrumpir tu operación.</p>
        <div className="method-timeline">
          {steps.map((s, i) => (
            <div key={i} className={`method-step animate-fade-up delay-${i + 1}`}>
              <div className="step-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CTA + FORM ===================== */
function CTASection() {
  const [formData, setFormData] = useState({
    personas: '', control: '', pedidos: '', urgencia: '',
    nombre: '', empresa: '', whatsapp: '', email: '',
    problemas: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const toggleProblem = (p: string) => {
    setFormData(prev => ({
      ...prev,
      problemas: prev.problemas.includes(p)
        ? prev.problemas.filter(x => x !== p)
        : [...prev.problemas, p],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Error al enviar');
      setSubmitted(true);
    } catch (_err) {
      setError('Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section className="cta-section" id="contacto">
        <div className="section-inner" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>🎯</div>
          <h2 className="section-title">¡Recibimos tu solicitud!</h2>
          <p className="section-sub" style={{ maxWidth: 500, margin: '0 auto' }}>
            Un especialista de Movida TCI te contactará por WhatsApp en las próximas 2 horas
            para agendar tu diagnóstico gratuito.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-section" id="contacto">
      <div className="cta-inner">
        <div className="cta-left animate-fade-left">
          <div className="section-tag">Siguiente paso</div>
          <h2>¿Listo para dejar de <span className="gradient-text">perder dinero</span> en tu almacén?</h2>
          <p>
            Agenda tu diagnóstico gratuito. Sin compromiso, 100% personalizado para tu operación.
            Te mostramos exactamente cómo WMS 360+ se adapta a tu almacén.
          </p>
          <div className="cta-urgency">
            <Zap size={16} /> Solo 3 implementaciones disponibles este trimestre
          </div>
          <div className="hero-stats" style={{ marginTop: 32 }}>
            <div className="hero-stat">
              <span className="hero-stat-value">4-8</span>
              <span className="hero-stat-label">Semanas implementación</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Soporte en español</span>
            </div>
          </div>
        </div>

        <form className="form-card animate-fade-right delay-2" onSubmit={handleSubmit}>
          <h3>🎯 Diagnóstico Gratuito</h3>

          <div className="form-row">
            <div className="form-group">
              <label>¿Personas en almacén?</label>
              <select value={formData.personas} onChange={e => setFormData({ ...formData, personas: e.target.value })} required>
                <option value="">Seleccionar</option>
                <option value="1-5">1 — 5</option>
                <option value="6-15">6 — 15</option>
                <option value="16-50">16 — 50</option>
                <option value="50+">Más de 50</option>
              </select>
            </div>
            <div className="form-group">
              <label>¿Pedidos al mes?</label>
              <select value={formData.pedidos} onChange={e => setFormData({ ...formData, pedidos: e.target.value })} required>
                <option value="">Seleccionar</option>
                <option value="<50">Menos de 50</option>
                <option value="50-200">50 — 200</option>
                <option value="200-500">200 — 500</option>
                <option value="500+">Más de 500</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>¿Control actual?</label>
              <select value={formData.control} onChange={e => setFormData({ ...formData, control: e.target.value })} required>
                <option value="">Seleccionar</option>
                <option value="excel">📋 Excel / Papel</option>
                <option value="propio">📦 Sistema propio</option>
                <option value="otro-wms">💻 Otro WMS</option>
                <option value="nada">🚫 Sin control</option>
              </select>
            </div>
            <div className="form-group">
              <label>¿Qué tan urgente?</label>
              <select value={formData.urgencia} onChange={e => setFormData({ ...formData, urgencia: e.target.value })} required>
                <option value="">Seleccionar</option>
                <option value="hot">🔥 Nos cuesta dinero</option>
                <option value="1-3">⏰ 1-3 meses</option>
                <option value="anual">📅 Este año</option>
                <option value="explorar">🔍 Solo exploro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>¿Qué problemas enfrentas hoy?</label>
            <div className="form-checkboxes">
              {[
                'Diferencias de inventario',
                'Pedidos surtidos incorrectamente',
                'No sé qué hay en cada ubicación',
                'Tardo mucho en preparar pedidos',
                'Sin trazabilidad de movimientos',
                'Merma sin control',
              ].map(p => (
                <label key={p}>
                  <input type="checkbox" checked={formData.problemas.includes(p)} onChange={() => toggleProblem(p)} />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Nombre *</label>
              <input type="text" placeholder="Tu nombre" value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Empresa *</label>
              <input type="text" placeholder="Tu empresa" value={formData.empresa} onChange={e => setFormData({ ...formData, empresa: e.target.value })} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>WhatsApp *</label>
              <input type="tel" placeholder="33 1234 5678" value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="tu@empresa.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
            </div>
          </div>

          {error && <p style={{ color: '#F87171', fontSize: 13, textAlign: 'center', marginBottom: 8 }}>{error}</p>}
          <button type="submit" className="form-submit" disabled={sending} style={sending ? { opacity: 0.7 } : {}}>
            {sending ? 'Enviando...' : 'Agendar mi diagnóstico GRATIS'} {!sending && <ChevronRight size={18} />}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <a href="https://movidatci.com" target="_blank" rel="noreferrer">Movida TCI</a> — Illinois 27, Nápoles, Guadalajara, Jalisco
        &nbsp;·&nbsp; <a href="mailto:info@movidatci.com">info@movidatci.com</a>
        &nbsp;·&nbsp; <a href="tel:+523313307562">+52 33 1330 9635</a>
      </p>
    </footer>
  );
}

/* ===================== APP ===================== */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <PainSection />
      <FeaturesSection />
      <MetricsSection />
      <ComparisonSection />
      <MethodologySection />
      <CTASection />
      <Footer />
    </>
  );
}
