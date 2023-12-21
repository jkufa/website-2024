import { writable } from 'svelte/store';
import { type userSettings as settingsModel } from '$lib/models/userSettings';

const defaultSettings: settingsModel = {
	animationsOn: true,
	introOn: true,
};

/**
 * Stores user settings
 */
export const userSettings = writable(defaultSettings);
