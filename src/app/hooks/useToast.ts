import { useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

export type Toast =  {
  id: number;
  message: string;
  type: ToastType;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const addToast = (message: string, type: ToastType = 'info') => {
    const id = idCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    setIdCounter((prev) => prev + 1);

    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};