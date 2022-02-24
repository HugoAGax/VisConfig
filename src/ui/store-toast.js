import { writable } from "svelte/store";

export const toasts = writable([]);

export const dismissToast = (id) => {
  toasts.update((all) => all.filter((t) => t.id !== id));
};

export const addToast = (toast) => {
  console.log("ADDED TOAST");
  const id = Math.floor(Math.random() * 10000);

  const defaults = {
    id,
    type: "info",
    dismissible: true,
    timeout: 3000,
  };

  const t = { ...defaults, ...toast };
  toasts.update((all) => [t, ...all]);

  if (t.timeout) setTimeout(() => dismissToast(id), t.timeout);
};
