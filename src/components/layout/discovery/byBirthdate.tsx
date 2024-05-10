import React, { useEffect } from "react";
import { useState } from "react";

import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";
import { Page, Icon, DatePicker } from "zmp-ui";
import Footer from "../footer/footer";
import { useQueryByBirthDayLazyQuery } from "../../../generated/graphql";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface MyComponentProps {
  // Add any props you need here
}

const belowSearchBtnSVG = (
  <svg
    width="324"
    height="27"
    viewBox="0 0 324 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M148.798 13.9456H0.321899C0.143497 13.9456 0 13.8021 0 13.6237C0 13.4453 0.143497 13.3018 0.321899 13.3018H148.798C148.977 13.3018 149.12 13.4453 149.12 13.6237C149.12 13.8021 148.977 13.9456 148.798 13.9456Z"
      fill="#9F7C34"
    />
    <path
      d="M323.678 13.9456H174.864C174.686 13.9456 174.542 13.8021 174.542 13.6237C174.542 13.4453 174.686 13.3018 174.864 13.3018H323.678C323.857 13.3018 324 13.4453 324 13.6237C324 13.8021 323.857 13.9456 323.678 13.9456Z"
      fill="#9F7C34"
    />
    <path
      d="M37.9942 24.3111C37.8624 24.3111 37.7421 24.2297 37.6917 24.1056C37.6374 23.9737 37.5948 23.8108 37.556 23.6091C37.4745 23.1786 37.1565 22.8335 36.7454 22.7288C36.6252 22.6977 36.505 22.6628 36.3964 22.6202C36.2645 22.5697 36.1831 22.4379 36.1947 22.2944C36.2063 22.1548 36.3072 22.0345 36.4429 22.0035L36.6834 21.9492C37.1294 21.8523 37.4668 21.5071 37.5482 21.0611C37.587 20.8439 37.6336 20.6694 37.6878 20.5298C37.7383 20.4057 37.8546 20.3242 37.9865 20.3242C38.1183 20.3242 38.2386 20.4057 38.2851 20.5298C38.3394 20.6694 38.3859 20.8478 38.4247 21.0611C38.5062 21.5032 38.8397 21.8523 39.2857 21.9453L39.53 21.9996C39.6658 22.0307 39.7705 22.1509 39.7782 22.2905C39.7899 22.4301 39.7046 22.562 39.5766 22.6163C39.468 22.6589 39.3516 22.6939 39.2275 22.7249C38.8164 22.8296 38.4984 23.1747 38.417 23.6052C38.3782 23.803 38.3355 23.9698 38.2812 24.1017C38.2308 24.2258 38.1145 24.3072 37.9787 24.3072L37.9942 24.3111ZM37.428 22.3293C37.6607 22.4805 37.8546 22.69 37.9942 22.9382C38.1338 22.6939 38.3278 22.4844 38.5605 22.3293C38.3239 22.1742 38.13 21.9686 37.9942 21.7204C37.8585 21.9647 37.6646 22.1742 37.428 22.3293Z"
      fill="#9F7C34"
    />
    <path
      d="M9.65184 21.2788C9.51998 21.2788 9.39975 21.1974 9.35321 21.0733C9.29892 20.9414 9.25626 20.7785 9.21748 20.5769C9.13603 20.1464 8.81801 19.8012 8.40691 19.6965C8.28668 19.6655 8.17034 19.6306 8.05786 19.5879C7.926 19.5375 7.84456 19.4056 7.85232 19.2621C7.86395 19.1225 7.96478 19.0023 8.1044 18.9713L8.34486 18.917C8.79086 18.82 9.12827 18.4748 9.20972 18.0288C9.2485 17.8116 9.29504 17.6371 9.34934 17.4936C9.39975 17.3695 9.5161 17.2881 9.64796 17.2881C9.77982 17.2881 9.90005 17.3695 9.94659 17.4936C10.0009 17.6333 10.0474 17.8117 10.0862 18.025C10.1638 18.4671 10.5012 18.8161 10.9472 18.9092L11.1915 18.9635C11.3273 18.9945 11.432 19.1148 11.4397 19.2544C11.4514 19.394 11.366 19.5258 11.2381 19.5801C11.1295 19.6228 11.0131 19.6577 10.889 19.6887C10.4779 19.7935 10.1599 20.1386 10.0785 20.5691C10.0397 20.7708 9.99701 20.9337 9.94271 21.0655C9.8923 21.1896 9.77595 21.2711 9.64408 21.2711L9.65184 21.2788ZM9.08561 19.3009C9.31831 19.4561 9.51222 19.6616 9.65184 19.9098C9.79146 19.6655 9.98537 19.4561 10.2181 19.3009C9.98149 19.1458 9.78758 18.9402 9.65184 18.692C9.5161 18.9364 9.32218 19.1458 9.08561 19.3009Z"
      fill="#9F7C34"
    />
    <path
      d="M51.2892 23.801C51.1573 23.801 51.0371 23.7195 50.9906 23.5954C50.913 23.3976 50.8432 23.1378 50.785 22.8314C50.6415 22.0596 50.0714 21.443 49.3345 21.2568C49.1406 21.2103 48.9622 21.1521 48.7993 21.0862C48.6675 21.0358 48.586 20.9039 48.5938 20.7604C48.6054 20.6208 48.7062 20.5006 48.842 20.4695C48.842 20.4695 48.9971 20.4346 49.2298 20.3842C50.0249 20.2136 50.6337 19.5892 50.7734 18.7941C50.8315 18.4606 50.9052 18.1852 50.9906 17.9719C51.041 17.8478 51.1573 17.7664 51.2892 17.7664C51.421 17.7664 51.5413 17.8478 51.5878 17.9719C51.6731 18.1852 51.7429 18.4606 51.805 18.7902C51.9485 19.5814 52.5535 20.2058 53.3447 20.3803C53.5813 20.4307 53.7403 20.4695 53.7403 20.4695C53.876 20.5006 53.9768 20.6208 53.9885 20.7604C54.0001 20.9 53.9148 21.0319 53.7829 21.0823C53.62 21.1482 53.4416 21.2025 53.2477 21.2529C52.5108 21.4391 51.9407 22.0558 51.7972 22.8275C51.7391 23.1378 51.6692 23.3938 51.5917 23.5916C51.5413 23.7157 51.4249 23.7971 51.2931 23.7971L51.2892 23.801ZM49.9744 20.8031C50.5756 21.0939 51.0487 21.6136 51.2892 22.2497C51.5296 21.6136 52.0028 21.0939 52.6039 20.8031C51.995 20.5083 51.5219 19.9886 51.2892 19.3487C51.0565 19.9886 50.5833 20.5044 49.9744 20.8031Z"
      fill="#9F7C34"
    />
    <path
      d="M65.0036 20.7864H62.5331C62.3547 20.7864 62.2112 20.6429 62.2112 20.4645C62.2112 20.2861 62.3547 20.1426 62.5331 20.1426H65.0036C65.182 20.1426 65.3254 20.2861 65.3254 20.4645C65.3254 20.6429 65.182 20.7864 65.0036 20.7864Z"
      fill="#9F7C34"
    />
    <path
      d="M68.5905 20.7864H66.12C65.9416 20.7864 65.7981 20.6429 65.7981 20.4645C65.7981 20.2861 65.9416 20.1426 66.12 20.1426H68.5905C68.7689 20.1426 68.9124 20.2861 68.9124 20.4645C68.9124 20.6429 68.7689 20.7864 68.5905 20.7864Z"
      fill="#9F7C34"
    />
    <path
      d="M65.5621 20.054C65.3837 20.054 65.2402 19.9105 65.2402 19.7321V17.4362C65.2402 17.2578 65.3837 17.1143 65.5621 17.1143C65.7405 17.1143 65.884 17.2578 65.884 17.4362V19.7321C65.884 19.9105 65.7405 20.054 65.5621 20.054Z"
      fill="#9F7C34"
    />
    <path
      d="M65.5621 23.8165C65.3837 23.8165 65.2402 23.673 65.2402 23.4946V21.1986C65.2402 21.0202 65.3837 20.8767 65.5621 20.8767C65.7405 20.8767 65.884 21.0202 65.884 21.1986V23.4946C65.884 23.673 65.7405 23.8165 65.5621 23.8165Z"
      fill="#9F7C34"
    />
    <path
      d="M65.5617 22.277C65.3833 22.277 65.2398 22.1335 65.2398 21.9551C65.2398 21.014 64.8378 20.5434 64.0337 20.5434C63.8553 20.5434 63.7118 20.3999 63.7118 20.2215C63.7118 20.0431 63.8553 19.8996 64.0337 19.8996C64.8378 19.8996 65.2398 19.4291 65.2398 18.4879C65.2398 18.3095 65.3833 18.166 65.5617 18.166C65.7401 18.166 65.8836 18.3095 65.8836 18.4879C65.8836 19.4291 66.2857 19.8996 67.0898 19.8996C67.2682 19.8996 67.4117 20.0431 67.4117 20.2215C67.4117 20.3999 67.2682 20.5434 67.0898 20.5434C66.2857 20.5434 65.8836 21.014 65.8836 21.9551C65.8836 22.1335 65.7401 22.277 65.5617 22.277ZM65.5423 20.2215C65.5423 20.2215 65.554 20.2331 65.5617 20.2409C65.5695 20.2331 65.5734 20.2254 65.5811 20.2215C65.5734 20.2137 65.5695 20.2099 65.5617 20.2021C65.554 20.2099 65.5501 20.2176 65.5423 20.2215Z"
      fill="#9F7C34"
    />
    <path
      d="M23.9933 26.395C23.8381 26.395 23.7063 26.2864 23.6752 26.1352L23.0198 22.8968L19.89 23.9478C19.7426 23.9982 19.5836 23.9362 19.5061 23.8043C19.4285 23.6725 19.4557 23.5018 19.572 23.401L22.0463 21.2136L19.572 19.0263C19.4557 18.9254 19.4285 18.7548 19.5061 18.6229C19.5836 18.4911 19.7426 18.429 19.89 18.4794L23.0198 19.5305L23.6752 16.2921C23.7063 16.1408 23.8381 16.0322 23.9933 16.0322C24.1484 16.0322 24.2802 16.1408 24.3113 16.2921L24.9667 19.5305L28.0965 18.4794C28.24 18.429 28.4029 18.4911 28.4804 18.6229C28.558 18.7548 28.5309 18.9254 28.4145 19.0263L25.9402 21.2136L28.4145 23.401C28.5309 23.5018 28.558 23.6725 28.4804 23.8043C28.4029 23.9362 28.2439 23.9982 28.0965 23.9478L24.9667 22.8968L24.3113 26.1313C24.2802 26.2825 24.1484 26.3911 23.9933 26.3911V26.395ZM23.2641 22.156C23.3184 22.156 23.3766 22.1715 23.427 22.1987C23.5085 22.2452 23.5628 22.3228 23.5822 22.4159L23.9933 24.4481L24.4043 22.4159C24.4237 22.3267 24.478 22.2452 24.5595 22.1987C24.6409 22.1522 24.734 22.1405 24.8232 22.1716L26.7895 22.8309L25.2343 21.458C25.1645 21.3959 25.1257 21.3067 25.1257 21.2175C25.1257 21.1283 25.1645 21.0352 25.2343 20.977L26.7895 19.6041L24.8232 20.2634C24.734 20.2945 24.6409 20.2828 24.5595 20.2363C24.478 20.1897 24.4237 20.1122 24.4043 20.0191L23.9933 17.9869L23.5822 20.0191C23.5628 20.1083 23.5085 20.1897 23.427 20.2363C23.3456 20.2828 23.2486 20.2945 23.1633 20.2634L21.197 19.6041L22.7522 20.977C22.822 21.0391 22.8608 21.1283 22.8608 21.2175C22.8608 21.3067 22.822 21.3998 22.7522 21.458L21.197 22.8309L23.1633 22.1716C23.1982 22.1599 23.2331 22.156 23.268 22.156H23.2641Z"
      fill="#9F7C34"
    />
    <path
      d="M106.297 24.313C106.165 24.313 106.045 24.2316 105.998 24.1075C105.944 23.9756 105.901 23.8127 105.862 23.611C105.781 23.1806 105.463 22.8354 105.052 22.7307C104.932 22.6997 104.811 22.6647 104.703 22.6221C104.571 22.5717 104.489 22.4398 104.501 22.2963C104.513 22.1567 104.614 22.0365 104.753 22.0054L104.994 21.9512C105.44 21.8542 105.777 21.509 105.859 21.063C105.897 20.8458 105.944 20.6713 105.998 20.5278C106.049 20.4037 106.165 20.3223 106.297 20.3223C106.429 20.3223 106.549 20.4037 106.595 20.5278C106.65 20.6674 106.696 20.8458 106.735 21.0591C106.816 21.5013 107.15 21.8503 107.596 21.9434L107.84 21.9977C107.98 22.0287 108.081 22.1489 108.089 22.2886C108.1 22.4282 108.015 22.56 107.887 22.6143C107.778 22.657 107.658 22.6919 107.538 22.7229C107.127 22.8276 106.809 23.1728 106.727 23.6033C106.688 23.8011 106.646 23.9679 106.592 24.0997C106.541 24.2238 106.425 24.3053 106.293 24.3053L106.297 24.313ZM105.727 22.3312C105.959 22.4825 106.153 22.6919 106.293 22.9401C106.432 22.6958 106.626 22.4863 106.859 22.3312C106.623 22.1761 106.429 21.9705 106.293 21.7223C106.157 21.9667 105.963 22.1761 105.727 22.3312Z"
      fill="#9F7C34"
    />
    <path
      d="M77.9508 21.2789C77.8189 21.2789 77.6987 21.1974 77.6522 21.0733C77.6018 20.9415 77.5552 20.7786 77.5164 20.5769C77.435 20.1464 77.117 19.8013 76.7059 19.6965C76.5856 19.6655 76.4654 19.6306 76.3568 19.5879C76.225 19.5375 76.1435 19.4057 76.1552 19.2622C76.1668 19.1226 76.2676 19.0023 76.4034 18.9713L76.6438 18.917C77.0898 18.82 77.4272 18.4749 77.5087 18.0289C77.5475 17.8117 77.594 17.6371 77.6483 17.4975C77.6987 17.3734 77.8151 17.292 77.9469 17.292C78.0788 17.292 78.199 17.3734 78.2455 17.4975C78.2998 17.6371 78.3464 17.8155 78.3852 18.0289C78.4627 18.471 78.8001 18.82 79.2462 18.9131L79.4905 18.9674C79.6301 18.9984 79.7309 19.1187 79.7387 19.2583C79.7503 19.3979 79.665 19.5298 79.5331 19.5841C79.4245 19.6267 79.3082 19.6616 79.1841 19.6927C78.773 19.7974 78.455 20.1425 78.3735 20.573C78.3348 20.7747 78.2921 20.9376 78.2378 21.0694C78.1874 21.1935 78.071 21.275 77.9392 21.275L77.9508 21.2789ZM77.3846 19.3009C77.6173 19.4522 77.8112 19.6616 77.9508 19.9098C78.0904 19.6655 78.2843 19.4561 78.517 19.3009C78.2805 19.1458 78.0865 18.9364 77.9508 18.692C77.8151 18.9364 77.6211 19.1458 77.3846 19.3009Z"
      fill="#9F7C34"
    />
    <path
      d="M119.588 23.801C119.456 23.801 119.335 23.7195 119.289 23.5954C119.211 23.3976 119.142 23.1378 119.083 22.8314C118.94 22.0596 118.37 21.443 117.633 21.2568C117.439 21.2103 117.261 21.1521 117.098 21.0862C116.966 21.0358 116.884 20.9039 116.892 20.7604C116.904 20.6208 117.005 20.5006 117.14 20.4695C117.14 20.4695 117.295 20.4346 117.528 20.3842C118.323 20.2136 118.932 19.5892 119.072 18.7941C119.13 18.4606 119.204 18.1852 119.289 17.9719C119.339 17.8478 119.456 17.7664 119.588 17.7664C119.719 17.7664 119.84 17.8478 119.886 17.9719C119.971 18.1852 120.041 18.4606 120.103 18.7902C120.247 19.5814 120.848 20.2058 121.643 20.3803C121.88 20.4307 122.039 20.4695 122.039 20.4695C122.178 20.5006 122.275 20.6208 122.287 20.7604C122.298 20.9 122.213 21.0319 122.081 21.0823C121.918 21.1482 121.74 21.2025 121.546 21.2529C120.809 21.4391 120.239 22.0558 120.096 22.8275C120.037 23.1378 119.968 23.3938 119.89 23.5916C119.84 23.7157 119.723 23.7971 119.591 23.7971L119.588 23.801ZM118.273 20.8031C118.874 21.0939 119.347 21.6136 119.588 22.2497C119.828 21.6136 120.301 21.0939 120.902 20.8031C120.293 20.5083 119.82 19.9886 119.588 19.3487C119.355 19.9886 118.882 20.5044 118.273 20.8031Z"
      fill="#9F7C34"
    />
    <path
      d="M133.303 20.7864H130.833C130.654 20.7864 130.511 20.6429 130.511 20.4645C130.511 20.2861 130.654 20.1426 130.833 20.1426H133.303C133.482 20.1426 133.625 20.2861 133.625 20.4645C133.625 20.6429 133.482 20.7864 133.303 20.7864Z"
      fill="#9F7C34"
    />
    <path
      d="M136.89 20.7864H134.42C134.241 20.7864 134.098 20.6429 134.098 20.4645C134.098 20.2861 134.241 20.1426 134.42 20.1426H136.89C137.069 20.1426 137.212 20.2861 137.212 20.4645C137.212 20.6429 137.069 20.7864 136.89 20.7864Z"
      fill="#9F7C34"
    />
    <path
      d="M133.861 20.054C133.683 20.054 133.539 19.9105 133.539 19.7321V17.4362C133.539 17.2578 133.683 17.1143 133.861 17.1143C134.039 17.1143 134.183 17.2578 134.183 17.4362V19.7321C134.183 19.9105 134.039 20.054 133.861 20.054Z"
      fill="#9F7C34"
    />
    <path
      d="M133.861 23.8165C133.683 23.8165 133.539 23.673 133.539 23.4946V21.1986C133.539 21.0202 133.683 20.8767 133.861 20.8767C134.039 20.8767 134.183 21.0202 134.183 21.1986V23.4946C134.183 23.673 134.039 23.8165 133.861 23.8165Z"
      fill="#9F7C34"
    />
    <path
      d="M133.86 22.277C133.682 22.277 133.538 22.1335 133.538 21.9551C133.538 21.014 133.136 20.5434 132.332 20.5434C132.154 20.5434 132.01 20.3999 132.01 20.2215C132.01 20.0431 132.154 19.8996 132.332 19.8996C133.136 19.8996 133.538 19.4291 133.538 18.4879C133.538 18.3095 133.682 18.166 133.86 18.166C134.039 18.166 134.182 18.3095 134.182 18.4879C134.182 19.4291 134.584 19.8996 135.388 19.8996C135.567 19.8996 135.71 20.0431 135.71 20.2215C135.71 20.3999 135.567 20.5434 135.388 20.5434C134.584 20.5434 134.182 21.014 134.182 21.9551C134.182 22.1335 134.039 22.277 133.86 22.277ZM133.841 20.2215C133.841 20.2215 133.853 20.2331 133.86 20.2409C133.868 20.2331 133.872 20.2254 133.88 20.2215C133.872 20.2137 133.868 20.2099 133.86 20.2021C133.853 20.2099 133.849 20.2176 133.841 20.2215Z"
      fill="#9F7C34"
    />
    <path
      d="M92.2929 26.395C92.1378 26.395 92.0059 26.2864 91.9749 26.1352L91.3195 22.8968L88.1897 23.9478C88.0423 23.9982 87.8833 23.9362 87.8058 23.8043C87.7282 23.6725 87.7553 23.5018 87.8717 23.401L90.346 21.2136L87.8717 19.0263C87.7553 18.9254 87.7282 18.7548 87.8058 18.6229C87.8833 18.4911 88.0423 18.429 88.1897 18.4794L91.3195 19.5305L91.9749 16.2921C92.0059 16.1408 92.1378 16.0322 92.2929 16.0322C92.4481 16.0322 92.5799 16.1408 92.611 16.2921L93.2664 19.5305L96.3962 18.4794C96.5435 18.429 96.7025 18.4911 96.7801 18.6229C96.8577 18.7548 96.8305 18.9254 96.7142 19.0263L94.2398 21.2136L96.7142 23.401C96.8305 23.5018 96.8577 23.6725 96.7801 23.8043C96.7025 23.9362 96.5435 23.9982 96.3962 23.9478L93.2664 22.8968L92.611 26.1313C92.5799 26.2825 92.4481 26.3911 92.2929 26.3911V26.395ZM91.5638 22.156C91.6181 22.156 91.6763 22.1715 91.7267 22.1987C91.8081 22.2452 91.8624 22.3228 91.8818 22.4159L92.2929 24.4481L92.704 22.4159C92.7234 22.3267 92.7777 22.2452 92.8592 22.1987C92.9406 22.1522 93.0376 22.1405 93.1229 22.1716L95.0892 22.8309L93.534 21.458C93.4642 21.3959 93.4254 21.3067 93.4254 21.2175C93.4254 21.1283 93.4642 21.0352 93.534 20.977L95.0892 19.6041L93.1229 20.2634C93.0337 20.2945 92.9367 20.2828 92.8592 20.2363C92.7777 20.1897 92.7234 20.1122 92.704 20.0191L92.2929 17.9869L91.8818 20.0191C91.8624 20.1083 91.8081 20.1897 91.7267 20.2363C91.6453 20.2828 91.5483 20.2945 91.463 20.2634L89.4967 19.6041L91.0519 20.977C91.1217 21.0391 91.1605 21.1283 91.1605 21.2175C91.1605 21.3067 91.1217 21.3998 91.0519 21.458L89.4967 22.8309L91.463 22.1716C91.4979 22.1599 91.5328 22.156 91.5677 22.156H91.5638Z"
      fill="#9F7C34"
    />
    <path
      d="M285.667 24.2684C285.535 24.2684 285.415 24.187 285.365 24.0629C285.314 23.931 285.268 23.7681 285.229 23.5664C285.148 23.1359 284.83 22.7908 284.419 22.6861C284.298 22.655 284.182 22.6201 284.069 22.5775C283.938 22.527 283.856 22.3952 283.864 22.2517C283.876 22.1121 283.976 21.9918 284.112 21.9608L284.356 21.9065C284.799 21.8096 285.136 21.4644 285.217 21.0223C285.256 20.8051 285.303 20.6306 285.357 20.4909C285.404 20.3668 285.524 20.2854 285.656 20.2854C285.788 20.2854 285.908 20.3668 285.954 20.4909C286.009 20.6306 286.055 20.8051 286.094 21.0261C286.175 21.4683 286.513 21.8173 286.955 21.9143L287.195 21.9686C287.335 21.9996 287.436 22.1198 287.444 22.2594C287.455 22.3991 287.374 22.5309 287.242 22.5852C287.133 22.6279 287.017 22.6667 286.893 22.6938C286.482 22.7985 286.164 23.1437 286.082 23.5742C286.047 23.772 286.001 23.9387 285.947 24.0706C285.896 24.1947 285.78 24.2762 285.644 24.2762L285.667 24.2684ZM285.101 22.2866C285.334 22.4417 285.528 22.6473 285.667 22.8955C285.807 22.6511 286.001 22.4417 286.234 22.2866C285.997 22.1315 285.803 21.922 285.667 21.6777C285.532 21.922 285.338 22.1315 285.101 22.2866Z"
      fill="#9F7C34"
    />
    <path
      d="M314.013 21.2371C313.882 21.2371 313.761 21.1557 313.711 21.0316C313.66 20.8997 313.614 20.7329 313.575 20.5351C313.494 20.1047 313.176 19.7595 312.765 19.6548C312.644 19.6238 312.524 19.5888 312.416 19.5462C312.284 19.4958 312.202 19.3639 312.214 19.2204C312.226 19.0808 312.326 18.9606 312.462 18.9296L312.706 18.8752C313.149 18.7783 313.486 18.4331 313.567 17.9871C313.606 17.7699 313.653 17.5954 313.707 17.4558C313.757 17.3317 313.874 17.2502 314.006 17.2502C314.138 17.2502 314.258 17.3317 314.304 17.4558C314.359 17.5954 314.405 17.7738 314.444 17.9871C314.525 18.4292 314.863 18.7783 315.305 18.8752L315.545 18.9296C315.685 18.9606 315.786 19.0808 315.797 19.2204C315.809 19.36 315.724 19.4919 315.592 19.5462C315.483 19.5888 315.367 19.6238 315.243 19.6548C314.832 19.7595 314.514 20.1047 314.432 20.5351C314.393 20.7368 314.351 20.8997 314.297 21.0316C314.246 21.1557 314.13 21.2371 313.994 21.2371H314.013ZM313.447 19.2592C313.68 19.4143 313.874 19.6199 314.013 19.8681C314.153 19.6238 314.347 19.4143 314.58 19.2592C314.343 19.1041 314.149 18.8946 314.013 18.6503C313.878 18.8946 313.68 19.1041 313.447 19.2592Z"
      fill="#9F7C34"
    />
    <path
      d="M272.376 23.7573C272.244 23.7573 272.124 23.6759 272.074 23.5518C271.996 23.3501 271.926 23.1019 271.868 22.7877C271.725 22.0159 271.154 21.3993 270.418 21.2131C270.224 21.1666 270.045 21.1084 269.882 21.0425C269.75 20.9921 269.669 20.8602 269.677 20.7206C269.688 20.581 269.789 20.4608 269.925 20.4297C269.925 20.4297 270.084 20.3909 270.321 20.3405C271.112 20.1699 271.717 19.5455 271.86 18.7504C271.922 18.413 271.992 18.1454 272.077 17.9321C272.128 17.808 272.244 17.7266 272.38 17.7266C272.512 17.7266 272.632 17.808 272.682 17.9321C272.764 18.1454 272.838 18.4208 272.9 18.7543C273.043 19.5494 273.648 20.1738 274.443 20.3444C274.672 20.3948 274.831 20.4297 274.831 20.4297C274.971 20.4608 275.071 20.581 275.079 20.7206C275.091 20.8602 275.006 20.9921 274.874 21.0464C274.711 21.1123 274.532 21.1666 274.338 21.217C273.602 21.4032 273.031 22.0198 272.888 22.7916C272.83 23.098 272.76 23.3579 272.682 23.5556C272.632 23.6797 272.516 23.7612 272.38 23.7612L272.376 23.7573ZM271.061 20.7594C271.662 21.0503 272.136 21.5699 272.376 22.206C272.617 21.5699 273.09 21.0503 273.691 20.7594C273.082 20.4608 272.613 19.9449 272.376 19.305C272.143 19.9449 271.67 20.4608 271.061 20.7594Z"
      fill="#9F7C34"
    />
    <path
      d="M261.133 20.4976H258.662C258.484 20.4976 258.341 20.3541 258.341 20.1757C258.341 19.9973 258.484 19.8538 258.662 19.8538H261.133C261.311 19.8538 261.455 19.9973 261.455 20.1757C261.455 20.3541 261.311 20.4976 261.133 20.4976Z"
      fill="#9F7C34"
    />
    <path
      d="M257.542 20.4976H255.071C254.893 20.4976 254.75 20.3541 254.75 20.1757C254.75 19.9973 254.893 19.8538 255.071 19.8538H257.542C257.72 19.8538 257.864 19.9973 257.864 20.1757C257.864 20.3541 257.72 20.4976 257.542 20.4976Z"
      fill="#9F7C34"
    />
    <path
      d="M258.104 19.7642C257.926 19.7642 257.782 19.6207 257.782 19.4423V17.1464C257.782 16.968 257.926 16.8245 258.104 16.8245C258.283 16.8245 258.426 16.968 258.426 17.1464V19.4423C258.426 19.6207 258.283 19.7642 258.104 19.7642Z"
      fill="#9F7C34"
    />
    <path
      d="M258.104 23.5267C257.926 23.5267 257.782 23.3832 257.782 23.2048V20.9088C257.782 20.7304 257.926 20.5869 258.104 20.5869C258.283 20.5869 258.426 20.7304 258.426 20.9088V23.2048C258.426 23.3832 258.283 23.5267 258.104 23.5267Z"
      fill="#9F7C34"
    />
    <path
      d="M258.104 22.2333C257.926 22.2333 257.782 22.0898 257.782 21.9114C257.782 20.9703 257.38 20.4997 256.576 20.4997C256.402 20.4997 256.262 20.364 256.254 20.1933C256.254 20.1894 256.254 20.1817 256.254 20.1778C256.254 19.9994 256.398 19.8559 256.576 19.8559C257.38 19.8559 257.782 19.3854 257.782 18.4442C257.782 18.2658 257.926 18.1223 258.104 18.1223C258.283 18.1223 258.426 18.2658 258.426 18.4442C258.426 19.3854 258.828 19.8559 259.632 19.8559C259.811 19.8559 259.954 19.9994 259.954 20.1778C259.954 20.3562 259.811 20.4997 259.632 20.4997C258.828 20.4997 258.426 20.9703 258.426 21.9114C258.426 22.0859 258.29 22.2255 258.12 22.2333C258.116 22.2333 258.108 22.2333 258.104 22.2333ZM258.085 20.1778C258.085 20.1778 258.097 20.1894 258.104 20.1972C258.112 20.1894 258.116 20.1817 258.124 20.1778C258.116 20.17 258.112 20.1662 258.104 20.1584C258.097 20.1662 258.093 20.1739 258.085 20.1778Z"
      fill="#9F7C34"
    />
    <path
      d="M299.672 26.352C299.517 26.352 299.385 26.2435 299.354 26.0922L298.698 22.8538L295.569 23.9048C295.421 23.9553 295.262 23.8932 295.185 23.7613C295.107 23.6295 295.134 23.4588 295.251 23.358L297.725 21.1706L295.251 18.9833C295.134 18.8825 295.107 18.7118 295.185 18.58C295.262 18.4481 295.421 18.386 295.569 18.4365L298.698 19.4875L299.354 16.2491C299.385 16.0978 299.517 15.9893 299.672 15.9893C299.827 15.9893 299.959 16.0978 299.99 16.2491L300.645 19.4875L303.775 18.4365C303.922 18.386 304.081 18.4481 304.159 18.58C304.237 18.7118 304.209 18.8825 304.093 18.9833L301.619 21.1706L304.093 23.358C304.209 23.4588 304.237 23.6295 304.159 23.7613C304.081 23.8932 303.922 23.9553 303.775 23.9048L300.645 22.8538L299.99 26.0883C299.959 26.2396 299.827 26.3482 299.672 26.3482V26.352ZM298.943 22.1131C298.997 22.1131 299.055 22.1286 299.106 22.1557C299.187 22.2023 299.241 22.2798 299.261 22.3729L299.672 24.4052L300.083 22.3729C300.102 22.2837 300.157 22.2023 300.238 22.1557C300.32 22.1092 300.416 22.0976 300.502 22.1286L302.468 22.7879L300.913 21.415C300.843 21.3529 300.804 21.2637 300.804 21.1745C300.804 21.0853 300.843 20.9923 300.913 20.9341L302.468 19.5611L300.502 20.2205C300.413 20.2515 300.316 20.2399 300.238 20.1933C300.157 20.1468 300.102 20.0692 300.083 19.9761L299.672 17.9439L299.261 19.9761C299.241 20.0653 299.187 20.1468 299.106 20.1933C299.024 20.2399 298.927 20.2476 298.842 20.2205L296.876 19.5611L298.431 20.9341C298.501 20.9961 298.539 21.0853 298.539 21.1745C298.539 21.2637 298.501 21.3568 298.431 21.415L296.876 22.7879L298.842 22.1286C298.877 22.117 298.912 22.1131 298.943 22.1131Z"
      fill="#9F7C34"
    />
    <path
      d="M217.37 24.2684C217.238 24.2684 217.118 24.187 217.068 24.0629C217.017 23.931 216.971 23.7681 216.932 23.5664C216.851 23.1359 216.532 22.7908 216.121 22.6861C216.001 22.655 215.885 22.6201 215.772 22.5775C215.64 22.527 215.559 22.3952 215.567 22.2517C215.578 22.1121 215.679 21.9918 215.815 21.9608L216.059 21.9065C216.501 21.8096 216.839 21.4644 216.92 21.0223C216.959 20.8051 217.006 20.6306 217.06 20.4909C217.106 20.3668 217.227 20.2854 217.359 20.2854C217.49 20.2854 217.611 20.3668 217.657 20.4909C217.711 20.6306 217.758 20.8051 217.797 21.0261C217.878 21.4683 218.216 21.8173 218.658 21.9143L218.898 21.9686C219.038 21.9996 219.139 22.1198 219.146 22.2594C219.158 22.3991 219.077 22.5309 218.945 22.5852C218.836 22.6279 218.72 22.6667 218.596 22.6938C218.185 22.7985 217.867 23.1437 217.785 23.5742C217.75 23.772 217.704 23.9387 217.649 24.0706C217.599 24.1947 217.483 24.2762 217.347 24.2762L217.37 24.2684ZM216.804 22.2866C217.037 22.4417 217.231 22.6473 217.37 22.8955C217.51 22.6511 217.704 22.4417 217.936 22.2866C217.7 22.1315 217.506 21.922 217.37 21.6777C217.234 21.922 217.037 22.1315 216.804 22.2866Z"
      fill="#9F7C34"
    />
    <path
      d="M245.717 21.2359C245.585 21.2359 245.465 21.1545 245.414 21.0304C245.364 20.8985 245.317 20.7317 245.278 20.5339C245.197 20.1034 244.879 19.7583 244.468 19.6536C244.348 19.6225 244.227 19.5876 244.119 19.545C243.987 19.4945 243.905 19.3627 243.917 19.2192C243.929 19.0796 244.03 18.9594 244.165 18.9283L244.41 18.874C244.852 18.7771 245.189 18.4319 245.271 17.9859C245.309 17.7687 245.356 17.5942 245.41 17.4546C245.461 17.3305 245.577 17.249 245.709 17.249C245.841 17.249 245.961 17.3305 246.008 17.4546C246.062 17.5942 246.108 17.7726 246.147 17.9859C246.225 18.428 246.566 18.7771 247.008 18.874L247.249 18.9283C247.388 18.9594 247.489 19.0796 247.501 19.2192C247.512 19.3588 247.427 19.4907 247.295 19.545C247.187 19.5876 247.07 19.6225 246.946 19.6536C246.535 19.7583 246.217 20.1034 246.136 20.5339C246.097 20.7356 246.054 20.8985 246 21.0304C245.949 21.1545 245.833 21.2359 245.697 21.2359H245.717ZM245.15 19.258C245.383 19.4131 245.577 19.6187 245.717 19.8669C245.856 19.6225 246.05 19.4131 246.283 19.258C246.046 19.1028 245.852 18.8934 245.717 18.6491C245.581 18.8934 245.383 19.1028 245.15 19.258Z"
      fill="#9F7C34"
    />
    <path
      d="M204.079 23.7573C203.948 23.7573 203.827 23.6759 203.777 23.5518C203.699 23.3501 203.63 23.1019 203.571 22.7877C203.428 22.0159 202.858 21.3993 202.121 21.2131C201.927 21.1666 201.749 21.1084 201.586 21.0425C201.454 20.9921 201.372 20.8602 201.38 20.7206C201.392 20.581 201.493 20.4608 201.628 20.4297C201.628 20.4297 201.787 20.3909 202.024 20.3405C202.815 20.1699 203.42 19.5455 203.564 18.7504C203.626 18.413 203.695 18.1454 203.781 17.9321C203.831 17.808 203.948 17.7266 204.083 17.7266C204.215 17.7266 204.335 17.808 204.386 17.9321C204.471 18.1454 204.541 18.413 204.603 18.7543C204.747 19.5494 205.352 20.1738 206.147 20.3444C206.375 20.3948 206.534 20.4297 206.534 20.4297C206.674 20.4608 206.775 20.581 206.783 20.7206C206.794 20.8602 206.709 20.9921 206.577 21.0464C206.414 21.1123 206.236 21.1666 206.042 21.217C205.305 21.4032 204.735 22.0198 204.591 22.7916C204.533 23.098 204.463 23.3579 204.386 23.5556C204.335 23.6797 204.219 23.7612 204.083 23.7612L204.079 23.7573ZM202.765 20.7594C203.366 21.0503 203.839 21.5699 204.079 22.206C204.32 21.5699 204.793 21.0503 205.394 20.7594C204.785 20.4608 204.316 19.9449 204.079 19.305C203.847 19.9449 203.374 20.4608 202.765 20.7594Z"
      fill="#9F7C34"
    />
    <path
      d="M192.832 20.4976H190.362C190.183 20.4976 190.04 20.3541 190.04 20.1757C190.04 19.9973 190.183 19.8538 190.362 19.8538H192.832C193.011 19.8538 193.154 19.9973 193.154 20.1757C193.154 20.3541 193.011 20.4976 192.832 20.4976Z"
      fill="#9F7C34"
    />
    <path
      d="M189.245 20.4976H186.775C186.596 20.4976 186.453 20.3541 186.453 20.1757C186.453 19.9973 186.596 19.8538 186.775 19.8538H189.245C189.423 19.8538 189.567 19.9973 189.567 20.1757C189.567 20.3541 189.423 20.4976 189.245 20.4976Z"
      fill="#9F7C34"
    />
    <path
      d="M189.803 19.7642C189.625 19.7642 189.481 19.6207 189.481 19.4423V17.1464C189.481 16.968 189.625 16.8245 189.803 16.8245C189.982 16.8245 190.125 16.968 190.125 17.1464V19.4423C190.125 19.6207 189.982 19.7642 189.803 19.7642Z"
      fill="#9F7C34"
    />
    <path
      d="M189.803 23.5267C189.625 23.5267 189.481 23.3832 189.481 23.2048V20.9088C189.481 20.7304 189.625 20.5869 189.803 20.5869C189.982 20.5869 190.125 20.7304 190.125 20.9088V23.2048C190.125 23.3832 189.982 23.5267 189.803 23.5267Z"
      fill="#9F7C34"
    />
    <path
      d="M189.803 22.2333C189.625 22.2333 189.482 22.0898 189.482 21.9114C189.482 20.9703 189.079 20.4997 188.275 20.4997C188.101 20.4997 187.961 20.364 187.953 20.1933C187.953 20.1894 187.953 20.1817 187.953 20.1778C187.953 19.9994 188.097 19.8559 188.275 19.8559C189.079 19.8559 189.482 19.3854 189.482 18.4442C189.482 18.2658 189.625 18.1223 189.803 18.1223C189.982 18.1223 190.125 18.2658 190.125 18.4442C190.125 19.3854 190.527 19.8559 191.331 19.8559C191.51 19.8559 191.653 19.9994 191.653 20.1778C191.653 20.3562 191.51 20.4997 191.331 20.4997C190.527 20.4997 190.125 20.9703 190.125 21.9114C190.125 22.0859 189.99 22.2255 189.819 22.2333C189.815 22.2333 189.807 22.2333 189.803 22.2333ZM189.784 20.1778C189.784 20.1778 189.796 20.1894 189.803 20.1972C189.811 20.1894 189.815 20.1817 189.823 20.1778C189.815 20.17 189.811 20.1662 189.803 20.1584C189.796 20.1662 189.792 20.1739 189.784 20.1778Z"
      fill="#9F7C34"
    />
    <path
      d="M231.375 26.352C231.22 26.352 231.088 26.2435 231.057 26.0922L230.402 22.8538L227.272 23.9048C227.125 23.9553 226.966 23.8932 226.888 23.7613C226.811 23.6295 226.838 23.4588 226.954 23.358L229.428 21.1706L226.954 18.9833C226.838 18.8825 226.811 18.7118 226.888 18.58C226.966 18.4481 227.125 18.386 227.272 18.4365L230.402 19.4875L231.057 16.2491C231.088 16.0978 231.22 15.9893 231.375 15.9893C231.53 15.9893 231.662 16.0978 231.693 16.2491L232.349 19.4875L235.479 18.4365C235.622 18.386 235.785 18.4481 235.863 18.58C235.94 18.7118 235.913 18.8825 235.797 18.9833L233.322 21.1706L235.797 23.358C235.913 23.4588 235.94 23.6295 235.863 23.7613C235.785 23.8932 235.626 23.9553 235.479 23.9048L232.349 22.8538L231.693 26.0883C231.662 26.2396 231.53 26.3482 231.375 26.3482V26.352ZM230.646 22.1131C230.701 22.1131 230.759 22.1286 230.809 22.1557C230.891 22.2023 230.945 22.2798 230.964 22.3729L231.375 24.4052L231.786 22.3729C231.806 22.2837 231.86 22.2023 231.942 22.1557C232.023 22.1092 232.12 22.0976 232.205 22.1286L234.172 22.7879L232.616 21.415C232.547 21.3529 232.508 21.2637 232.508 21.1745C232.508 21.0853 232.547 20.9923 232.616 20.9341L234.172 19.5611L232.205 20.2205C232.116 20.2515 232.023 20.2399 231.942 20.1933C231.86 20.1468 231.806 20.0692 231.786 19.9761L231.375 17.9439L230.964 19.9761C230.945 20.0653 230.891 20.1468 230.809 20.1933C230.728 20.2399 230.631 20.2476 230.545 20.2205L228.579 19.5611L230.134 20.9341C230.204 20.9961 230.243 21.0853 230.243 21.1745C230.243 21.2637 230.204 21.3568 230.134 21.415L228.579 22.7879L230.545 22.1286C230.58 22.117 230.615 22.1131 230.646 22.1131Z"
      fill="#9F7C34"
    />
    <circle cx="161.525" cy="13.3021" r="12.8021" stroke="#9F7C34" />
    <circle cx="161.525" cy="19.0025" r="7.10117" stroke="#9F7C34" />
  </svg>
);

