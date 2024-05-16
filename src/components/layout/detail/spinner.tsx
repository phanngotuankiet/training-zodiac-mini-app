import React, { useState } from "react";
import { List } from "zmp-ui";
import "./spinner.css";

const { Item } = List;
const ListZodiac = [
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 25 26"
          fill="none"
          className="rotate-[27deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6062 1.21484C1.6062 1.21484 13.7859 3.58059 6.6255 24.7248C6.6255 24.7248 12.0168 1.95194 23.312 7.4135"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "ARIES",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 34 34"
          fill="none"
          className="rotate-[10deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4691 28.3255C14.8366 32.2005 9.56454 33.2114 5.6895 30.5789C1.81446 27.9464 0.803585 22.6744 3.43608 18.7994C6.06858 14.9243 11.3406 13.9134 15.2156 16.5459C19.0907 19.1784 20.1016 24.4505 17.4691 28.3255Z"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.43701 1.74719C7.23413 2.74403 9.17165 3.71279 10.5686 5.25719C12.3517 7.22981 11.7059 9.05501 12.1552 11.4208C12.4991 13.253 13.3977 14.9448 14.7525 16.2295"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.1129 19.8593C30.5194 18.5606 28.9118 17.1074 26.9532 16.3844C24.4611 15.4577 23.001 16.7284 20.6422 17.1847C18.81 17.5427 16.9076 17.3251 15.2087 16.5458"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "TAURUS",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 33 30"
          fill="none"
          className="-rotate-[25deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.72241 11.3243L4.33385 17.874L8.44056 28.2004"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.5234 1.56006L27.1279 8.10971L31.2346 18.4361"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.01807 15.9304L26.6505 6.92371"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.81934 22.9637L29.4518 13.957"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "GEMINI",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 23 40"
          fill="none"
          className="-rotate-[55deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.78295 16.2721C5.83069 16.2721 2.62256 13.0639 2.62256 9.11168C2.62256 5.15942 5.83069 1.95129 9.78295 1.95129C11.222 1.95129 12.5629 2.37249 13.6861 3.10959C15.6447 4.38723 16.9434 6.59852 16.9434 9.11168C16.9434 13.0639 13.7352 16.2721 9.78295 16.2721Z"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.0081 21.3971C21.0081 21.3971 23.6828 6.18481 13.6863 3.10303"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8862 23.5374C16.8385 23.5374 20.0466 26.7455 20.0466 30.6977C20.0466 34.65 16.8385 37.8581 12.8862 37.8581C11.4471 37.8581 10.1063 37.437 8.98312 36.6999C7.02454 35.4222 5.72583 33.2109 5.72583 30.6977C5.72583 26.7455 8.93398 23.5374 12.8862 23.5374Z"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.668 18.4061C1.668 18.4061 -1.0066 33.6185 8.98988 36.7002"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "CANCER",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 40 31"
          fill="none"
          className="-rotate-90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2582 10.4136C8.27853 8.43392 8.27853 5.22578 10.2582 3.23912C12.2378 1.25948 15.4459 1.25948 17.4326 3.23912C19.4193 5.21876 19.4122 8.4269 17.4326 10.4136C15.453 12.4002 12.2448 12.3932 10.2582 10.4136Z"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.54885 4.03955C9.50673 4.16591 8.68538 5.83667 8.71346 6.77735C8.91002 13.3059 15.6352 12.7724 20.3526 13.5376C23.6029 14.0641 27.3656 15.2786 28.9661 18.4235C31.1213 22.6636 28.6432 27.5355 24.4172 29.2413C21.3003 30.4979 17.7833 29.5432 15.2982 27.4091C12.1532 24.6994 12.42 18.9781 10.2087 15.5734C8.34841 12.7093 3.08341 10.512 1.96021 16.5141"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "LEO",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 28 32"
          fill="none"
          className="-rotate-[125deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.2593 28.9153C26.2593 28.9153 20.6433 26.9778 17.021 9.00659"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.9393 25.7633C22.4198 26.6478 21.5985 27.7008 20.5595 27.9605C15.2454 29.3083 13.4132 13.7099 12.4795 10.5088"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.6079 27.883C18.0884 28.7675 17.267 29.8205 16.2281 30.0802C9.82585 31.7089 9.42571 17.367 8.66755 13.6605C8.23231 11.5404 7.64262 8.45865 5.03118 8.12169C3.87288 7.97427 2.67949 8.76753 3.17791 10.0311"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.2682 24.3521C7.71295 26.2405 6.11239 23.0323 5.55079 20.9544C4.63117 17.5216 5.15766 13.8642 6.13344 10.5157C6.8565 8.0376 8.46408 4.6329 6.23874 2.44266C4.66626 0.898264 1.55642 1.7547 1.60556 4.19766"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "VIRGO",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 35 21"
          fill="none"
          className="rotate-[210deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.9702 12.5233L23.9667 10.347C23.9667 10.347 26.2271 21.0385 15.8796 19.473"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.8396 5.54553L11.8431 7.72174C11.8431 7.72174 5.3496 16.5108 15.4163 19.3819"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.9347 6.67539L6.19238 1.08044"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "LIBRA",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 25 38"
          fill="none"
          className="rotate-[190deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6571 36.2659C11.6571 36.2659 9.58622 29.9198 23.2191 14.5039"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.2256 31.1618C11.0814 31.2952 9.58612 31.2741 8.64544 30.523C3.83674 26.676 16.557 14.4682 18.7964 11.4567"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.39607 28.7123C6.25181 28.8457 4.75656 28.8247 3.81588 28.0735C-1.98264 23.4473 7.17846 13.0928 9.97944 9.90576C11.58 8.08056 14.388 5.16025 12.4715 2.89279C10.541 0.611286 7.31885 2.80854 5.17775 5.93244"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.27248 2.42249L4.39111 7.2663L8.70842 4.26174"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "SCORPIO",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 31 19"
          fill="none"
          className="rotate-[120deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.59179 17.1596L1.91577 7.73877L29.4342 13.9796"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.9224 1.7998L1.91577 7.73872"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.6143 17.7076L23.8887 6.93896"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "SAGISTARIUS",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 34 28"
          fill="none"
          className="rotate-[120deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.46118 19.6139C8.01786 13.7663 18.5057 17.0025 25.8838 19.0664C23.9884 18.5329 13.8585 13.2468 11.0014 10.5932C9.73776 9.41388 7.5054 6.45144 8.81814 4.65432C10.538 2.30964 15.1502 5.595 16.9262 6.35316C19.5938 7.49742 22.4861 8.67678 25.4485 8.3328C27.6317 8.07306 30.6433 6.55674 29.9834 3.91722C29.492 1.9446 26.8876 0.54762 24.9922 1.30578C18.4215 3.95934 28.6567 11.6533 30.4397 13.7944C34.1954 18.3152 33.0793 25.3563 26.67 26.3602"
            stroke="#312ea1"
            stroke-width="1.92348"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "CAPRICORN",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="30"
          height="40"
          viewBox="0 0 37 35"
          fill="none"
          className="rotate-[80deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75684 23.8547C6.60064 22.6543 3.21699 16.3223 5.54061 13.416C7.52727 10.9309 9.7807 14.448 11.1426 15.7677C10.9741 15.7116 8.77683 10.5589 11.4093 9.06362C13.1714 8.06678 15.2984 11.0082 15.9794 12.3279C16.0706 11.4434 14.4911 7.90532 16.1549 6.05906C17.8607 4.16366 19.1945 6.15734 20.9074 6.76106C23.0274 7.50518 24.4806 6.48025 25.4142 4.77439C26.6076 2.58415 28.152 1.44691 30.8407 1.65751"
            stroke="#312ea1"
            stroke-width="1.81818"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.11597 31.9346C10.9598 30.7342 7.57613 24.4021 9.89975 21.4958C11.8864 19.0108 14.1398 22.5278 15.5017 23.8476C15.3332 23.7914 13.136 18.6387 15.7685 17.1434C17.5305 16.1466 19.6575 19.088 20.3385 20.4078C20.4297 19.5232 18.8502 15.9851 20.514 14.1389C22.2198 12.2435 23.5536 14.2372 25.2665 14.8409C27.3866 15.585 28.8397 14.5601 29.7734 12.8542C30.9668 10.664 32.5112 9.52675 35.1998 9.73735"
            stroke="#312ea1"
            stroke-width="1.81818"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "AQUARIUS",
    },
  },
  {
    a: {
      svg: (
        <svg
          width="25"
          height="35"
          viewBox="0 0 23 31"
          fill="none"
          className="rotate-[55deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.71216 5.49634C1.71216 5.49634 12.5791 16.0965 8.5005 29.6802"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5867 1.88037C14.5867 1.88037 10.824 16.5873 21.375 26.0643"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.31958 18.237L19.9149 13.5828"
            stroke="#312ea1"
            stroke-width="2.40084"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "PISCES",
    },
  },
];

