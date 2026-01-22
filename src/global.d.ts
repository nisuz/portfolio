// Ambient module declarations to avoid type errors when dependencies
// are not installed in the environment where type-checking runs.
declare module '@tanstack/react-query';
declare module 'react-router-dom';
declare module 'next-themes';
declare module 'react/jsx-runtime';

// Add any other third-party modules that might be missing types.
declare module 'sonner';
declare module '@radix-ui/react-tooltip';
