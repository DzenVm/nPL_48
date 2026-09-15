"use client";

import { useEffect, useRef } from "react";

/**
 * Odręcznie napisane tło heksagonalne pod hero. Świadomie bez żadnego silnika
 * gry ani biblioteki do canvasu — to dwadzieścia kilka linijek matematyki
 * heksagonów plus jeden requestAnimationFrame. Animacja to wolno przesuwająca
 * się "latarnia zwiadu", która podświetla kolejne pola — nawiązanie do mgły
 * zwiadu opisanej w mechanikach, nie ozdobnik z katalogu efektów.
 */
export function HeksagonalneTlo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const zredukowanRuch = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let szer = 0;
    let wys = 0;
    let dpr = 1;
    let animId = 0;
    let widoczny = true;
    let start = performance.now();

    const r = 34;
    const hexHeight = Math.sqrt(3) * r;

    function ustawRozmiar() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      szer = rect.width;
      wys = rect.height;
      canvas.width = Math.round(szer * dpr);
      canvas.height = Math.round(wys * dpr);
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function hexPath(cx: number, cy: number, promien: number) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const kat = (Math.PI / 180) * (60 * i);
        const x = cx + promien * Math.cos(kat);
        const y = cy + promien * Math.sin(kat);
        if (i === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.closePath();
    }

    function rysuj(t: number) {
      if (!ctx) return;
      const czas = (t - start) / 1000;
      ctx.clearRect(0, 0, szer, wys);

      const cols = Math.ceil(szer / (1.5 * r)) + 2;
      const rows = Math.ceil(wys / hexHeight) + 2;

      const cykl = 22;
      const postep = zredukowanRuch ? 0.3 : (czas % cykl) / cykl;
      const lx = -r * 2 + postep * (szer + r * 4);
      const ly = wys * 0.35 + Math.sin(postep * Math.PI * 2) * wys * 0.28;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const cx = col * 1.5 * r;
          const cy = row * hexHeight + (Math.abs(col) % 2) * (hexHeight / 2);
          const d = Math.hypot(cx - lx, cy - ly);
          const swiatlo = Math.max(0, 1 - d / (szer * 0.42));
          hexPath(cx, cy, r - 2.5);
          ctx.strokeStyle = `rgba(219, 138, 76, ${0.08 + swiatlo * 0.5})`;
          ctx.lineWidth = 1.25;
          ctx.stroke();
          if (swiatlo > 0.15) {
            ctx.fillStyle = `rgba(197, 106, 42, ${swiatlo * 0.14})`;
            ctx.fill();
          }
        }
      }

      if (!zredukowanRuch && widoczny) {
        animId = requestAnimationFrame(rysuj);
      }
    }

    ustawRozmiar();
    animId = requestAnimationFrame(rysuj);

    const onResize = () => ustawRozmiar();
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        widoczny = entry.isIntersecting;
        if (widoczny && !zredukowanRuch) {
          start = performance.now() - ((performance.now() - start) % 22000);
          animId = requestAnimationFrame(rysuj);
        } else {
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