const SpinnerRandom = ({ onDataClick, data }) => {
  const [currentIndex, setCurrentIndex] = useState(data);

  const sendDataToParent = (currentIndex) => {
    onDataClick(currentIndex);
  };

  const rotateRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ListZodiac.length);
    sendDataToParent(currentIndex + 1);
  };

  const rotateLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ListZodiac.length) % ListZodiac.length
    );
    sendDataToParent(currentIndex == 0 ? 11 : currentIndex - 1);
  };

  // Calculate the indexes of the visible items
  const visibleIndexes = [
    currentIndex,
    (currentIndex + 11) % ListZodiac.length,
    (currentIndex + 1) % ListZodiac.length,
  ];

  // Get the visible items based on the indexes
  const visibleItems = visibleIndexes.map((index) => ListZodiac[index]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="ml-3 cursor-pointer" onClick={rotateLeft}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.646447 21.6464C0.451184 21.8417 0.451184 22.1583 0.646447 22.3536L3.82843 25.5355C4.02369 25.7308 4.34027 25.7308 4.53553 25.5355C4.7308 25.3403 4.7308 25.0237 4.53553 24.8284L1.70711 22L4.53553 19.1716C4.7308 18.9763 4.7308 18.6597 4.53553 18.4645C4.34027 18.2692 4.02369 18.2692 3.82843 18.4645L0.646447 21.6464ZM29 21.5L1 21.5L1 22.5L29 22.5L29 21.5Z"
              fill="#9F7C34"
            />
            <circle cx="29.5" cy="22.5" r="13" stroke="#9F7C34" />
          </svg>
        </div>
        <div className="mr-3 cursor-pointer" onClick={rotateRight}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.3536 22.3536C43.5488 22.1583 43.5488 21.8417 43.3536 21.6464L40.1716 18.4645C39.9763 18.2692 39.6597 18.2692 39.4645 18.4645C39.2692 18.6597 39.2692 18.9763 39.4645 19.1716L42.2929 22L39.4645 24.8284C39.2692 25.0237 39.2692 25.3403 39.4645 25.5355C39.6597 25.7308 39.9763 25.7308 40.1716 25.5355L43.3536 22.3536ZM43 21.5L15 21.5L15 22.5L43 22.5L43 21.5Z"
              fill="#9F7C34"
            />
            <circle cx="15.5" cy="22.5" r="13" stroke="#9F7C34" />
          </svg>
        </div>
      </div>
      <div className="circle">
        {visibleItems.map((item, index) => (
          <div className={`item ${index === 0 ? "selected" : ""}`} key={index}>
            <div className={`icon icon-${index + 1}`}>{item.a.svg}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SpinnerRandom;
