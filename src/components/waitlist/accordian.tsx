export const Accordian = ({}) => {
  return (
    <>
      <div>
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-medium bg-white text-gray-600  rounded-lg shadow-md   gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>Location Name</span>
              <svg
                className="w-4 h-4 text-gray-400"
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
                  d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="p-3"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-1 border-0 rounded-sm shadow-md border-gray-200 dark:border-gray-700 dark:bg-[#F1F5F9]">
              <p className="mb-2 text-gray-500 dark:text-black text-lg font-light">
                <span className="font-semibold text-xl text-black">
                  {" "}
                  08 : 30 AM
                </span>
                {"            "}Tue 20 Jan
              </p>
              <p className="text-gray-500 dark:text-gray-400 flex gap-2 font-medium">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00004 12.4167C9.99158 12.4167 12.4167 9.99158 12.4167 7.00004C12.4167 4.0085 9.99158 1.58337 7.00004 1.58337C4.0085 1.58337 1.58337 4.0085 1.58337 7.00004C1.58337 9.99158 4.0085 12.4167 7.00004 12.4167Z"
                    stroke="#64748B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.58337 7H12.4167"
                    stroke="#64748B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.00004 1.58337C8.3549 3.06665 9.12487 4.99156 9.16671 7.00004C9.12487 9.00852 8.3549 10.9334 7.00004 12.4167C5.64518 10.9334 4.87522 9.00852 4.83337 7.00004C4.87522 4.99156 5.64518 3.06665 7.00004 1.58337Z"
                    stroke="#64748B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                UTC : +5 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
