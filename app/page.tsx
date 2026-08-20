"use client";

import { useState } from "react";

const modules = [
  { number: "01", title: "Planificación familiar", description: "Orientación para abordar la consejería y la atención desde el primer nivel." },
  { number: "02", title: "Atención integral al adolescente", description: "Claves para una atención cercana, respetuosa y organizada." },
  { number: "03", title: "Prevención y abordaje de cáncer", description: "Puntos esenciales que debes reconocer durante tu experiencia SERUMS." },
  { number: "04", title: "Infecciones de transmisión sexual", description: "Una guía práctica para identificar prioridades de atención y consejería." },
  { number: "05", title: "Salud materna", description: "Herramientas para afrontar situaciones frecuentes del cuidado materno." },
  { number: "06", title: "Referencias", description: "Cómo ordenar decisiones, comunicaciones y derivaciones oportunas." },
  { number: "07", title: "Medicina: casos comunes", description: "Un repaso orientado a los escenarios cotidianos de un establecimiento de salud." },
];

const instructors = [
  { name: "Obst. Andrea Rojas", focus: "Salud sexual y reproductiva", text: "Compartirá una mirada práctica para resolver dudas frecuentes con seguridad y criterio." },
  { name: "Obst. Valeria Campos", focus: "Atención materna y perinatal", text: "Abordará experiencias y prioridades que acompañan el trabajo diario en el primer nivel." },
  { name: "Obst. Lucía Paredes", focus: "Gestión y atención integral", text: "Guiará la organización de la atención, las referencias y los casos habituales." },
  { name: "Obst. Mariana Salazar", focus: "Atención adolescente", text: "Aportará herramientas de comunicación y atención centrada en las personas." },
];

const faqs = [
  ["¿El pago es único?", "Sí. La inscripción tiene un pago único de S/ 50. El precio puede actualizarse antes del lanzamiento."],
  ["¿Cuánto tiempo tendré acceso?", "Tu acceso al contenido será permanente una vez se confirme tu pago."],
  ["¿Cómo podré pagar?", "El pago se habilitará por Mercado Pago, con Yape y tarjetas disponibles en el checkout."],
  ["¿El curso incluye certificado o materiales?", "No. El curso está enfocado exclusivamente en las clases en video."],
];

