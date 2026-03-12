import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div ref={ref}>
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
          style={{
            display: 'grid', gridTemplateColumns: '200px 80px 1fr',
            gap: 0, borderTop: '1px solid var(--border)',
            padding: '36px 0', alignItems: 'start',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.paddingLeft = '16px';
            e.currentTarget.style.transition = 'padding 0.4s cubic-bezier(0.16,1,0.3,1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.paddingLeft = '0';
          }}
        >
          {/* Dates */}
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--muted)', paddingTop: 4,
          }}>
            {exp.dates}
          </div>

          {/* Type badge */}
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: exp.type === 'Internship' ? 'var(--accent)' : 'var(--muted)',
            paddingTop: 4,
          }}>
            {exp.type}
          </div>

          {/* Content */}
          <div>
            <div style={{
              fontFamily: 'Inter', fontWeight: 900, fontSize: 20,
              letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: 4,
            }}>
              {exp.role}
            </div>
            <div style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16,
            }}>
              {exp.company}
            </div>
            <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 20, maxWidth: 640 }}>
              {exp.desc}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {exp.tags.map(t => (
                <span key={t} style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  border: '1px solid var(--border)',
                  color: 'var(--fg)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
