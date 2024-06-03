import React from "react";
import { WaitlistTab } from "./waitlistTab";

interface DialogProps {
  open: boolean;
  setIsModelOpen: (isOpen: boolean) => void;
  filter: {
    startdate: string;
    enddate: string;
    orders: string;
    service: string;
    status: string;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      startdate: string;
      enddate: string;
      orders: string;
      service: string;
      status: string;
    }>
  >;
}

export const WaitlistDialog: React.FC<DialogProps> = ({
  open,
  setIsModelOpen,
  filter,
  setFilter,
}) => {
  const handleReset = () => {
    setFilter({
      startdate: "",
      enddate: "",
      orders: "",
      service: "",
      status: "",
    });
  };

  return (
    <>
      {open && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={!open}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden w-full h-full bg-white bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-6xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-[#F8FAFC]">
              {/* body */}
              <div className="h-full">
                <WaitlistTab filter={filter} setFilter={setFilter} />
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-4 md:p-5 border-t border-[#E2E8F0] rounded-b ">
                <button
                  type="button"
                  className="text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-black "
                  onClick={handleReset}
                >
                  Reset to Default
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-white rounded-lg border  bg-black  focus:z-10 focus:ring-4 f  "
                  onClick={() => setIsModelOpen(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
