import React from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";

const ModalProductCategory = ({ isVisible, setState }) => {
  //   if (!isVisible) return;
  //   const [isVisible, setIsVisible] = useState(false);
  // Variants untuk animasi
  //   const containerVariants = {
  //     hidden: {
  //       scaleY: 0, // Ukuran Y dimulai dari 0 (komponen tersembunyi)
  //       originY: 1, // Titik asal animasi di bagian bawah (untuk memanjang ke atas)
  //       opacity: 0, // Sembunyikan konten
  //     },
  //     visible: {
  //       scaleY: 1, // Animasi memanjang ke atas
  //       originY: 1, // Titik asal tetap di bagian bawah
  //       opacity: 1, // Konten terlihat
  //       transition: {
  //         duration: 0.5, // Durasi animasi
  //         ease: "easeInOut",
  //       },
  //     },
  //   };
  const { activeCategory, setOtherSelected } = useMainContext();
  const location = useLocation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {
      x: "100%", // Elemen dimulai di luar layar ke kanan (arah kiri)
      opacity: 0, // Sembunyikan konten
    },
    visible: {
      x: 0, // Elemen bergerak ke posisi normal (ke kiri)
      opacity: 1, // Konten sepenuhnya terlihat
      transition: {
        duration: 0.5, // Durasi animasi
        ease: "easeInOut", // Transisi yang halus
      },
    },
    exit: {
      x: "100%", // Animasi keluar bergerak ke kanan (keluar layar)
      opacity: 0, // Sembunyikan konten
      transition: {
        duration: 0.5, // Durasi animasi keluar
        ease: "easeInOut", // Transisi yang halus
      },
    },
  };

  return (
    <div
      className={`absolute ${
        location.pathname.includes("/find")
          ? "right-16 bottom-[0px]"
          : "-right-1 bottom-[125px]"
      } ${isVisible ? "z-10" : "-z-10"}`}
    >
      {/* Komponen dengan animasi */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="bg-white shadow-lg p-4 rounded-2xl flex gap-4"
      >
        <div className="flex flex-col items-center w-fit">
          <button
            onClick={() => {
              navigate("/find/kopi");
              setOtherSelected(false);
            }}
            className={`w-12 h-12 ${
              activeCategory === "Kopi" ? "bg-red-600" : null
            } bg-[#0795ff] rounded-full grid place-content-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width={64}
              height={64}
              fill="#fff"
              viewBox="0 0 512.036 512.036"
              className="w-8 h-8 ps-1"
            >
              <path d="M273.108 314.855c0-60.655 49.766-110.003 110.933-110.003 54.426 0 93.926-35.627 93.926-84.71v-16.887c-10.103-5.897-21.811-9.335-34.33-9.335h-8.533c-98.739 0-179.063 80.333-179.063 179.072 0 17.263 6.477 33.007 17.067 45.056v-3.193z" />
              <path d="M495.037 117.339v2.799c0 58.982-46.686 101.786-111.002 101.786-51.755 0-93.858 41.694-93.858 92.928v17.246c10.086 5.871 21.768 9.293 34.253 9.293h8.533c98.748 0 179.072-80.333 179.072-179.072.001-17.229-6.451-32.939-16.998-44.98zM126.937 148.747a7.32 7.32 0 0 1-.7 1.263c-14.029 20.983-18.475 46.251-12.186 69.333 6.084 22.374 21.905 40.713 44.544 51.644l16.777 7.159c9.779-6.383 18.099-15.07 23.663-25.924l3.9-7.612c21.427-41.813 24.858-89.199 9.677-133.427C196.8 65.137 162.982 28.094 117.38 6.872c-16.282-7.578-34.15-8.525-50.355-4.07l2.85 1.434c57.301 26.666 81.937 88.839 57.062 144.511z" />
              <path d="M104.561 283.339a72.726 72.726 0 0 0 30.771 6.801c6.409 0 12.757-.862 18.876-2.475l-2.671-1.143c-27.52-13.286-46.558-35.49-53.956-62.694-7.518-27.622-2.389-57.711 14.054-82.679 20.489-46.763-.563-98.918-49.186-121.549L46.85 11.783c-9.924 6.391-18.312 15.223-23.945 26.214l-3.9 7.603C-2.422 87.413-5.853 134.807 9.328 179.036c15.813 46.037 49.64 83.089 95.233 104.303zM162.548 402.707c42.24 42.453 88.457 43.58 130.159 3.157.23-.222.469-.427.725-.623l11.597-8.96c-3.217-12.39-10.018-23.663-19.942-32.58l-6.306-5.76c-75.034-69.478-191.454-66.603-259.354 6.221C7.71 375.998 1.02 391.188.184 407.367l3.157-2.449c54.46-49.238 111.173-50.176 159.207-2.211z" />
              <path d="M150.466 414.757c-41.779-41.719-87.603-40.644-136.175 3.234l-12.083 9.387c3.208 12.322 9.916 23.552 19.712 32.503l6.349 5.794c.06.06.128.111.196.171 35.866 30.788 81.468 46.063 126.771 46.063 48.597 0 96.845-17.587 132.318-52.471 11.819-11.844 18.586-26.999 19.473-43.127l-2.79 2.15c-48.708 46.941-104.721 45.593-153.771-3.704z" />
            </svg>
          </button>
          <p className="text-xs mt-2 text-center">Kopi</p>
        </div>
        <div className="flex flex-col items-center w-fit">
          <button
            onClick={() => {
              navigate("/find/desa-wisata");
              setOtherSelected(true);
              setState(false);
            }}
            className={`w-12 h-12 ${
              activeCategory === "Desa Wisata" ? "bg-red-500" : "bg-[#0795ff]"
            } rounded-full grid place-content-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={64}
              fill="#fff"
              stroke="#fff"
              strokeWidth={0}
              viewBox="0 0 36 36"
              className="w-8 mt-2"
            >
              <g stroke="none">
                <path d="M20.912 18.228h2.091v2.091h-2.091zM28.14 18.228h2.091v2.091H28.14zM26.386 10.812v-2.09h-2.898V9.74l1.081 1.073z" />
                <path d="M33.552 22.112v-4.409h.665l.618-.611-7.322-7.322h-.909v1.269h-2.13L23.205 9.77h-3.516l-7.314 7.314.618.618h.979v4.409h-1.911C9.203 19.377 8.443 13.176 8.71 8.563l.047-.094h.023c1.25 0 2.358.606 3.048 1.54l.007.01c.52.703.833 1.588.833 2.545 0 .66-.148 1.285-.414 1.844l.011-.026a3.842 3.842 0 0 0 1.518-.78l-.006.005a4.254 4.254 0 0 0 1.461-3.213c0-.955-.314-1.836-.844-2.546l.008.011A3.71 3.71 0 0 0 10.28 6.48l.026-.007c.265-.165.57-.311.891-.422l.032-.01a3.891 3.891 0 0 1 1.363-.241c1.083 0 2.064.433 2.781 1.134l-.001-.001a3.516 3.516 0 0 0-.093-1.685l.007.025a3.786 3.786 0 0 0-4.991-2.293l.025-.009a5.067 5.067 0 0 0-.702.303l.029-.014a4.551 4.551 0 0 0-.301-.909l.012.029C8.478.407 6.46-.525 4.847.29a2.989 2.989 0 0 0-1.09.95l-.006.01A3.664 3.664 0 0 1 6.53 3.003l.009.016a5.048 5.048 0 0 0-1.179-.417l-.034-.006C2.846 2.063.486 3.41.063 5.611a3.74 3.74 0 0 0 .109 1.812l-.007-.026a4.553 4.553 0 0 1 4.543-1.402l-.032-.007c.409.086.771.21 1.11.373l-.029-.013a4.114 4.114 0 0 0-4.117 2.04l-.011.02a4.59 4.59 0 0 0-.643 2.357c0 1.568.777 2.954 1.968 3.794l.015.01a4.028 4.028 0 0 0 1.709.648l.021.002a4.665 4.665 0 0 1-.671-2.423c0-.873.237-1.691.651-2.392l-.012.022a4.204 4.204 0 0 1 2.927-2.048l.025-.004c-1.417 6.453-1.809 10.949-.64 13.736H3.573v1.88h32.148v-1.88h-2.169zm-7.95-4.307h7.166v4.307h-7.166zm-10.861-.854 4.95-4.95 4.95 4.95v5.161h-5.435v-3.884h-2.749v3.884h-1.722v-5.161z" />
              </g>
            </svg>
          </button>
          <p className="text-xs mt-2 text-center">
            Desa <br /> Wisata
          </p>
        </div>
        <div className="flex flex-col items-center w-fit">
          <button
            onClick={() => {
              navigate("/find/agrikultur");
              setOtherSelected(true);
              setState(false);
            }}
            className={`w-12 h-12 ${
              activeCategory === "Agrikultur" ? "bg-red-600" : "bg-[#0795ff]"
            } rounded-full grid place-content-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={64}
              fill="none"
              stroke="#000"
              strokeWidth={0}
              viewBox="0 0 48 48"
              className="w-8"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                stroke="none"
                d="M26.236 13.28C28.284 10.938 39.238 8 39.238 8s-1.862 11.716-3.5 13.59c-1.16 1.326-4.725.605-6.712.07-.873 1.382-1.61 2.912-1.996 4.508-.133.55-.723.823-1.318.61-.594-.213-.968-.832-.835-1.383.445-1.843 1.285-3.568 2.25-5.088-.88-1.704-2.42-5.28-.891-7.027ZM13.889 28H9v11h4.889v-1.906c.79-.028 1.615-.049 1.965-.035 1.676.066 2.928.457 4.194.851 1.18.369 2.374.74 3.935.857.392.029.774.067 1.144.103 1.337.132 2.521.249 3.5-.103 1.251-.45 8.397-3.865 9.29-4.764.894-.9.447-3.326-2.322-2.877-1.366.222-2.95.86-4.386 1.438-1.475.593-2.795 1.125-3.564 1.08-1.518-.09-5.538-.81-5.538-.81l4.615.055s.652.034 1.548-.594c.897-.628 1.698-2.427.358-2.427-1.34 0-2.77-.45-2.77-.45l-5.716-1.258s-1.965-.36-2.77 0c-.51.228-2.267.854-3.483 1.281V28ZM12.69 12.487s8.13 2.204 9.65 3.96c1.058 1.222.137 3.634-.522 4.99.793 1.307 1.489 2.731 1.94 4.216a1.008 1.008 0 0 1-.66 1.257.992.992 0 0 1-1.243-.665c-.367-1.21-.93-2.396-1.588-3.512-1.476.401-4.119.94-4.978-.053-1.217-1.405-2.599-10.193-2.599-10.193Zm15.853 7.486a1 1 0 0 1-.249-1.392c1.795-2.576 3.22-4.245 4.212-5.279.496-.517.883-.876 1.154-1.11a8.394 8.394 0 0 1 .408-.333l.029-.021.01-.007.004-.003.001-.001c.001 0 .002-.001.572.811l-.57-.812a1 1 0 0 1 1.154 1.633l-.007.005a6.289 6.289 0 0 0-.29.238c-.223.193-.566.509-1.021.984-.911.95-2.272 2.537-4.015 5.038a1 1 0 0 1-1.392.249Zm-7.828.107a1.012 1.012 0 0 1-.249 1.4.988.988 0 0 1-1.385-.25c-.93-1.349-1.65-2.196-2.124-2.696a7.983 7.983 0 0 0-.521-.508 2.997 2.997 0 0 0-.113-.095l-.017-.013a1.011 1.011 0 0 1-.233-1.395.989.989 0 0 1 1.386-.245l-.57.819.57-.819h.001l.002.002.003.002.008.006.02.015.058.045c.048.037.11.09.19.158.157.138.376.344.653.636.554.584 1.34 1.514 2.32 2.938Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p className="text-xs mt-2 text-center">Agrikultur</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalProductCategory;
