import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { meta } from '../data/portfolio';

const EASE = [0.16, 1, 0.3, 1];

// Clip-path reveal animation
const clipReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)', opacity: 1 },
  animate: { clipPath: 'inset(0 0 0% 0)', opacity: 1 },
  transition: { duration: 1, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      paddingTop: 64,
      borderBottom: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Background index marker */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute', top: 80, right: 48,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
          textTransform: 'uppercase', color: 'var(--muted)',
          writingMode: 'vertical-rl',
          display: 'flex', alignItems: 'center', gap: 12,
        }}
      >
        <span style={{ width: 1, height: 48, background: 'var(--border)', display: 'inline-block' }} />
        Copenhagen, DK
      </motion.div>

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
        style={{
          position: 'absolute', top: 100, left: 48,
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          padding: '8px 16px',
          border: '1px solid var(--border)',
          background: 'var(--bg)',
        }}
      >
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: '#22c55e',
          animation: 'pulse 2s infinite',
        }} />
        Available — {meta.availableFor}
      </motion.div>

      {/* Main heading block */}
      <div style={{ padding: '0 48px 0', flex: 1, display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ paddingBottom: 32, width: '100%' }}>

          {/* Small label above name */}
          <motion.div
            {...clipReveal(0.2)}
            style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'var(--muted)',
              marginBottom: 16,
            }}
          >
            Portfolio · 2026
          </motion.div>

          {/* HERO NAME — 128–160px */}
          <div style={{ overflow: 'hidden', marginBottom: 4 }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: 'Inter', fontWeight: 900,
                fontSize: 'clamp(80px, 10vw, 148px)',
                letterSpacing: '-0.05em', lineHeight: 0.9,
                color: 'var(--fg)',
              }}
            >
              Sabin
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 40 }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.18 }}
              style={{
                fontFamily: 'Inter', fontWeight: 900,
                fontSize: 'clamp(80px, 10vw, 148px)',
                letterSpacing: '-0.05em', lineHeight: 0.9,
                color: 'var(--fg)',
                display: 'flex', alignItems: 'center', gap: '0.15em',
              }}
            >
              Ghimire
              {/* Editorial italic accent */}
              <span style={{
                fontFamily: 'Playfair Display', fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(32px, 4vw, 60px)',
                letterSpacing: '-0.01em',
                color: 'var(--muted)',
                alignSelf: 'flex-end',
                paddingBottom: '0.15em',
              }}>
                — learning & building
              </span>
            </motion.h1>
          </div>

          {/* Bottom row: role + tagline + scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              gap: 24, borderTop: '1px solid var(--border)', paddingTop: 24,
            }}
          >
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Role</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg)' }}>{meta.role}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Focus</div>
              <div style={{ fontSize: 14, color: 'var(--fg)', fontFamily: 'Playfair Display', fontStyle: 'italic' }}>
                {meta.focus}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Worked With </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent)' }}>{meta.stack}</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}
