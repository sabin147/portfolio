import { meta } from '../data/portfolio';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 48px',
      maxWidth: 1400, margin: '0 auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        © 2026 Sabin Ghimire — Vibe Coded
      </div>
      <div style={{
        fontFamily: 'Playfair Display', fontStyle: 'italic',
        color: 'var(--muted)', fontSize: 13,
      }}>
        Built with React + Framer Motion
      </div>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        {meta.location}
      </div>
    </footer>
  );
}
