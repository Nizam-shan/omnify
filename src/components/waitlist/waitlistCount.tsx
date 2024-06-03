import React from "react";

type ListItem = {
  name: string;
  value: number;
};

type WaitlistCountProps = {
  listData: ListItem[];
};

const  WaitlistCount: React.FC<WaitlistCountProps> = ({listData}) => {

    return (
        <>
            {listData.map((item,index)=>(
                <div
          key={index}
          className="flex flex-col sm:flex-row items-center border-2 rounded-lg p-1 hover:border-[#64748B] "
          role="region"
          aria-labelledby={`waitlist-${index}`}
          tabIndex={0}
        >
          <span
            id={`waitlist-${index}`}
            className="block px-3.5 py-2 text-[#334155] font-medium  whitespace-break-spaces"
          >
            {item?.name}
          </span>
          <p className="text-[#64748B]">{item?.value}</p>
        </div>
            ))}
        </>
    )
}

export default WaitlistCount