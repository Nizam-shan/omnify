import React from "react";
import { Tab } from "@headlessui/react";
import { CreatedAtIcon } from "../icons/createdIcon";
import { Element3 } from "iconsax-react";
import { WaitlistScheduleTab } from "./waitlistSchedule";
import { WaitlistPeopleTab } from "./peopleTab";
import { WaitlistServiceTab } from "./serviceTab";

interface Props {
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

export const WaitlistTab: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <Tab.Group>
      <div className="flex">
        <Tab.List className="flex flex-col w-1/4 h-full min-h-[400px] border-r border-[#E2E8F0]">
          <Tab
            className={({ selected }) =>
              selected
                ? "w-full px-4 py-2 text-sm font-medium text-left text-[#334155] bg-[#E2E8F0]   focus:outline-none flex items-center gap-2"
                : "w-full px-4 py-2 text-sm font-medium text-left text-[#334155] hover:bg-[#E2E8F0] focus:outline-none flex items-center gap-2"
            }
          >
            <CreatedAtIcon />
            <span className="hidden md:inline">Scheduled Date</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "w-full px-4 py-2 text-sm font-medium text-left text-[#334155] bg-[#E2E8F0]  focus:outline-none flex items-center gap-2"
                : "w-full px-4 py-2 text-sm font-medium text-left text-[#334155] hover:bg-[#E2E8F0]  focus:outline-none flex items-center gap-2"
            }
          >
            <svg
              className="w-5 h-5 text-gray-800 dark:text-black opacity-40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="hidden md:inline">People</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "w-full px-4 py-2 text-sm font-medium text-left text-[#334155] bg-[#E2E8F0]  focus:outline-none flex items-center gap-2"
                : "w-full px-4 py-2 text-sm font-medium text-left text-[#334155] hover:bg-[#E2E8F0]  focus:outline-none flex items-center gap-2"
            }
          >
            <Element3 variant="Outline" size={16} />
            <span className="hidden md:inline">Service / Products</span>
          </Tab>
        </Tab.List>
        <Tab.Panels className="w-3/4 p-0 bg-white">
          <Tab.Panel>
            <>
              <WaitlistScheduleTab filter={filter} setFilter={setFilter} />
            </>
          </Tab.Panel>
          <Tab.Panel>
            <WaitlistPeopleTab />
          </Tab.Panel>
          <Tab.Panel>
            <WaitlistServiceTab filter={filter} setFilter={setFilter} />
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};
