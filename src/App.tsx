import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, 
  ChevronRight, 
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Cpu, 
  Globe, 
  Layers, 
  Menu, 
  MousePointer2, 
  Move, 
  X,
  ArrowUpRight,
  Info,
  Settings,
  Maximize2
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

// Mobile Movement Buttons Component
const MobileMovementButtons = ({ keysRef }: any) => {
  const handleStart = (key: string, e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    keysRef.current[key] = true;
  };

  const handleEnd = (key: string, e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    keysRef.current[key] = false;
  };

  const btnClass = "w-9 h-9 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-lg flex items-center justify-center active:bg-white/40 active:scale-90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] pointer-events-auto";

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-center gap-1.5 lg:hidden pointer-events-none">
      {/* Up Button */}
      <button 
        className={btnClass}
        onTouchStart={(e) => handleStart('KeyW', e)}
        onTouchEnd={(e) => handleEnd('KeyW', e)}
        onMouseDown={(e) => handleStart('KeyW', e)}
        onMouseUp={(e) => handleEnd('KeyW', e)}
      >
        <ChevronUp className="w-5 h-5 text-white" />
      </button>
      
      {/* Row with Left, Down, Right */}
      <div className="flex gap-1.5">
        <button 
          className={btnClass}
          onTouchStart={(e) => handleStart('KeyA', e)}
          onTouchEnd={(e) => handleEnd('KeyA', e)}
          onMouseDown={(e) => handleStart('KeyA', e)}
          onMouseUp={(e) => handleEnd('KeyA', e)}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button 
          className={btnClass}
          onTouchStart={(e) => handleStart('KeyS', e)}
          onTouchEnd={(e) => handleEnd('KeyS', e)}
          onMouseDown={(e) => handleStart('KeyS', e)}
          onMouseUp={(e) => handleEnd('KeyS', e)}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </button>

        <button 
          className={btnClass}
          onTouchStart={(e) => handleStart('KeyD', e)}
          onTouchEnd={(e) => handleEnd('KeyD', e)}
          onMouseDown={(e) => handleStart('KeyD', e)}
          onMouseUp={(e) => handleEnd('KeyD', e)}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

const FloatingNav = () => (
  <nav className="fixed top-[2%] lg:top-[5%] left-[2%] lg:left-[5%] right-[2%] lg:left-[5%] z-50 flex items-center justify-between pointer-events-none">
    <div className="flex items-center gap-2 lg:gap-4 bg-white/90 backdrop-blur-md pl-3 pr-4 lg:pl-8 lg:pr-16 py-2 lg:py-10 rounded-br-[1.5rem] lg:rounded-br-[3rem] pointer-events-auto shadow-xl lg:shadow-2xl min-w-0 lg:max-w-[240px] lg:min-w-[320px]">
      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-black rounded-sm flex items-center justify-center p-0.5 lg:p-1 overflow-hidden">
        <img 
          src="https://storage.googleapis.com/m-infra.appspot.com/public/res/ais/2026-04-06/496739983719460098939c445691456c/logo.png" 
          alt="3OSI Logo" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="font-display font-bold text-sm lg:text-2xl tracking-tighter text-black">3OSI.STUDIO</span>
    </div>

    <div className="hidden lg:flex items-center gap-2 pointer-events-auto mt-6">
      <div className="glass px-4 py-2 rounded-full flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/60">
        <a href="#" className="hover:text-white transition-colors">Showcase</a>
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
      <button className="glass p-2 rounded-full hover:bg-white/10 transition-colors">
        <Settings className="w-4 h-4" />
      </button>
    </div>
  </nav>
);

const SidebarInfo = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed left-[5%] right-[5%] bottom-[5%] z-40 pointer-events-none flex justify-center hidden lg:flex">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass p-4 px-6 rounded-2xl pointer-events-auto flex items-center gap-8 relative overflow-hidden max-w-5xl w-auto border border-white/10"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex items-center gap-4 border-r border-white/10 pr-8">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                <Box className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-display font-bold text-gradient whitespace-nowrap">Interactive Space</h1>
                <p className="text-[9px] text-brand-secondary leading-tight max-w-[180px]">
                  Explore architectural concepts in real-time.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest">
                  <p className="text-white/40">Technology</p>
                  <p>WebGL 2.0</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest">
                  <p className="text-white/40">Performance</p>
                  <p>60 FPS Stable</p>
                </div>
              </div>
            </div>

            <button className="ml-auto py-2 px-6 bg-white text-black text-[10px] font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap">
              Start Project <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsOpen(true)}
            className="glass p-3 rounded-full pointer-events-auto hover:bg-white/10 transition-colors border border-white/10"
          >
            <Info className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const ControlsHint = ({ currentSpeed }: { currentSpeed: number }) => (
  <div className="fixed right-[4%] bottom-[15%] z-40 flex flex-col gap-3 pointer-events-none items-end hidden lg:flex">
    <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/70">
      <Move className="w-3 h-3" />
      <span>WASD to Move</span>
    </div>
    <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/70">
      <MousePointer2 className="w-3 h-3" />
      <span>Mouse to Look</span>
    </div>
    <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/70">
      <div className="w-2 h-3 border border-white/40 rounded-sm relative">
        <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-white/60 rounded-full animate-bounce" />
      </div>
      <span>Scroll to Speed</span>
    </div>
    
    {/* Speed Indicator */}
    <div className="mt-2 glass p-4 rounded-2xl border border-white/10 flex flex-col items-center gap-1 min-w-[120px]">
      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">Velocity</span>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-display font-bold text-gradient">{(currentSpeed * 100).toFixed(0)}</span>
        <span className="text-[9px] font-bold text-white/40">KM/H</span>
      </div>
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
        <motion.div 
          className="h-full bg-white/40"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((currentSpeed / 2) * 100, 100)}%` }}
        />
      </div>
    </div>
  </div>
);

export default function App() {
  const modelId = "3fb9343118a34ad38e6b7245e386a112"; 
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const apiRef = useRef<any>(null);
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const mouseRef = useRef({ isDown: false, lastX: 0, lastY: 0 });
  const rotationTouchId = useRef<number | null>(null);
  const moveSpeed = useRef(0.05); // Speed 5 (0.05)
  const [displaySpeed, setDisplaySpeed] = useState(0.05);
  const rotateSpeed = 0.005;
  const joystickRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const client = new (window as any).Sketchfab(iframeRef.current);

    client.init(modelId, {
      autostart: 1,
      internal: 1,
      tracking: 0,
      ui_ar: 0,
      ui_infos: 0,
      ui_snapshots: 0,
      ui_stop: 0,
      ui_watermark: 0,
      ui_help: 0, // Disable help overlay
      ui_hint: 0, // Disable hints
      ui_settings: 0,
      navigation: 'fps',
      keyboard: 0,
      camera: 0,
      success: (api: any) => {
        api.start();
        apiRef.current = api;
        
        const handleKeyDown = (e: KeyboardEvent) => {
          keysRef.current[e.code] = true;
          if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
            e.preventDefault();
          }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
          keysRef.current[e.code] = false;
        };

        const handleWheel = (e: WheelEvent) => {
          const delta = e.deltaY > 0 ? 0.9 : 1.1;
          const newSpeed = Math.min(Math.max(moveSpeed.current * delta, 0.02), 2.0);
          moveSpeed.current = newSpeed;
          setDisplaySpeed(newSpeed);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('wheel', handleWheel, { passive: false });

        let isUpdating = false;
        let lastTime = performance.now();
        const update = () => {
          const now = performance.now();
          const dt = (now - lastTime) / 1000;
          lastTime = now;

          if (!apiRef.current) {
            requestAnimationFrame(update);
            return;
          }

          const jx = joystickRef.current.x;
          const jy = joystickRef.current.y;
          const hasJoystick = Math.abs(jx) > 0.05 || Math.abs(jy) > 0.05;
          const hasKeys = keysRef.current['KeyW'] || keysRef.current['KeyA'] || keysRef.current['KeyS'] || keysRef.current['KeyD'] || keysRef.current['ArrowUp'] || keysRef.current['ArrowDown'] || keysRef.current['ArrowLeft'] || keysRef.current['ArrowRight'];

          if ((hasKeys || hasJoystick) && !isUpdating) {
            isUpdating = true;
            apiRef.current.getCameraLookAt((err: any, camera: any) => {
              if (err) {
                isUpdating = false;
                return;
              }

              const eye = camera.position;
              const target = camera.target;
              
              let fx = target[0] - eye[0];
              let fy = target[1] - eye[1];
              const fLen = Math.sqrt(fx*fx + fy*fy);
              
              if (fLen > 0.001) {
                fx /= fLen;
                fy /= fLen;
              } else {
                fx = 1; fy = 0;
              }

              const rx = fy;
              const ry = -fx;

              let moveX = 0, moveY = 0;
              
              if (keysRef.current['KeyW'] || keysRef.current['ArrowUp']) { moveX += fx; moveY += fy; }
              if (keysRef.current['KeyS'] || keysRef.current['ArrowDown']) { moveX -= fx; moveY -= fy; }
              if (keysRef.current['KeyA'] || keysRef.current['ArrowLeft']) { moveX -= rx; moveY -= ry; }
              if (keysRef.current['KeyD'] || keysRef.current['ArrowRight']) { moveX += rx; moveY += ry; }

              if (hasJoystick) {
                moveX += (fx * jy + rx * jx);
                moveY += (fy * jy + ry * jx);
              }

              if (moveX !== 0 || moveY !== 0) {
                const moveLen = Math.sqrt(moveX*moveX + moveY*moveY);
                if (moveLen > 1) {
                  moveX /= moveLen;
                  moveY /= moveLen;
                }

                // Use a fixed step size for now to ensure it moves
                const stepX = moveX * moveSpeed.current;
                const stepY = moveY * moveSpeed.current;
                
                apiRef.current.setCameraLookAt(
                  [eye[0] + stepX, eye[1] + stepY, eye[2]],
                  [target[0] + stepX, target[1] + stepY, target[2]],
                  0, // Instant movement for real-time control
                  () => { 
                    isUpdating = false;
                  }
                );
                
                // Fallback for isUpdating
                setTimeout(() => { isUpdating = false; }, 50);
              } else {
                isUpdating = false;
              }
            });
          }
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
          window.removeEventListener('wheel', handleWheel);
        };
      },
      error: () => console.error('Sketchfab API error')
    });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    mouseRef.current = { isDown: true, lastX: e.clientX, lastY: e.clientY };
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (rotationTouchId.current === null) {
      const touch = e.changedTouches[0];
      rotationTouchId.current = touch.identifier;
      mouseRef.current = { isDown: true, lastX: touch.clientX, lastY: touch.clientY };
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!mouseRef.current.isDown || !apiRef.current) return;
    const dx = e.clientX - mouseRef.current.lastX;
    const dy = e.clientY - mouseRef.current.lastY;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
    handleRotation(dx, dy);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (rotationTouchId.current === null || !apiRef.current) return;
    const touch = Array.from(e.touches).find(t => (t as any).identifier === rotationTouchId.current) as any;
    if (!touch) return;

    const dx = touch.clientX - mouseRef.current.lastX;
    const dy = touch.clientY - mouseRef.current.lastY;
    mouseRef.current.lastX = touch.clientX;
    mouseRef.current.lastY = touch.clientY;
    handleRotation(dx, dy);
  };

  const handleRotation = (dx: number, dy: number) => {
    apiRef.current.getCameraLookAt((err: any, camera: any) => {
      if (err) return;

      const eye = camera.position;
      const target = camera.target;
      
      const dir = [
        target[0] - eye[0],
        target[1] - eye[1],
        target[2] - eye[2]
      ];
      
      const yaw = -dx * rotateSpeed;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const nx = dir[0] * cosY - dir[1] * sinY;
      const ny = dir[0] * sinY + dir[1] * cosY;
      
      const pitch = -dy * rotateSpeed;
      const nz = dir[2] + pitch * Math.sqrt(dir[0]**2 + dir[1]**2);

      apiRef.current.setCameraLookAt(
        eye,
        [eye[0] + nx, eye[1] + ny, eye[2] + nz],
        0
      );
    });
  };

  const onMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = Array.from(e.changedTouches).find(t => (t as any).identifier === rotationTouchId.current) as any;
    if (touch) {
      rotationTouchId.current = null;
      mouseRef.current.isDown = false;
    }
  };

  const resetView = () => {
    if (!apiRef.current) return;
    apiRef.current.setCameraLookAt(
      [0, -10, 5],
      [0, 0, 0],
      1
    );
  };

  return (
    <div 
      className="h-screen w-screen overflow-hidden bg-bg-dark relative select-none touch-none lg:cursor-move lg:active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingNav />
        <SidebarInfo />
        <ControlsHint currentSpeed={displaySpeed} />
        <MobileMovementButtons keysRef={keysRef} />
      </div>
      
      {/* Main 3D Viewer Container */}
      <div className="absolute inset-[5%] z-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black">
        <iframe
          ref={iframeRef}
          id="sketchfab-iframe"
          title="Kokon"
          className="w-full h-full border-0 pointer-events-none"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          referrerPolicy="no-referrer"
        />
      </div>




      {/* Fullscreen Button */}
      <button className="fixed top-10 right-10 z-50 glass p-2 rounded-full hover:bg-white/10 transition-colors lg:hidden">
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
  );
}
