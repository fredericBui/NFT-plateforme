import {
  BookmarkIcon,
  DotsVerticalIcon,
  RefreshIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import React from "react";

export const ButtonGroup: React.FC = () => {
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <RefreshIcon
          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <ShareIcon
          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <DotsVerticalIcon
          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
    </span>
  );
};
