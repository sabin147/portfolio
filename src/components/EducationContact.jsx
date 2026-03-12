import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { education, languages, meta } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

export function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
      {/* Education list */}
      <div style={{ borderRight: '1px solid var(--border)', paddingRight: 48 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32,
        }}>
          Academic Background
        </div>
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.15 }}
            style={{
              paddingBottom: 32, marginBottom: 32,
              borderBottom: i < education.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            {e.current && (
              <div style={{
                display: 'inline-block',
                fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#22c55e',
                border: '1px solid #22c55e', padding: '2px 8px',
                marginBottom: 12,
              }}>
                Current
              </div>
            )}
            <div style={{
              fontFamily: 'Inter', fontWeight: 900, fontSize: 18,
              letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: 4,
            }}>
              {e.degree}
            </div>
            <div style={{
              fontFamily: 'Playfair Display', fontStyle: 'italic',
              fontSize: 14, color: 'var(--muted)', marginBottom: 8,
            }}>
              {e.field}
            </div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>
              {e.school}
            </div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4,
            }}>
              {e.dates}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <div style={{ paddingLeft: 48 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32,
        }}>
          Languages
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {languages.map((l, i) => (
            <motion.div
              key={l.lang}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 0', borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{
                fontFamily: 'Inter', fontWeight: 900, fontSize: 20,
                letterSpacing: '-0.02em',
              }}>
                {l.lang}
              </span>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--muted)',
              }}>
                {l.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref}>
      {/* Big heading */}
      <div style={{ overflow: 'hidden', marginBottom: 64 }}>
        <motion.div
          initial={{ y: '100%' }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
        >
          <div style={{
            fontFamily: 'Inter', fontWeight: 900,
            fontSize: 'clamp(48px, 7vw, 100px)',
            letterSpacing: '-0.04em', lineHeight: 0.9, color: 'var(--fg)',
            display: 'flex', alignItems: 'flex-end', gap: '0.2em', flexWrap: 'wrap',
          }}>
            Let's build
            <span style={{
              fontFamily: 'Playfair Display', fontStyle: 'italic',
              fontWeight: 400, color: 'var(--accent)',
            }}>
              something
            </span>
          </div>
        </motion.div>
      </div>

      {/* Contact grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: 0, border: '1px solid var(--border)',
        }}
      >
        {[
          { label: 'Email', value: meta.email, href: `mailto:${meta.email}` },
          { label: 'LinkedIn', value: 'sabin-ghimire', href: meta.linkedin },
          { label: 'Location', value: meta.location, href: null },
        ].map((item, i) => (
          <div key={item.label} style={{
            padding: '36px 32px',
            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
            }}>
              {item.label}
            </div>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                style={{
                  fontFamily: 'Inter', fontWeight: 700, fontSize: 15,
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  transition: 'border-color 0.2s, color 0.2s',
                  paddingBottom: 2,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg)'; }}
              >
                {item.value}
              </a>
            ) : (
              <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 15 }}>{item.value}</div>
            )}
          </div>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ display: 'flex', gap: 16, marginTop: 32 }}
      >
        <a
          href={`mailto:${meta.email}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '18px 36px',
            background: 'var(--fg)', color: 'var(--bg)',
            border: '1px solid var(--fg)',
            transition: 'background 0.3s, color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--fg)'; e.currentTarget.style.borderColor = 'var(--fg)'; }}
        >
          Send Message →
        </a>
        <a
          href={meta.linkedin}
          target="_blank" rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '18px 36px',
            background: 'transparent', color: 'var(--fg)',
            border: '1px solid var(--border)',
            transition: 'border-color 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--fg)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          LinkedIn ↗
        </a>
      </motion.div>
    </div>
  );
}
