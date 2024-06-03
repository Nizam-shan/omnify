import React from "react";

type OptionItem = {
  name: string;
  value: string;
};

type WaitlistDropdownProps = {
  options: OptionItem[];
  title: string;
  handleDropDown: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const WaitlistDropdpwn: React.FC<WaitlistDropdownProps> = ({
  options,
  title,
  handleDropDown,
}) => {
  return (
    <>
      <div>
        <label
          htmlFor="large"
          className="block mb-2 text-base font-medium text-[#09090B]"
        >
          {title}
        </label>
        <select
          id="large"
          className="block w-full px-4 py-4 text-base text-[#09090B] rounded-lg bg-white dark:placeholder-[#09090B] border border-[#E4E4E7] dark:focus:ring-blue-500 shadow-sm"
          onChange={handleDropDown}
        >
          {/* <option value="all_time" selected>
            All Time
          </option> */}
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
