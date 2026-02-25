// src/hooks/useScrollReveal.js
import { useEffect } from "react";

export default function useScrollReveal({
    selector = "[data-reveal]",
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.15,
} = {}) {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;

        // Respect user's reduced motion preference
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (reduce) {
            els.forEach((el) => el.classList.add("is-revealed"));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                        io.unobserve(entry.target); // reveal once
                    }
                });
            },
            { root: null, rootMargin, threshold }
        );

        els.forEach((el) => io.observe(el));

        return () => io.disconnect();
    }, [selector, rootMargin, threshold]);
}