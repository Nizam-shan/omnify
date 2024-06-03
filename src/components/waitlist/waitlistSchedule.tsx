import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { WaitlistDropdpwn } from "./waitlistDropDown";

type OptionItem = {
  name: string;
  value: string;
};

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

export const WaitlistScheduleTab: React.FC<Props> = ({ filter, setFilter }) => {
  const [startDate, setStartDate] = useState<Date | null>(
    filter.startdate ? new Date(filter.startdate) : null
  );

  const [endDate, setEndDate] = useState<Date | null>(
    filter.enddate ? new Date(filter.enddate) : null
  );

  const options: OptionItem[] = [
    { name: "All", value: "all" },
    { name: "Last 30 days", value: "30" },
    { name: "This month", value: "this_month" },
    { name: "Last month", value: "last_month" },
    { name: "This quarter", value: "this_quarter" },
  ];

  const handleDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setFilter((prev) => ({
      ...prev,
      orders: value,
    }));
  };

  return (
    <form className="p-3 max-w-full">
      <div>
        <WaitlistDropdpwn
          options={options}
          title={"Show orders for"}
          handleDropDown={handleDropDown}
        />
        <div className="mt-4 flex gap-2">
          <div>
            <label className="block mb-2 text-base font-medium text-[#09090B]">
              From
            </label>
            <div className="relative max-w-sm mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <DatePicker
                selected={
                  new Date(filter.startdate ? filter.startdate : new Date())
                }
                onChange={(date: Date | null) =>
                  setFilter((prev) => ({
                    ...prev,
                    startdate: date ? date.toISOString().split("T")["0"] : "",
                  }))
                }
                className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 bg-white"
                placeholderText="Pick a date"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-base font-medium text-[#09090B]">
              To
            </label>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <DatePicker
                selected={
                  new Date(filter.enddate ? filter.enddate : new Date())
                }
                onChange={(date: Date | null) =>
                  setFilter((prev) => ({
                    ...prev,
                    enddate: date ? date.toISOString().split("T")["0"] : "",
                  }))
                }
                className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 bg-white"
                placeholderText="Pick a date"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WaitlistScheduleTab;
