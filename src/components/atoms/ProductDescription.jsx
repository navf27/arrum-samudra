import React from "react";

const ProductDescription = ({ data }) => {
  return (
    <div className="h-[400px] mt-4">
      <div
        className={`bg-[#0795ff] ${data?.name.length > 20 ? "h-24" : "h-20"}`}
      >
        <div className="flex items-center pt-3 px-4 text-white ">
          <h3
            className={`text-lg font-bold ${
              data?.name.length > 20 ? "max-w-48" : null
            }`}
          >
            {data?.name}
          </h3>
          <p className="mx-2">|</p>
          <p className="text-sm">{data?.category}</p>
        </div>
      </div>
      <div
        className={`relative z-10 ${
          data?.name.length > 20 ? "-top-5" : "-top-7"
        } bg-gradient-to-b from-white from-90% to-[#fafafa] rounded-t-3xl p-6 h-full`}
      >
        <div>
          <h2 className="text-xl font-extrabold">
            {data?.category === "Craft"
              ? `Mulai dari Rp ${data?.price.toLocaleString("id-ID")}`
              : data?.price === 0
              ? "Rp -"
              : `Rp ${data?.price.toLocaleString("id-ID")}`}
          </h2>
        </div>

        <div>
          <div className="flex gap-1 items-center mt-1">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.719 19.7519L16.0785 14.6279C15.8908 13.1266 14.6146 12 13.1017 12H12H10.8983C9.38538 12 8.10917 13.1266 7.92151 14.6279L7.28101 19.7519C7.1318 20.9456 8.06257 22 9.26556 22H12H14.7344C15.9374 22 16.8682 20.9456 16.719 19.7519Z"
                  stroke="#f7cd3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  cx="12"
                  cy="5"
                  r="3"
                  stroke="#f7cd3c"
                  strokeWidth="2"
                ></circle>
                <circle
                  cx="4"
                  cy="9"
                  r="2"
                  stroke="#f7cd3c"
                  strokeWidth="2"
                ></circle>
                <circle
                  cx="20"
                  cy="9"
                  r="2"
                  stroke="#f7cd3c"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M4 14H3.69425C2.71658 14 1.8822 14.7068 1.72147 15.6712L1.38813 17.6712C1.18496 18.8903 2.12504 20 3.36092 20H7"
                  stroke="#f7cd3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 14H20.3057C21.2834 14 22.1178 14.7068 22.2785 15.6712L22.6119 17.6712C22.815 18.8903 21.8751 20 20.6392 20C19.4775 20 18.0952 20 17 20"
                  stroke="#f7cd3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                 
              </g>
            </svg>
            <p className="text-sm opacity-70 ">{data?.team}</p>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width={64}
              height={64}
              fill="#f7cd3c"
              stroke="#f7cd3c"
              viewBox="0 0 496 496"
              className="h-3 w-3"
            >
              <path d="M96 384h64c8.824 0 16-7.176 16-16v-32H80v32c0 8.824 7.176 16 16 16zm0-32h64l.008 16H96v-16zM208 272h16v16h-16zM144 272h48v16h-48z" />
              <path d="M358.528 240c.896-2.512 1.472-5.184 1.472-8V80h16V0H120v80h16v152c0 2.816.576 5.488 1.472 8H0v80h16v152c0 13.232 10.768 24 24 24h176c13.232 0 24-10.768 24-24V320h16v152c0 13.232 10.768 24 24 24h176c13.232 0 24-10.768 24-24V320h16v-80H358.528zM136 64V16h224v48H136zm88 408c0 4.416-3.592 8-8 8H40c-4.408 0-8-3.584-8-8V320h192v152zm16-168H16v-48h224v48zm0-64h-80c-4.408 0-8-3.584-8-8V80h192v152c0 4.416-3.592 8-8 8h-96zm224 232c0 4.416-3.592 8-8 8H280c-4.408 0-8-3.584-8-8V320h192v152zm16-168H256v-48h224v48z" />
              <path d="M336 384h64c8.824 0 16-7.176 16-16v-32h-96v32c0 8.824 7.176 16 16 16zm0-32h64l.008 16H336v-16zM448 272h16v16h-16zM384 272h48v16h-48zM296 128V96h-96v32c0 8.824 7.176 16 16 16h64c8.824 0 16-7.176 16-16zm-80-16h64l.008 16H216v-16zM328 32h16v16h-16zM264 32h48v16h-48z" />
            </svg>
            <p className="text-sm opacity-70">{data?.unit}</p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={64}
              fill="#f7cd3c"
              stroke="#f7cd3c"
              strokeWidth={0}
              viewBox="0 0 36 36"
              className="w-3 h-3"
            >
              <title>{"license-line"}</title>
              <path
                stroke="none"
                d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h15l.57-.7.93-1.14-.09-.16H4V8h28v8.56a8.41 8.41 0 0 1 2 1.81V8a2 2 0 0 0-2-2Z"
                className="clr-i-outline clr-i-outline-path-1"
              />
              <path
                stroke="none"
                d="M7 12h17v1.6H7z"
                className="clr-i-outline clr-i-outline-path-2"
              />
              <path
                stroke="none"
                d="M7 16h11v1.6H7z"
                className="clr-i-outline clr-i-outline-path-3"
              />
              <path
                stroke="none"
                d="M7 23h10v1.6H7z"
                className="clr-i-outline clr-i-outline-path-4"
              />
              <path
                stroke="none"
                d="M27.46 17.23a6.36 6.36 0 0 0-4.4 11l-1.94 2.37.9 3.61 3.66-4.46a6.26 6.26 0 0 0 3.55 0l3.66 4.46.9-3.61-1.94-2.37a6.36 6.36 0 0 0-4.4-11Zm0 10.68a4.31 4.31 0 1 1 4.37-4.31 4.35 4.35 0 0 1-4.37 4.31Z"
                className="clr-i-outline clr-i-outline-path-5"
              />
              <path fill="none" stroke="none" d="M0 0h36v36H0z" />
            </svg>

            {data?.cert.map((data, index) => (
              <p
                key={index}
                className="text-[10px] text-white bg-[#f7cd3c] w-fit rounded-full px-1"
              >
                {data}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-semibold">Deskripsi</h4>
          <p
            className="text-xs mt-1 text-justify leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: data?.desc
                ?.replace(/\n\n/g, "<br /><br />")
                ?.replace(
                  /<a /g,
                  "<a style='color: #0795ff; text-decoration: none; font-size: 14px;' "
                ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
