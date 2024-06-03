import React, { useState } from "react";
import { WaitlistDropdpwn } from "./waitlistDropDown";

interface Item {
  createdAt: string;
  payer: string;
  status: string;
  email: string;
  payerPhone: string;
  services: string;
  schedules: string;
  type: string;
}

type OptionItem = {
  name: string;
  value: string;
};

const data: Item[] = [
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Lead",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
    type: "payer",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "nizam",
    status: "Active",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
    type: "payer",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Inactive",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
    type: "payer",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Pending",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
    type: "attendee",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Pending",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
    type: "attendee",
  },
];

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

const service: OptionItem[] = [
  { name: "Show all service type", value: "all" },
  { name: "Class", value: "class" },
  { name: "Appointment", value: "appointment" },
  { name: "Facility", value: "facility" },
  { name: "Class Pack", value: "class_pack" },
];

const status: OptionItem[] = [
  { name: "Show all", value: "all" },
  { name: "Public", value: "pblic" },
  { name: "Disabled", value: "disabled" },
  { name: "Draft", value: "draft" },
];

export const WaitlistServiceTab: React.FC<Props> = ({ filter, setFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  // Handle input change and filter data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = data.filter((item) =>
      item.payer.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setFilteredData([]); // Clear filtered data when switching search mode
    setSearchTerm(""); // Clear search term when switching search mode
  };

  const handleDropDownService = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setFilter((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleDropDownStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setFilter((prev) => ({
      ...prev,
      status: value,
    }));
  };

  return (
    <div>
      <div className="flex min-w-full p-4">
        <div className="flex items-center mb-4 min-w-[50%]">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={!isChecked}
            onChange={handleCheckboxChange}
            className="text-black rounded-lg  focus:bg-black  "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Search by name
          </label>
        </div>
        <div className="flex items-center mb-4 min-w-[50%]">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="text-black rounded-lg  focus:bg-black  "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Search by tags
          </label>
        </div>
      </div>
      {!isChecked && (
        <div className="p-4 max-w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-100 border dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-100"
              placeholder="Search service name"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {/* Display filtered data */}
      <div className="p-4 max-w-full">
        {filteredData.length > 0 && (
          <p className="text-black">
            {" "}
            Showing {filteredData?.length} results matching '{searchTerm}'
          </p>
        )}
        {filteredData.map((item, index) => (
          <div key={index} className="flex items-center justify-between  py-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-black rounded-lg  focus:bg-black mr-3 "
              />
              {item.payer}{" "}
            </div>
            <div className="flex items-center space-x-4">
              <span
                className="inline-flex items-center px-5 py-2 ml-5 gap-2 text-sm font-medium text-center   focus:ring-4 focus:outline-none 
                     
                        bg-[#F8FAFC] text-black
                       
                     rounded-md"
              >
                {item.type}
              </span>
              <span
                className={`inline-flex items-center px-5 py-2.5 gap-2 text-sm font-medium text-center   focus:ring-4 focus:outline-none bg-[#F8FAFC] ${
                  item?.status === "Lead"
                    ? " text-[#3B82F6]"
                    : item?.status === "Active"
                    ? " text-[#15803D]"
                    : " text-[#334155]"
                } rounded-md `}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {isChecked && (
        <div>
          <div className="p-3">
            <WaitlistDropdpwn
              options={service}
              title={"Service type"}
              handleDropDown={handleDropDownService}
            />
          </div>
          <div className="p-3">
            <WaitlistDropdpwn
              options={status}
              title={"Status"}
              handleDropDown={handleDropDownStatus}
            />
          </div>
        </div>
      )}
    </div>
  );
};
