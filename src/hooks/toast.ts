import { ExternalToast, toast as toaster } from 'sonner';

const toast = {
  show: (
    message: (() => React.ReactNode) | React.ReactNode,
    data?: ExternalToast
  ) => {
    return toaster(message, data);
  },
  error: (
    message: (() => React.ReactNode) | React.ReactNode,
    data?: ExternalToast
  ) => {
    return toaster(message, {
      ...data,
      style: {
        background: 'hsl(var(--destructive))',
        color: 'white',
      },
    });
  },
};

export default toast;
