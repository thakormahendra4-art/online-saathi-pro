import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const items = [...track.children];
    const firstSet = items[0] as HTMLElement | undefined;
    const firstSetWidth = firstSet?.offsetWidth ?? 0;

    if (!firstSetWidth) return;

    const animation = gsap.fromTo(
      track,
      { x: -firstSetWidth },
      {
        x: 0,
        duration: 35,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(track, { x: -firstSetWidth });
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, []);

  return trackRef;
};