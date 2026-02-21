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

export function handleLocation() {
  if (typeof window === 'undefined') return;

  const path = window.location.pathname;
  const routeName = routes[path] || 'not-found';

  route.set(routeName);
  params.set({});
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', handleLocation);
  handleLocation();
}
