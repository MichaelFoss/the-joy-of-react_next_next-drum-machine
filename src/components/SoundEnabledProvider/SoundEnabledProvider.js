'use client';
import { createContext, useContext, useState } from 'react';

const SoundEnabledContext = createContext(false);

const SoundEnabledProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const toggleSoundEnabled = () => setSoundEnabled(!soundEnabled);

  const providerValue = {
    soundEnabled,
    toggleSoundEnabled,
  };

  return (
    <SoundEnabledContext.Provider value={providerValue}>
      {children}
    </SoundEnabledContext.Provider>
  );
};

export const useSoundEnabled = () => {
  const ctxVal = useContext(SoundEnabledContext);
  if (!SoundEnabledContext) {
    throw new Error('Cannot get SoundEnabled context');
  }
  if (!ctxVal) {
    throw new Error('Cannot get SoundEnabled context value');
  }
  return ctxVal;
};

export default SoundEnabledProvider;
