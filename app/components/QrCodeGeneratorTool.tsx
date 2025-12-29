'use client';
import { useState, useRef, useEffect } from 'react';

export default function QrCodeGeneratorTool() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (text && canvasRef.current) {
      generateQR();
    }
  }, [text]);

  const generateQR = async () => {
    if (!text || !canvasRef.current) return;
    try {
      const QRCode = (await import('qrcode')).default;
      await QRCode.toCanvas(canvasRef.current, text, {
        width: 300,
        margin: 2,
        color: { dark: '#000000', light: '#ffffff' }
      });
      const dataUrl = canvasRef.current.toDataURL('image/png');
      setQrCode(dataUrl);
    } catch (error) {
      console.error('QR generation error:', error);
    }
  };

  const downloadQR = () => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrCode;
    link.click();
  };

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>Browser based
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">QR Code Generator</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Generate QR codes for URLs, text, contact info, and more. Everything happens in your browser—instant and private.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Enter text or URL</label>
              <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="https://example.com or any text..." className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20" rows={4}/>
            </div>
            {qrCode && (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white p-6">
                <canvas ref={canvasRef} className="hidden"/>
                <img src={qrCode} alt="QR Code" className="h-[300px] w-[300px]"/>
                <button onClick={downloadQR} className="rounded-full border border-slate-900/15 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-900/5">Download QR Code</button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Common uses</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Website URLs</li>
                <li>• Contact information</li>
                <li>• WiFi credentials</li>
                <li>• Product information</li>
                <li>• Event details</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-xs text-slate-400">
              <strong className="text-slate-300">Privacy first:</strong> QR codes are generated locally in your browser. No data is sent to any server.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
