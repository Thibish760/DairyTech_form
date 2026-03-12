// import React, { useEffect, useRef } from 'react';

// interface TechTransitionProps {
//   onComplete: () => void;
// }

// export const TechTransition: React.FC<TechTransitionProps> = ({ onComplete }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d')!;

//     const imgBlue = new Image();
//     const imgGreen = new Image();
//     // Ensure these are in your /public folder
//     imgBlue.src = '/IMG_1906.png'; 
//     imgGreen.src = 'azhizen-logo-green.png';

//     let loaded = 0;
//     const onLoad = () => {
//       if (++loaded === 2) start();
//     };
//     imgBlue.onload = onLoad;
//     imgGreen.onload = onLoad;

//     let animationId: number;

//     function buildLiquid(W: number, H: number, fillY: number, waveOffset: number, colors: any) {
//       const off = document.createElement('canvas');
//       off.width = W; off.height = H;
//       const wctx = off.getContext('2d')!;

//       // Layer 1
//       wctx.beginPath(); wctx.moveTo(0, H);
//       for (let x = 0; x <= W; x++) {
//         const y = fillY + Math.sin((x * 0.008) + (waveOffset * 0.040)) * 18 + Math.sin((x * 0.004) + (waveOffset * 0.020)) * 10;
//         wctx.lineTo(x, y);
//       }
//       wctx.lineTo(W, H); wctx.closePath();
//       wctx.fillStyle = colors.back; wctx.fill();

//       // Layer 2
//       wctx.beginPath(); wctx.moveTo(0, H);
//       for (let x = 0; x <= W; x++) {
//         const y = fillY + Math.sin((x * 0.010) - (waveOffset * 0.055) + 1.5) * 20 + Math.sin((x * 0.006) + (waveOffset * 0.028) + 2.0) * 12;
//         wctx.lineTo(x, y);
//       }
//       wctx.lineTo(W, H); wctx.closePath();
//       wctx.fillStyle = colors.mid; wctx.fill();

//       // Layer 3 (Gradient)
//       wctx.beginPath(); wctx.moveTo(0, H);
//       for (let x = 0; x <= W; x++) {
//         const y = fillY + Math.sin((x * 0.013) + (waveOffset * 0.075) + 3.5) * 16 + Math.sin((x * 0.007) - (waveOffset * 0.038) + 1.0) * 10;
//         wctx.lineTo(x, y);
//       }
//       wctx.lineTo(W, H); wctx.closePath();
//       const g = wctx.createLinearGradient(0, fillY, W, H);
//       g.addColorStop(0, colors.f0); g.addColorStop(0.5, colors.f1); g.addColorStop(1, colors.f2);
//       wctx.fillStyle = g; wctx.fill();

//       return off;
//     }

//     function maskLiquid(img: HTMLImageElement, liquid: HTMLCanvasElement, W: number, H: number) {
//       const off = document.createElement('canvas');
//       off.width = W; off.height = H;
//       const mctx = off.getContext('2d')!;
//       mctx.drawImage(img, 0, 0, W, H);
//       mctx.globalCompositeOperation = 'source-in';
//       mctx.drawImage(liquid, 0, 0);
//       return off;
//     }

//     function start() {
//       const W = imgBlue.naturalWidth;
//       const H = imgBlue.naturalHeight;
//       canvas!.width = W;
//       canvas!.height = H;

//       let waveOffset = 0;
//       let cyclePhase = 0;
//       const CYCLE_SPEED = 0.058;
//       let currentTheme = 1; // Start with Green

//       const themes = [
//         {
//           img: imgBlue,
//           colors: { back: '#0a5080', mid: '#1278b8', f0: '#00c4ea', f1: '#1a8fd0', f2: '#0a5ea0' }
//         },
//         {
//           img: imgGreen,
//           colors: { back: '#1a4a1a', mid: '#2a7a2a', f0: '#7ed321', f1: '#4caf50', f2: '#1b5e20' }
//         }
//       ];

//       function drawFrame() {
//         waveOffset += 2.5;
//         cyclePhase += CYCLE_SPEED;

//         if (cyclePhase >= 2 * Math.PI) {
//           cyclePhase -= 2 * Math.PI;
//           currentTheme = (currentTheme + 1) % 2;
//           // Trigger redirect when it switches to Blue (Tech)
//           if (currentTheme === 0) {
//             setTimeout(onComplete, 500); 
//           }
//         }

//         const progress = (Math.sin(cyclePhase - Math.PI / 2) + 1) / 2;
//         const fillY = H - progress * H;
//         const theme = themes[currentTheme];

//         ctx.clearRect(0, 0, W, H);
//         const liquid = buildLiquid(W, H, fillY, waveOffset, theme.colors);
//         const masked = maskLiquid(theme.img, liquid, W, H);

//         ctx.globalAlpha = 0.08;
//         ctx.drawImage(theme.img, 0, 0, W, H);
//         ctx.globalAlpha = 1;
//         ctx.drawImage(masked, 0, 0);

//         animationId = requestAnimationFrame(drawFrame);
//       }
//       drawFrame();
//     }

