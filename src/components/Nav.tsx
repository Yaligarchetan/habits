import React from "react";
import { SyncModal } from "./SyncModal";

export const Nav: React.FC = () => {
  const [showSyncModal, setShowSyncModal] = React.useState(false);

  return (
    <>
      {showSyncModal && <SyncModal onClose={() => setShowSyncModal(false)} />}

      <nav className="bg-gray sticky m-auto flex h-20 w-full items-center justify-between rounded-2xl bg-opacity-50 px-8 py-2 backdrop-blur-xl sm:w-[600px]">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" className="size-10" alt="logo" />
          habits
        </a>

        <button
          className="cursor-pointer duration-100 hover:opacity-75"
          onClick={() => setShowSyncModal(!showSyncModal)}
        >
          Sync
        </button>
      </nav>
    </>
  );
};
