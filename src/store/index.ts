import { create } from 'zustand';

interface FeatureState {
  // Define your feature state here if needed
  // For now, it's an empty store as useFeatureStore is just a placeholder
}

export const useFeatureStore = create<FeatureState>(() => ({}));