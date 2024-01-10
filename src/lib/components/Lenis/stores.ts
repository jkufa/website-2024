import { writable } from 'svelte/store';
import type Lenis from '@studio-freight/lenis';

export const lenisInstance = writable<Lenis>();

// For now, leave this as a single store
export const lenisFunctionStore = writable<() => void>(() => {});
