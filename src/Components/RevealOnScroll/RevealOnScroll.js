import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".meet-us-content", ".right-for-me", ".right-for-me-heading-area",
  ".reason-outer", ".reason-box", ".yt-section-outer", ".blogging-header",
  ".small-card", ".big-card", ".news-letter-wrapper .content-section",
  ".appointment-wrapper > .header", ".appointment-wrapper > .slogan", ".virtual-platform-grid",
  ".story", ".video", ".background", ".vision", ".contact-heading",
  ".child-box", ".map-container", ".blog-card"
].join(",");

function RevealOnScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = reducedMotion ? null : new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px" });

    const registerElements = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((element, index) => {
        if (!element.classList.contains("reveal-ready")) {
          element.classList.add("reveal-ready");
          element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
        }
        if (reducedMotion) element.classList.add("is-visible");
        else observer.observe(element);
      });
    };

    registerElements();
    const mutationObserver = new MutationObserver(registerElements);
    const observationRoot = document.getElementById("root") || document.body;
    mutationObserver.observe(observationRoot, { childList: true, subtree: true });
    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

export default RevealOnScroll;
