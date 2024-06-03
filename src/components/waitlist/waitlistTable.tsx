"use client";
import React, { useState } from "react";
import { CreatedAtIcon } from "../icons/createdIcon";
import { PayerIcon } from "../icons/payerIcon";
import { StatusIcon } from "../icons/statusIcon";
import { WaitlistDialog } from "./waitlistdailog";

interface Item {
  createdAt: string;
  payer: string;
  status: string;
  email: string;
  payerPhone: string;
  services: string;
  schedules: string;
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
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Active",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "nizam",
    status: "Inactive",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Pending",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "shan",
    status: "Pending",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "omnify",
    status: "Lead",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "mick",
    status: "Active",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "enrick",
    status: "Inactive",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John",
    status: "Pending",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
  {
    createdAt: "2023-05-01T10:00:00Z",
    payer: "John Doe",
    status: "Pending",
    email: "john.doe@example.com",
    payerPhone: "+1234567890",
    services: "Service A",
    schedules: "2023-05-01 10:00 AM",
  },
];

export const WaitListTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5); // Number of items per page
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Array to hold selected item indices
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<Item[]>(data);

  const [filter, setFilter] = useState({
    startdate: "",
    enddate: "",
    orders: "",
    service: "",
    status: "",
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems: Item[] = filteredData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    setSelectedItems([]); // Reset selected items when paginating
  };

  // Toggle selection of an item
  const toggleSelection = (index: number): void => {
    const selectedIndex = selectedItems.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    }
  };

  // Check if an item is selected
  const isSelected = (index: number): boolean => {
    return selectedItems.indexOf(index) !== -1;
  };

  const [searchTerm, setSearchTerm] = useState("");

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
    <>
      <div className="relative shadow-md sm:rounded-lg">
        {/* filter and search */}
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white p-3">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-[#334155] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md cursor-pointer text-sm px-3 py-1.5 bg-[#F1F5F9]"
              type="button"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              onClick={() => setIsModelOpen(!isModelOpen)}
            >
              <span className="sr-only">Action button</span>
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
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
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  className="text-[#334155]"
                />
              </svg>
              Add Filter
            </button>
            {/*  dialog box */}

            <WaitlistDialog
              open={isModelOpen}
              setIsModelOpen={setIsModelOpen}
              filter={filter}
              setFilter={setFilter}
            />

            {/*  */}
          </div>

          <div className="flex items-center gap-3 text-center justify-center ">
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 ps-10 text-sm text-gray-900  rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-100 border-none  shadow-md dark:bg-white  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-100 "
                placeholder="Search for client"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
            <div
              onClick={() => window.location.reload()}
              className="cursor-pointer"
            >
              <svg
                className="w-5 h-6 text-[#334155] dark:text-[#334155]"
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
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                />
              </svg>
            </div>
            <div>
              <svg
                className="w-5 h-6 text-[#334155] dark:text-[#334155]"
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
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* END */}
        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
            <thead className="text-xs text-[#64748B] uppercase bg-[#EBEEF0] dark:bg-[#EBEEF0] dark:text-[#64748B]">
              <tr>
                <th scope="col" className="p-4">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-black border-gray-300 rounded focus:ring-offset-0"
                    checked={selectedItems.length === currentItems.length}
                    onChange={() => {
                      if (selectedItems.length === currentItems.length) {
                        setSelectedItems([]);
                      } else {
                        const indices = currentItems.map((_, idx) => idx);
                        setSelectedItems(indices);
                      }
                    }}
                  />
                </th>
                <th scope="col" className="p-4">
                  <div className="flex align-middle gap-2">
                    <CreatedAtIcon /> Created At
                  </div>
                </th>
                <th scope="col" className="p-4">
                  <div className="flex align-middle gap-2">
                    <PayerIcon /> Payer
                  </div>
                </th>
                <th scope="col" className="p-4">
                  # Email
                </th>
                <th scope="col" className="p-4">
                  <div className="flex align-middle gap-2">
                    <StatusIcon /> Status
                  </div>
                </th>
                <th scope="col" className="p-4">
                  # Payer Phone
                </th>
                <th scope="col" className="p-4">
                  # Services
                </th>
                <th scope="col" className="p-4">
                  # Schedules
                </th>
              </tr>
            </thead>
            <tbody className="overflow-x-auto">
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-white dark:border-[#EBEEF0] hover:bg-gray-50 "
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-black border-gray-300 rounded focus:ring-offset-0"
                      checked={isSelected(index)}
                      onChange={() => toggleSelection(index)}
                    />
                  </td>
                  <td className="px-6 py-4 text-[#374151] whitespace-nowrap">
                    {item.createdAt}
                  </td>
                  <td className="px-6 py-4 text-[#374151] whitespace-nowrap">
                    {item.payer}
                  </td>
                  <td className="px-6 py-4 text-[#374151] whitespace-nowrap">
                    {item.email}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap    `}>
                    {/* <button className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-start text-white  rounded-lg  focus:ring-4 focus:outline-none   ${item?.status=== 'Lead' ? "bg-[#E2E8F0]  text-[#3B82F6]" : item?.status === "Active" ? "bg-[#15803D]" :"bg-[#334155]" } rounded-full inline-flex items-center justify-center w-2 h-2 ms-0 text-xs font-semibold text-blue-800 bg-blue-200 `}>
                                     <span className=''>
                                        {item.status}
                                    </span>
                                 </button> */}

                    <button
                      type="button"
                      className={`inline-flex items-center px-5 py-2.5 gap-2 text-sm font-medium text-center   focus:ring-4 focus:outline-none ${
                        item?.status === "Lead"
                          ? "bg-[#E2E8F0] text-[#3B82F6]"
                          : item?.status === "Active"
                          ? "bg-[#E2E8F0] text-[#15803D]"
                          : "bg-[#F1F5F9] text-[#334155]"
                      } rounded-full `}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-2 h-2 ms-2 text-xs font-semibold  bg-blue-200 rounded-full ${
                          item?.status === "Lead"
                            ? "text-[#3B82F6] bg-[#3B82F6]"
                            : item?.status === "Active"
                            ? "text-[#15803D] bg-[#15803D]"
                            : "text-[#334155] bg-[#334155]"
                        }`}
                      ></span>
                      {item.status}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-[#374151] whitespace-nowrap">
                    {item.payerPhone}
                  </td>
                  <td className="px-6 py-4 text-[#374151] whitespace-nowrap">
                    {item.services}
                  </td>
                  <td className="px-6 py-4 text-[#374151] whitespace-nowrap">
                    {item.schedules}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex items-center flex-wrap md:flex-row justify-between pt-4 p:3"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto p-3">
            Displaying
            <span className="font-semibold text-gray-900 dark:text-black px-5 ">
              {indexOfFirstItem + 1}-
              {indexOfLastItem > filteredData.length
                ? filteredData.length
                : indexOfLastItem}
            </span>{" "}
            out of{" "}
            <span className="font-semibold text-gray-900 dark:text-black px-5">
              {filteredData.length}
            </span>
          </span>
          <ul className="inline-flex space-x-5 p-5">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 gap-3 flex rounded-md text-sm font-medium leading-5 text-gray-600 bg-white hover:text-gray-900 focus:outline-none focus:text-gray-900 ${
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <span>
                  <svg
                    className="w-2  h-6 text-[#334155] dark:text-[#334155]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                </span>
                <span>Previous</span>
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(filteredData.length / itemsPerPage) },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 rounded-md text-sm font-medium leading-5 text-gray-600 bg-white hover:text-gray-900 focus:outline-none focus:text-gray-900 ${
                      currentPage === index + 1
                        ? "text-blue-600 bg-blue-50"
                        : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
                }
                className={`px-3 py-1 rounded-md text-sm font-medium leading-5 text-gray-600 bg-white hover:text-gray-900 focus:outline-none focus:text-gray-900 flex gap-3 ${
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <span>Next</span>
                <span>
                  <svg
                    className="w-2 h-6 text-[#334155] dark:text-[#334155]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
