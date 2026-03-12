import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0, border: '1px solid var(--border)',
    }}>
      {skills.map((group, i) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
          style={{
            padding: '32px 28px',
            borderRight: i < skills.length - 1 ? '1px solid var(--border)' : 'none',
            borderLeft: 'none',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: group.color,
            marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 16, height: 1, background: group.color, display: 'inline-block' }} />
            {group.label}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {group.tags.map(tag => (
              <div key={tag} style={{
                fontSize: 13, fontWeight: 400, color: 'var(--fg)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--border)', flexShrink: 0 }} />
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
