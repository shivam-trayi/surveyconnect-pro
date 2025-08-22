import { useState, useEffect, useCallback } from 'react';
import { type Theme } from '@/types';
import { 
  getStoredTheme, 
  setStoredTheme, 
  getResolvedTheme, 
  applyTheme, 
  getSystemTheme 
} from '@/lib/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme on mount
  useEffect(() => {
    const stored = getStoredTheme();
    const resolved = getResolvedTheme(stored);
    
    setTheme(stored);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const systemTheme = getSystemTheme();
      setResolvedTheme(systemTheme);
      applyTheme(systemTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setResolvedTheme(newTheme);
    setStoredTheme(newTheme);
    applyTheme(newTheme);
  }, [resolvedTheme]);

  const setThemeMode = useCallback((newTheme: Theme) => {
    const resolved = getResolvedTheme(newTheme);
    setTheme(newTheme);
    setResolvedTheme(resolved);
    setStoredTheme(newTheme);
    applyTheme(resolved);
  }, []);

  return {
    theme,
    resolvedTheme,
    toggleTheme,
    setTheme: setThemeMode,
  };
}