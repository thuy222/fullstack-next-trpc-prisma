// ToastContainer.tsx
import React from 'react';
import { Toast } from '~/app/hooks/useToast';

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  const getToastColor = (type: Toast['type']) => {
    let color = '';
    switch (type) {
      case 'success':
        color = 'bg-green-500';
        break;
      case 'error':
        color = 'bg-red-500';
        break;
      case 'info':
        color = 'bg-blue-500';
        break;
      default:
        break;
    }
    return color;
  };

  return (
    <div className="fixed right-5 top-5 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`role="alert" h-100 flex w-full max-w-xs items-center rounded py-2 text-white shadow transition-opacity duration-300 dark:text-gray-400 ${getToastColor(toast.type)}`}
        >
          <div className="ms-3 text-sm font-normal">{toast.message}</div>
          <button
            type="button"
            className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={() => removeToast(toast.id)}
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
