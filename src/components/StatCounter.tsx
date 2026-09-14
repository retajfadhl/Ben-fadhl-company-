import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  duration?: number;
}

export default function StatCounter({ end, label, duration = 1600 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (startTimestamp === null) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="bg-white p-7 text-center sm:p-8">
      <div className="font-heading text-4xl font-extrabold text-slate-950 sm:text-5xl">
        {count}<span className="text-amber-600">+</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-600">{label}</div>
    </div>
  );
}
