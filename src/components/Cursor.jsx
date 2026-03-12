import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const rPos = useRef({ x: -100, y: -100 });
  const isHover = useRef(false);
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      rPos.current.x += (pos.current.x - rPos.current.x) * 0.09;
      rPos.current.y += (pos.current.y - rPos.current.y) * 0.09;
      if (ring.current) {
        const s = isHover.current ? 48 : 28;
        ring.current.style.transform = `translate(${rPos.current.x - s / 2}px, ${rPos.current.y - s / 2}px)`;
        ring.current.style.width = `${s}px`;
        ring.current.style.height = `${s}px`;
        ring.current.style.borderColor = isHover.current ? 'var(--accent)' : 'var(--fg)';
        ring.current.style.opacity = isHover.current ? '1' : '0.35';
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    document.addEventListener('mousemove', onMove);

    const onEnter = () => { isHover.current = true; };
    const onLeave = () => { isHover.current = false; };
    const targets = document.querySelectorAll('a, button, [data-cursor]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99999,
        width: 8, height: 8,
        background: 'var(--fg)', borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div ref={ring} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99998,
        width: 28, height: 28,
        border: '1.5px solid var(--fg)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'width 0.3s var(--ease-out-expo), height 0.3s var(--ease-out-expo), border-color 0.3s, opacity 0.3s',
        opacity: 0.35,
      }} />
    </>
  );
}