export default function Home() {
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const openEnrollment = () => setShowPaymentMessage(true);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <img src="/logo-guia-serums.png" alt="Logo Guía para sobrevivir al SERUMS" />
          <span>Guía SERUMS</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#curso">El curso</a><a href="#temario">Temario</a><a href="#docentes">Docentes</a><a href="#preguntas">Preguntas</a>
        </nav>
        <button className="header-cta" onClick={openEnrollment}>Inscribirme</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Preparación práctica para obstetras</p>
          <h1>Guía para sobrevivir al <em>SERUMS</em> de Obstetricia</h1>
          <p className="hero-text">Una ruta clara para llegar con más seguridad a esta etapa: temas esenciales, experiencias aplicadas y orientación pensada para tu realidad.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={openEnrollment}>Quiero inscribirme <span>→</span></button>
            <a className="text-link" href="#temario">Ver temario <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-mark">✓</span><p><strong>Pago único</strong><br />Acceso permanente al contenido</p></div>
        </div>
        <div className="hero-art" aria-label="Ilustración del curso">
          <div className="hero-sun" />
          <div className="art-card art-card-top">Tu guía de ruta</div>
          <div className="logo-frame"><img src="/logo-guia-serums.png" alt="Guía para sobrevivir al SERUMS" /></div>
          <div className="art-card art-card-bottom"><span>7</span> módulos esenciales</div>
        </div>
      </section>

      <section className="value-section" id="curso">
        <div className="section-heading compact-heading"><p className="eyebrow">Hecho para acompañarte</p><h2>Más claridad para empezar tu SERUMS.</h2></div>
        <div className="value-grid">
          <article><span className="value-number">01</span><h3>Aprende con enfoque práctico</h3><p>Contenido pensado para las situaciones y decisiones que encontrarás durante el camino.</p></article>
          <article><span className="value-number">02</span><h3>Avanza a tu propio ritmo</h3><p>Revisa cada módulo cuando lo necesites y vuelve a las clases cuantas veces quieras.</p></article>
          <article><span className="value-number">03</span><h3>Todo lo esencial, en un solo lugar</h3><p>Una biblioteca organizada para ayudarte a prepararte con mayor confianza.</p></article>
        </div>
      </section>

      <section className="syllabus-section" id="temario">
        <div className="section-heading syllabus-heading"><p className="eyebrow">El recorrido</p><h2>Tu temario, módulo por módulo.</h2><p>Al adquirir el curso encontrarás cada clase ordenada en tu aula virtual.</p></div>
        <div className="module-list">
          {modules.map((module) => <article className="module-card" key={module.number}><span className="module-number">{module.number}</span><div><h3>{module.title}</h3><p>{module.description}</p></div><span className="module-status">En preparación</span></article>)}
        </div>
      </section>

      <section className="instructors-section" id="docentes">
        <div className="section-heading"><p className="eyebrow">Aprende acompañada</p><h2>Un equipo que conoce el camino.</h2><p>Las biografías y fotografías definitivas se actualizarán antes del lanzamiento.</p></div>
        <div className="instructors-grid">
          {instructors.map((instructor, index) => <article className="instructor-card" key={instructor.name}><div className="instructor-avatar" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div><p className="instructor-role">{instructor.focus}</p><h3>{instructor.name}</h3><p>{instructor.text}</p><span className="draft-label">Perfil provisional</span></article>)}
        </div>
      </section>

      <section className="enrollment-section" id="inscripcion">
        <div className="enrollment-copy"><p className="eyebrow">Una inversión en tu preparación</p><h2>Empieza con una guía que te acompañe.</h2><p>Un pago, acceso permanente y clases organizadas para que puedas prepararte con tranquilidad.</p></div>
        <div className="price-card"><p>Acceso completo</p><div className="price"><span>S/</span> 50</div><span className="price-caption">Precio de lanzamiento · sujeto a actualización</span><ul><li>7 módulos del curso</li><li>Acceso permanente</li><li>Pago con Yape o tarjeta</li></ul><button className="button button-primary button-full" onClick={openEnrollment}>Inscribirme al curso <span>→</span></button><p className="secure-note">El pago será procesado de forma segura por Mercado Pago.</p></div>
      </section>

      <section className="faq-section" id="preguntas">
        <div className="section-heading compact-heading"><p className="eyebrow">Resolvemos tus dudas</p><h2>Preguntas frecuentes</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="contact-section"><p className="eyebrow">¿Tienes una consulta?</p><h2>Estamos aquí para ayudarte.</h2><p>Escríbenos por Instagram o WhatsApp y resolveremos tus dudas sobre el curso.</p><div className="contact-actions"><a className="button button-outline" href="https://www.instagram.com/seruminvicta/" target="_blank" rel="noreferrer">Instagram</a><a className="button button-primary" href="https://wa.me/51955577296?text=Hola%2C%20quisiera%20conocer%20m%C3%A1s%20sobre%20la%20Gu%C3%ADa%20para%20sobrevivir%20al%20SERUMS%20de%20Obstetricia." target="_blank" rel="noreferrer">WhatsApp <span>→</span></a></div></section>

      <footer><a className="brand footer-brand" href="#inicio"><img src="/logo-guia-serums.png" alt="Logo Guía SERUMS" /><span>Guía SERUMS</span></a><p>© 2026 Guía para sobrevivir al SERUMS de Obstetricia</p><a href="https://www.instagram.com/seruminvicta/" target="_blank" rel="noreferrer">@seruminvicta</a></footer>

      {showPaymentMessage && <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowPaymentMessage(false)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowPaymentMessage(false)} aria-label="Cerrar">×</button><p className="eyebrow">Inscripciones</p><h2 id="modal-title">Muy pronto podrás inscribirte.</h2><p>La plataforma de pago con Yape y Mercado Pago se activará al abrir las inscripciones. Mientras tanto, puedes escribirnos por WhatsApp para recibir novedades.</p><a className="button button-primary button-full" href="https://wa.me/51955577296?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20Gu%C3%ADa%20para%20sobrevivir%20al%20SERUMS%20de%20Obstetricia." target="_blank" rel="noreferrer">Quiero recibir información <span>→</span></a></section></div>}
    </main>
  );
}
