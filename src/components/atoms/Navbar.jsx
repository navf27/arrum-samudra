import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#fafafa] h-14 rounded-full flex justify-evenly items-center drop-shadow-md fixed w-80 left-1/2 bottom-4 z-50 transform -translate-x-1/2">
      <Link to={"/stats"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          fill="none"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            fill="#0795ff"
            fillRule="evenodd"
            d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.246 2.246 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3c-.263 0-.515.045-.75.128V4.951c0-.665 0-1.238-.062-1.697-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062Zm8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75h4.5Zm-6 0V5c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484-.057-.057-.159-.128-.484-.172-.347-.046-.818-.048-1.546-.048-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484-.046.347-.048.818-.048 1.546v16.25h4.5Zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75h4.5Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link
        to={"/"}
        className="bg-[#0795ff] w-fit h-fit p-2 rounded-full grid place-items-center"
      >
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
              fill="#ffffff"
            ></path>
             
          </g>
        </svg>
      </Link>
      <Link to={"/news"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width={64}
          height={64}
          fill="#0795ff"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M20 22H4c-2.2 0-4-1.8-4-4V3c0-.6.4-1 1-1h19c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1s-1-.4-1-1V4H2v14c0 1.1.9 2 2 2h16c.6 0 1 .4 1 1s-.4 1-1 1z" />
          <path d="M12 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM20 22h-5c-.6 0-1-.4-1-1s.4-1 1-1h5c1.1 0 2-.9 2-2V6h-2c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1v13c0 2.2-1.8 4-4 4zM10 14H5c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1zm-4-2h3V8H6v4zM16 8h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1zM16 11h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
          <path d="M16 14h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1zM16 18H5c-.6 0-1-.4-1-1s.4-1 1-1h11c.6 0 1 .4 1 1s-.4 1-1 1z" />
        </svg>
      </Link>
    </div>
  );
};

export default Navbar;
