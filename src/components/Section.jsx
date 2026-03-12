import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function Section({ id, index, label, children, noBorder }) {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: EASE }}
      style={{
        borderBottom: noBorder ? 'none' : '1px solid var(--border)',
        padding: '96px 48px',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 64,
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
          textTransform: 'uppercase', color: 'var(--muted)',
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <span style={{
            fontSize: 10, fontWeight: 700,
            color: 'var(--accent)', letterSpacing: '0.1em',
          }}>
            {index}
          </span>
          {label}
          <span style={{ width: 40, height: 1, background: 'var(--border)', display: 'inline-block' }} />
        </div>
      </div>

      {children}
    </motion.section>
  );
}
