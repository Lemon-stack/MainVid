import { useState } from "react";

/* eslint-disable react/prop-types */
const Notification = () => {
  const [haveOpened, setHaveOpened] = useState(false);
  function opened() {
    localStorage.setItem("opened", "true");
    setHaveOpened(true);
  }
  return (
    <div
      className={`w-full text-zinc-800 bg-violet-200 flex px-2 items-center z-30 justify-center py-1 ${
        haveOpened ? "hidden" : ""
      }`}
    >
      <p className="text-xs lg:text-center">
        NB: You have a total of 10 requests, this is a small project and others
        need to try it out too. Thanks for your understanding {":)"}
      </p>
      <svg
        onClick={opened}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-9 sm:size-4 lg:size-3.5 cursor-pointer ml-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Notification;
