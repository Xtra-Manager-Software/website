import { writable } from 'svelte/store';

export const route = writable('home');
export const params = writable({});

export function navigate(path) {
  if (typeof window !== 'undefined') {
    window.history.pushState({}, '', path);
    handleLocation();
  }
}

const routes = {
  '/': 'home',
  '': 'home',
  '/500': 'server-error',
  '/maintenance': 'maintenance',
  '/downloads': 'downloads'
};

const routeMetadata = {
  'home': {
    title: 'Xtra Manager Software',
    description: 'Xtra Manager Software Community focuses on designing maintainable, real-world solutions. Open source, practical, and collaborative tools.',
    keywords: 'Xtra Manager, Open Source, Software, Android, Kotlin, Rust, Web Development'
  },
  'downloads': {
    title: 'Downloads - Xtra Manager Software',
    description: 'Download the latest tools and projects from the Xtra Manager Software community.',
    keywords: 'Downloads, Xtra Soft, Projects, Apps'
  },
  'not-found': {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
    keywords: '404, error'
  }
};

let currentRouteName = '';

export function handleLocation() {
  if (typeof window === 'undefined') return;

  const path = window.location.pathname;
  const hash = window.location.hash;
  const routeName = routes[path] || 'not-found';
  const isSameRoute = currentRouteName === routeName;

  route.set(routeName);
  params.set({});

  // Dynamic SEO Metadata
  const meta = routeMetadata[routeName] || routeMetadata['home'];
  document.title = meta.title;

  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', meta.description);

  const keyTag = document.querySelector('meta[name="keywords"]');
  if (keyTag) keyTag.setAttribute('content', meta.keywords);

  // Scroll logic: Smooth for same route, Instant for new route
  const behavior = isSameRoute ? 'smooth' : 'instant';

  if (hash) {
    let attempts = 0;
    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
  } else {
    window.scrollTo({ top: 0, behavior });
  }

  currentRouteName = routeName;
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', handleLocation);
  handleLocation();
}
