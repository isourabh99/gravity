"use client";

import { useState, useEffect } from "react";

let globalSoundOn = false;
const listeners = new Set<(soundOn: boolean) => void>();

export function toggleGlobalSound() {
  globalSoundOn = !globalSoundOn;
  listeners.forEach((fn) => fn(globalSoundOn));
  return globalSoundOn;
}

export function useSound() {
  const [soundOn, setSoundOn] = useState(globalSoundOn);

  useEffect(() => {
    const handleUpdate = (val: boolean) => setSoundOn(val);
    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return {
    soundOn,
    toggleSound: toggleGlobalSound,
  };
}