//     return () => cancelAnimationFrame(animationId);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
//       <canvas ref={canvasRef} className="max-w-[80%] max-h-[60%] object-contain" />
//       <div className="mt-8 flex flex-col items-center gap-4">
//         <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin" />
//         <span className="text-gray-500 text-sm font-bold tracking-[0.2em]">SWITCHING TO TECH</span>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useRef } from 'react';

interface TechTransitionProps {
  onComplete: () => void;
}

export const TechTransition: React.FC<TechTransitionProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const imgBlue = new Image();
    const imgGreen = new Image();
    
    // Exact paths from your files
    imgBlue.src = '/azhizen-logo-blue.png'; 
    imgGreen.src = '/azhizen-logo-green.png';

    let loaded = 0;
    const onLoad = () => { if (++loaded === 2) start(); };
    imgBlue.onload = onLoad;
    imgGreen.onload = onLoad;

    let animationId: number;

function buildLiquid(W: number, H: number, fillY: number, waveOffset: number, colors: any) {
      const off = document.createElement('canvas');
      off.width = W; off.height = H;
      const wctx = off.getContext('2d')!;

      // Layer 1: Darkest Background Wave (Depth kaaga)
      wctx.beginPath(); wctx.moveTo(0, H);
      for (let x = 0; x <= W; x++) {
        const y = fillY + Math.sin((x * 0.01) + (waveOffset * 0.04)) * 15;
        wctx.lineTo(x, y);
      }
      wctx.lineTo(W, H); wctx.closePath();
      wctx.fillStyle = colors.dark; 
      wctx.fill();

      // Layer 2: Gradient Wave with Light and Dark balance
      wctx.beginPath(); wctx.moveTo(0, H);
      for (let x = 0; x <= W; x++) {
        const y = fillY + Math.sin((x * 0.015) + (waveOffset * 0.07) + 2) * 12;
        wctx.lineTo(x, y);
      }
      wctx.lineTo(W, H); wctx.closePath();
      
      const g = wctx.createLinearGradient(0, fillY, 0, H);
      // Top layer-la bright light color
      g.addColorStop(0, colors.light); 
      // Naduvula logo-oda main color
      g.addColorStop(0.3, colors.main); 
      // Keela nalla dark shade (video-la miss aana depth idhu dhaan)
      g.addColorStop(1, colors.dark); 
      
      wctx.fillStyle = g;
      wctx.fill();

      return off;
    }

    function maskLiquid(img: HTMLImageElement, liquid: HTMLCanvasElement, W: number, H: number) {
      const off = document.createElement('canvas');
      off.width = W; off.height = H;
      const mctx = off.getContext('2d')!;
      mctx.drawImage(img, 0, 0, W, H);
      mctx.globalCompositeOperation = 'source-in';
      mctx.drawImage(liquid, 0, 0);
      return off;
    }

    function start() {
      const W = imgBlue.naturalWidth;
      const H = imgBlue.naturalHeight;
      canvas!.width = W; canvas!.height = H;

      let waveOffset = 0;
      let progress = 0; 
      let isFlipping = false; 

 const themes = [
        {
          img: imgBlue,
          colors: { 
            light: '#00EAFF', // Innum bright-ana Cyan
            main: '#1a8fd0',  
            dark: '#053E6B'   // Innum nalla dark Blue
          }
        },
        {
          img: imgGreen,
          colors: { 
            light: '#B2FF59', // Brightest Lime
            main: '#4caf50',  
            dark: '#143D16'   // Innum nalla dark Green
          }
        }
      ];

      function drawFrame() {
        waveOffset += 2;
        ctx.clearRect(0, 0, W, H);

        if (!isFlipping) {
          // GREEN DRAINS DOWN
          progress += 0.012; 
          const fillY = progress * H; 
          const theme = themes[1]; 
          
          const liquid = buildLiquid(W, H, fillY, waveOffset, theme.colors);
          const masked = maskLiquid(theme.img, liquid, W, H);
          
          ctx.globalAlpha = 0.05;
          ctx.drawImage(theme.img, 0, 0, W, H);
          ctx.globalAlpha = 1;
          ctx.drawImage(masked, 0, 0);

          if (progress >= 1) isFlipping = true;
        } else {
          // BLUE FILLS UP
          progress -= 0.012;
          const fillY = progress * H;
          const theme = themes[0]; 

          const liquid = buildLiquid(W, H, fillY, waveOffset, theme.colors);
          const masked = maskLiquid(theme.img, liquid, W, H);

          ctx.globalAlpha = 0.05;
          ctx.drawImage(theme.img, 0, 0, W, H);
          ctx.globalAlpha = 1;
          ctx.drawImage(masked, 0, 0);

          if (progress <= 0) {
            setTimeout(onComplete, 400);
            return;
          }
        }
        animationId = requestAnimationFrame(drawFrame);
      }
      drawFrame();
    }

    return () => cancelAnimationFrame(animationId);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="w-[300px] md:w-[350px] object-contain" />
      <div className="mt-10 flex flex-col items-center gap-2">
        <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 font-medium tracking-widest text-[10px] uppercase">
          Switching to Azhizen Tech
        </p>
      </div>
    </div>
  );
};