import React from 'react'

interface numProp {
  num: string | number
  unit: string
  flip: boolean
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="mt-4 flex flex-col items-center px-2">
      <div className=" relative mt-4 flex h-32 w-32 flex-col items-center justify-center rounded-lg  bg-transparent text-2xl md:text-4xl ">
        <div className="h-full w-full rounded-t-lg rounded-b-lg bg-[#343650]"></div>

        <div className="font-mono absolute z-10 font-redhat text-5xl font-bold text-rose-500 md:text-7xl ">
          {num}
        </div>

        <div className=" h-full w-full rounded-b-lg rounded-t-lg bg-[#2c2e3f]"></div>

        <div
          className={`z-5  absolute top-0 h-1/2  w-full rounded-t-lg ${
            flip ? 'animate-flip bg-rose-200' : 'bg-transparent'
          }`}
        ></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[60px] h-[12px] w-[12px] rounded-full bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[60px] h-[12px] w-[12px] rounded-full bg-[#1e1f29]"></div>
      </div>
      <p className="mt-3 text-lg font-semibold text-rose-200  md:text-2xl ">
        {unit}
      </p>
    </div>
  )
}
