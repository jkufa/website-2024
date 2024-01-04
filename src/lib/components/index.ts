// Root level components
export { default as AboutItem } from './AboutItem/AboutItem.svelte';
export { default as Button } from './Button.svelte';
export { default as LenisContext } from './LenisContext.svelte';
export { default as Mug } from './Mug.svelte';
export { default as ProgressBar } from './Background/ProgressBar.svelte';

// Components consisting of multiple components get their own folder
export * from './AboutItem';
export * from './Animations';
export * from './Background';
export * from './Nav';
export * from './Project';
export * from './Skills';
