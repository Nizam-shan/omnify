import React, { useState } from "react";

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

export const WaitlistPeopleTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Item[]>([]);

  // Handle input change and filter data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = data.filter((item) =>
      item.payer.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
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
            placeholder="Search payee or attendee name"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Display filtered data */}
      <div className="p-4 max-w-full">
        {filteredData.map((item, index) => (
          <div key={index} className="flex items-center justify-between  py-2">
            <div>
              <input type="checkbox" className="mr-2 bg-black" />
              {item.payer}{" "}
              <span
                className="inline-flex items-center px-5 py-2 ml-5 gap-2 text-sm font-medium text-center   focus:ring-4 focus:outline-none 
                     
                        bg-[#F8FAFC] text-black
                       
                     rounded-md"
              >
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
