import { useState, useEffect } from "react";

export const useStickyBar = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < 1) {
        setShowStickyBar(false);
      } else if (currentScrollPosition < lastScrollPosition) {
        setShowStickyBar(false); // Hide on scroll up
      } else if (currentScrollPosition > lastScrollPosition) {
        setShowStickyBar(true); // Show on scroll down
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showStickyBar;
};
