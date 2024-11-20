'use client';
import { createContext, useState } from 'react';

export const SoundEnabledContext = createContext(false);

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

export default SoundEnabledProvider;
