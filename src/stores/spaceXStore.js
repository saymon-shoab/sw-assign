// src/stores/spaceXStore.js
import { writable } from 'svelte/store';

export const launches = writable([]);

export const fetchLaunches = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const data = await response.json();
    launches.set(data);
  } catch (error) {
    console.error('Error fetching SpaceX data:', error);
  }
};
