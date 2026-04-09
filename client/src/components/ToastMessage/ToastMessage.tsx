import { useEffect, type FC } from "react";

interface ToastMessageProps {
  message: string;
  //   isSuccess: boolean;
  isVisible: boolean;
  onClose: () => void;
}

const ToastMessage: FC<ToastMessageProps> = ({
  message,
  //   isSuccess,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <>
      <div
        className={`fixed top-40 right-0 md:right-4 z-60 flex items-center w-full max-w-xs p-4 mb-3 text-black bg-green-100 rounded-lg shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-200 rounded-lg transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M22.506,13.759a3,3,0,0,1,0-3.517l.764-1.055a1,1,0,0,0-.5-1.538l-1.229-.4A2.993,2.993,0,0,1,19.47,4.4V3.1a1,1,0,0,0-1.307-.952l-1.245.4a3,3,0,0,1-3.345-1.089L12.808.411a1.037,1.037,0,0,0-1.616,0l-.765,1.05A3,3,0,0,1,7.082,2.55l-1.245-.4A1,1,0,0,0,4.53,3.1V4.4A2.993,2.993,0,0,1,2.459,7.249l-1.229.4a1,1,0,0,0-.5,1.538l.764,1.054a3,3,0,0,1,0,3.517L.73,14.813a1,1,0,0,0,.5,1.538l1.229.4A2.993,2.993,0,0,1,4.53,19.6v1.3a1,1,0,0,0,1.309.951l1.236-.4a2.989,2.989,0,0,1,3.354,1.09l.762,1.048a1,1,0,0,0,1.618,0l.762-1.048a2.991,2.991,0,0,1,3.354-1.09l1.236.4A1,1,0,0,0,19.47,20.9V19.6a2.993,2.993,0,0,1,2.071-2.853l1.229-.4a1,1,0,0,0,.5-1.538Zm-1.66,1.116a4.987,4.987,0,0,0-3.376,4.649A4.989,4.989,0,0,0,12,21.3a4.985,4.985,0,0,0-3.991-2,5.04,5.04,0,0,0-1.479.223,4.988,4.988,0,0,0-3.376-4.649,4.991,4.991,0,0,0,0-5.75A4.988,4.988,0,0,0,6.53,4.473,4.991,4.991,0,0,0,12,2.7a4.99,4.99,0,0,0,5.47,1.776,4.988,4.988,0,0,0,3.376,4.652A4.991,4.991,0,0,0,20.846,14.875Z"
              fill="#2FC53C"
              stroke="none"
            />
            <path
              d="M15.293,9.293,11,13.586,8.707,11.293a1,1,0,1,0-1.414,1.414l3,3a1,1,0,0,0,1.414,0l5-5a1,1,0,0,0-1.414-1.414Z"
              fill="#2FC53C"
              stroke="none"
            />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
      </div>
    </>
  );
};

export default ToastMessage;