const bulletin = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_244_1103)">
      <path d="M12 4L18 22L12 18.466L6 22L12 4Z" fill="#E7DFFF" />
      <path
        d="M6.89649 19.3917L12 4.08114L17.1035 19.3917L12.2538 16.5351L12 16.3857L11.7462 16.5351L6.89649 19.3917Z"
        stroke="#9F7C34"
      />
      <path
        d="M12.3536 0.146447C12.1583 -0.0488155 11.8417 -0.0488155 11.6464 0.146447L8.46447 3.32843C8.2692 3.52369 8.2692 3.84027 8.46447 4.03553C8.65973 4.2308 8.97631 4.2308 9.17157 4.03553L12 1.20711L14.8284 4.03553C15.0237 4.2308 15.3403 4.2308 15.5355 4.03553C15.7308 3.84027 15.7308 3.52369 15.5355 3.32843L12.3536 0.146447ZM12.5 24L12.5 0.5H11.5L11.5 24H12.5Z"
        fill="#9F7C34"
      />
    </g>
    <defs>
      <clipPath id="clip0_244_1103">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(24) rotate(90)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ByBirthdate: React.FC<MyComponentProps> = () => {
  const [yourBirthDay, setYourBirthDay] = useState<Date | undefined>();
  const [showDataUI, setShowDataUI] = useState(0)
  const date = yourBirthDay ? new Date(yourBirthDay) : undefined;
  const formattedDate = date ? date.toISOString().split('T')[0] : ''

  const [getBirthday, { data: DataBirthdayRes }] = useQueryByBirthDayLazyQuery({
    fetchPolicy: "no-cache"
  });

  const handleBackButtonClick = () => {
    if (formattedDate) {
      getBirthday({ variables: { date: formattedDate } });
      setShowDataUI(1)
    }
  };

  // đoạn text này sẽ lấy dữ liệu từ api
  const userZodiacInformation =
    `${DataBirthdayRes?.getZodiacByBirthDay?.name_vi || ''} (${DataBirthdayRes?.getZodiacByBirthDay?.name_en || ''}): ${DataBirthdayRes?.getZodiacByBirthDay?.description || ''}- Điểm mạnh: ${DataBirthdayRes?.getZodiacByBirthDay?.strengths || ''} - Điểm yếu: ${DataBirthdayRes?.getZodiacByBirthDay?.weaknesses || ''}`;
  const zodiacInfo = userZodiacInformation
    .split("-")
    .map((lineByLine, index) => (
      <p
        key={index}
        className="text-[16px] font-normal leading-7 tracking-wide poppins"
      >
        {index > 0 && bulletin} {lineByLine}
      </p>
    ));


  return (
    <Page>
      <div className="w-full h-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {/* header */}
        {/* <div
          className="flex bg-[#f1e6d3] items-center h-9 "
          style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.3)" }}
        >
          <Icon className="px-2" icon="zi-chevron-left" size={32} />

          <p className="text-[16px] ml-2 font-semibold">
            Tra cứu tử vi qua ngày sinh
          </p>
        </div> */}

        {/* top */}
        <div className="mx-auto w-fit mt-3">
          <Top />
        </div>

        <div className="mx-auto w-fit -translate-y-24">
          <TextTop />
        </div>

        <div className="p-6 bg-[#f4eee3] -translate-y-24 ">
          <DatePicker
            mask
            maskClosable
            value={yourBirthDay}
            onChange={(value) => setYourBirthDay(value)}
            dateFormat="dd/mm/yyyy"
            title="Chọn ngày sinh"
          />
        </div>

        <div className="p-6 -translate-y-32 w-full">
          <button onClick={handleBackButtonClick} className="bg-[#9f7c35] w-full mx-auto h-9 text-[14px] text-white rounded-md">
            Tìm kiếm
          </button>
        </div>

        <div className="mx-auto w-fit -translate-y-[136px]">
          {belowSearchBtnSVG}
        </div>
        {
          showDataUI == 1 ? (
            <>
              {DataBirthdayRes ? (
                <>
                  <div className="w-fit mx-auto -translate-y-28">
                    <p className="svn-seiston text-[#9f7c35] text-[24px]">
                      {`Bạn thuộc Cung ${DataBirthdayRes?.getZodiacByBirthDay?.name_vi}` || ''}
                    </p>
                    <p className="uppercase text-[#240f62] font-semibold text-[30px] w-fit mx-auto my-4">
                      {DataBirthdayRes?.getZodiacByBirthDay?.name_en || ''}
                    </p>
                  </div>

                  <div className="max-w-[342px] mx-auto -translate-y-24">
                    {zodiacInfo}
                  </div></>
              ) : (
                <div className="max-w-[342px] mx-auto -translate-y-24">
                  <Skeleton count={11} />
                </div>)}
            </>
          ) : ''

        }

      </div>
      <Footer />
    </Page >
  );
};

export default ByBirthdate;
