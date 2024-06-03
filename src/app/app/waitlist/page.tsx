import WaitlistCount from "@/components/waitlist/waitlistCount"
import { WaitListTable } from "@/components/waitlist/waitlistTable"

function Waitlist(){
    const listData = [
        {
            name:"All Waitlist",
            value:100

        },
          {
            name:"Newly Added",
            value:50

        },
          {
            name:"Leads",
            value:20

        },
    ]
    return (
        <>
        <div>
<div>
    <h1 className="text-2xl text-[#334155] font-medium p-3">Waitlist</h1>
</div>
        <div className="grid grid-cols-4  gap-2 p-3">
    <WaitlistCount listData={listData} />
        </div>
     <div>
        <WaitListTable />
     </div>
        </div>
        </>
    )
}

export default Waitlist