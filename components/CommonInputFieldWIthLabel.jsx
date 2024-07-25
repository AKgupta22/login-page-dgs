import Link from "next/link";
import React from "react";

const CommonInputFieldWIthLabel = ({
  label,
  placeholder,
  referLink = false,
  referLinkConfig = { url: "#", title: "" },
  endEndorsement = false,
  endEndorsementIcon = null,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold leading-4">
        {label}
        <span className="mr-1 text-red-600">*</span>
      </p>
      <div className="w-full relative">
        <input
          type="text"
          placeholder={placeholder}
          className="text-sm leading-4 font-normal text-[#A5A8AF] p-3 rounded-lg border border-solid border-[#DFE2E5] bg-inherit outline-none w-full"
        />
        {endEndorsement ? <i className="absolute right-[2%] top-[35%]">{endEndorsementIcon}</i> : null}
      </div>
      {referLink ? (
        <Link
          href={referLinkConfig.url}
          className="text-[#2C4E6C] text-xs leading-3 font-medium"
        >
          {referLinkConfig.title}
        </Link>
      ) : null}
    </div>
  );
};

export default CommonInputFieldWIthLabel;
