import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { meta } from '../data/portfolio';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      let curr = 'about';
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 300) curr = s.id;
      });
      setActive(curr);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(235,235,232,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '0 48px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#about" style={{
          fontFamily: 'Inter', fontWeight: 900, fontSize: 13,
          letterSpacing: '0.04em', color: 'var(--fg)',
        }}>
          SG<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--muted)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
              onMouseLeave={e => e.currentTarget.style.color = active === l.toLowerCase() ? 'var(--accent)' : 'var(--muted)'}
            >
              {l}
              {active === l.toLowerCase() && (
                <motion.span
                  layoutId="nav-dot"
                  style={{
                    position: 'absolute', bottom: -4, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 4, height: 4, borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'block',
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`mailto:${meta.email}`}
          style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '10px 20px',
            border: '1px solid var(--fg)',
            background: 'transparent',
            transition: 'background 0.25s var(--ease-out-expo), color 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--fg)'; e.currentTarget.style.color = 'var(--bg)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)'; }}
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
