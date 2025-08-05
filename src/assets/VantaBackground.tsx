import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any;
    const initEffect = async () => {
      const NET = (await import("vanta/dist/vanta.ripple.min")).default;
      effect = NET({
        el: vantaRef.current,
        THREE: THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,


  
      });
    };
    initEffect();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "100vh", position: "fixed" }}
    ></div>
  );
}
