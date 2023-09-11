import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
const Trending = () => {
    const data = [
        {
            label: "Today",
            value: "today",

        },
        {
            label: "This Week",
            value: "week",

        }
    ];

    return (
        <div className='container mx-auto justify-start mt-5'>
            <h6 class="text-2xl text-gray-900 font-bold mt-2 leading-relaxed">
                Trending
            </h6>
            <Tabs className="text-slate-700  z-30 mb-0 flex-inline w-26"
                >
                <TabsHeader className='font-semibold bg-blue-500'>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
            </Tabs>

        </div>
    );
}

export default Trending;
