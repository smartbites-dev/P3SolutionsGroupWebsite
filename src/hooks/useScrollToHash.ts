import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router v6/v7 doesn't scroll to a URL hash on navigation. Nav items
 * are rendered as `<Link to="/#services">` everywhere (Header/Footer) so
 * they work identically from any route — this hook is what makes landing
 * back on `/` with a hash actually scroll to the right section, whether you
 * were already on `/` or arrived from `/insights`.
 */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView();
  }, [hash]);
}
