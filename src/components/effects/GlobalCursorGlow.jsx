import { useEffect, useRef } from "react";
import "../../styles/cursor-glow.css";

const GlobalCursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const el = glowRef.current;
        if (!el) return;

        let rafId = null;
        let hideTimer = null;

        const setPos = (x, y) => {
            el.style.setProperty("--gx", `${x}px`);
            el.style.setProperty("--gy", `${y}px`);
        };

        const activate = () => {
            el.classList.add("glow-active");
            if (hideTimer) clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                el.classList.remove("glow-active");
            }, 450); // fade out after touch
        };

        // Desktop mouse glow
        const onMouseMove = (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                setPos(e.clientX, e.clientY);
                el.classList.add("glow-active");
                rafId = null;
            });
        };

        const onMouseLeave = () => {
            el.classList.remove("glow-active");
        };

        // Mobile touch glow
        const onTouchStart = (e) => {
            const t = e.touches?.[0];
            if (!t) return;
            setPos(t.clientX, t.clientY);
            activate();
        };

        // Optional: make glow follow finger while dragging
        const onTouchMove = (e) => {
            const t = e.touches?.[0];
            if (!t) return;

            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                setPos(t.clientX, t.clientY);
                el.classList.add("glow-active");
                rafId = null;
            });
        };

        const onTouchEnd = () => {
            // Let CSS fade handle it, but we also schedule removal quickly
            if (hideTimer) clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                el.classList.remove("glow-active");
            }, 220);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseleave", onMouseLeave, { passive: true });

        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("touchend", onTouchEnd, { passive: true });
        window.addEventListener("touchcancel", onTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);

            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("touchcancel", onTouchEnd);

            if (rafId) cancelAnimationFrame(rafId);
            if (hideTimer) clearTimeout(hideTimer);
        };
    }, []);

    return <div ref={glowRef} className="global-cursor-glow" aria-hidden="true" />;
};

export default GlobalCursorGlow;