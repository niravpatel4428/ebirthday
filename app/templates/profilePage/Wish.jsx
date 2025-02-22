// import user from "@/public/img/user.svg";
const Wish = () => {
  return (
    <div className="relative border border-[#E2E8F0] rounded-[15px] p-[20px_20px_32px]">
      <div className="flex justify-between gap-5 mb-9">
        <div className="flex flex-col gap-2 w-full max-w-[859px]">
          <p className="text-[#1E293B] text-sm font-onest font-bold">
            Birthday celebrant
          </p>
          <input
            type="text"
            placeholder="Enter the name of the person who celebrates birthday"
            className="border border-[#E2E8F0] rounded-[10px] p-[18px_25px] outline-none font-onest text-[#64748] text-sm font-normal"
          />
        </div>
        <p className="text-black text-sm font-normal font-onest">Make Active</p>
        <div className="relative inline-block w-12 h-7">
          <input
            // checked
            id="switch-component"
            type="checkbox"
            className="peer appearance-none w-12 h-7 bg-slate rounded-full checked:bg-[#4188F9] cursor-pointer transition-colors duration-300"
          />
          <label
            htmlFor="switch-component"
            className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
          ></label>
        </div>
      </div>
      <div className="">
        <p className="text-[#64748B] font-onest text-base font-bold uppercase">Updates</p>
        <div className="flex flex-row gap-2"></div>
      </div>
    </div>
  );
};

export default Wish;
