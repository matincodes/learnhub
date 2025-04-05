import React from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "../../ui/dropdown-menu";

const DROPDOWNCONTENT = [
    { key: 1, name: "Front-end Development" },
    { key: 2, name: "Back-end Development" },
    { key: 3, name: "Programming/Coding" },
    { key: 4, name: "Foundational Skills" },
    { key: 5, name: "Digital Skills" },
];

const DropdownMenuDemo = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 flex flex-row justify-between items-center bg-white w-[280px] h-fit outline-none">
                    <span className="text-base font-san font-semibold">All courses</span>
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.25 11.875C14.25 11.875 10.7517 7.12501 9.49996 7.125C8.24826 7.12499 4.75 11.875 4.75 11.875"
                            stroke="#374957"
                            strokeWidth="1.55"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[280px] flex flex-col bg-white px-3 gap-3">
                {DROPDOWNCONTENT.map((course) => (
                    <DropdownMenuItem
                        key={course.key}
                        className={`p-2 w-full cursor-pointer outline-none ${course.key == 1 && 'bg-[#f0eded] '} font-sans rounded-lg`}
                    >
                        <span className="font-san text-base text-[#303031] font-semibold">{course.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


function Filter() {
    return (
        <div className="w-full flex flex-row gap-4">
            <h1 className="text-lg font-semibold">Filters:</h1>
            <DropdownMenuDemo />
        </div>
    );
}

export default Filter;
