import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

function ProjectCard({ p, i, featured }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={p.link}
      target={p.link !== '#' ? '_blank' : '_self'}
      rel="noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', textDecoration: 'none',
        border: '1px solid var(--border)',
        padding: featured ? '48px' : '36px',
        position: 'relative', overflow: 'hidden',
        background: hovered ? 'var(--fg)' : 'transparent',
        transition: `background 0.5s ${EASE.join(',')}`,
        gridColumn: featured ? '1 / -1' : 'span 1',
      }}
    >
      {/* Hover fill background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'var(--fg)',
        transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'bottom',
        transition: `transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)`,
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', marginBottom: featured ? 40 : 28,
        }}>
          <div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: hovered ? 'rgba(235,235,232,0.5)' : 'var(--muted)',
              marginBottom: 8,
              transition: 'color 0.3s',
            }}>
              {p.number} · {p.category}
            </div>
            <div style={{
              fontFamily: 'Inter', fontWeight: 900,
              fontSize: featured ? 36 : 22,
              letterSpacing: '-0.03em',
              color: hovered ? 'var(--bg)' : 'var(--fg)',
              transition: 'color 0.3s',
            }}>
              {p.name}
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            width: 44, height: 44,
            border: `1px solid ${hovered ? 'rgba(235,235,232,0.25)' : 'var(--border)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
            color: hovered ? 'var(--bg)' : 'var(--fg)',
            transform: hovered ? 'translate(4px,-4px)' : 'translate(0,0)',
            transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), color 0.3s, border-color 0.3s',
            flexShrink: 0,
          }}>
            ↗
          </div>
        </div>

        {/* Description */}
        <div style={{
          fontSize: 14, lineHeight: 1.75,
          color: hovered ? 'rgba(235,235,232,0.7)' : 'var(--muted)',
          marginBottom: 28, maxWidth: featured ? 680 : 'none',
          transition: 'color 0.3s',
        }}>
          {p.desc}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {p.tags.map(t => (
              <span key={t} style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                border: `1px solid ${hovered ? 'rgba(235,235,232,0.2)' : 'var(--border)'}`,
                color: hovered ? 'rgba(235,235,232,0.6)' : 'var(--fg)',
                transition: 'border-color 0.3s, color 0.3s',
              }}>
                {t}
              </span>
            ))}
          </div>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
            color: hovered ? 'rgba(235,235,232,0.4)' : 'var(--muted)',
            transition: 'color 0.3s', flexShrink: 0,
          }}>
            {p.year}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <div ref={ref}>
      {inView && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {featured.map((p, i) => <ProjectCard key={p.number} p={p} i={i} featured />)}
          {rest.map((p, i) => <ProjectCard key={p.number} p={p} i={i + featured.length} featured={false} />)}
        </div>
      )}
    </div>
  );
}
