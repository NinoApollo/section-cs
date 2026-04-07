import type { FC } from "react";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:h-11 sm:w-11 cursor-pointer"
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path d="M 20.248047 2.984375 A 0.750075 0.750075 0 0 0 19.724609 3.2148438 L 12 10.939453 L 4.2753906 3.2148438 A 0.750075 0.750075 0 0 0 3.7363281 2.9882812 A 0.750075 0.750075 0 0 0 3.2148438 4.2753906 L 10.939453 12 L 3.2246094 19.714844 A 0.750075 0.750075 0 1 0 4.2851562 20.775391 L 12 13.060547 L 19.716797 20.779297 A 0.75130096 0.75130096 0 1 0 20.779297 19.716797 L 13.060547 12 L 20.785156 4.2753906 A 0.750075 0.750075 0 0 0 20.248047 2.984375 z"></path>
          </svg>
        }
      </button>
    </>
  );
};

export default ModalCloseButton;
