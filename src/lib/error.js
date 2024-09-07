import React from "react";
import {
  BackArrowIcon,
  BigLeafIcon,
  BigTrunkIcon,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
  Hat1,
  Hat2,
  Leaf1,
  Leaf2,
  Rectangle1,
  Rectangle2,
  SmallLeafIcon,
  SmallTrunkIcon,
  Trunk1,
} from "./icons";

const Error = (props) => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 bg-gray-200">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          {props.error
            ? props.error
            : " Sorry, the page you are looking for could not be found."}
        </p>
        <a
          href="/"
          className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150"
          title="Return Home"
        >
          <BackArrowIcon className="h-5 w-5" />
          <span>Take Me Home</span>
        </a>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <svg
          className="w-full text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 1120.59226 777.91584"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>not found</title>
          <circle cx="212.59226" cy={103} r={64} fill="#ff6584" />
          <BigLeafIcon />
          <BigTrunkIcon />
          <SmallLeafIcon />
          <SmallTrunkIcon />
          <Ellipse1 />
          <Ellipse2 />
          <Ellipse3 />
          <Ellipse4 />
          <circle cx="97.08375" cy="566.26982" r={79} fill="#2f2e41" />
          <Rectangle1 />
          <Rectangle2 />
          <Ellipse5 />
          <Ellipse6 />
          <circle cx="99.31925" cy="546.29477" r={27} fill="#fff" />
          <circle cx="99.31925" cy="546.29477" r={9} fill="#3f3d56" />
          <Hat1 />
          <Leaf1 />
          <Trunk1 />
          <circle cx="712.48505" cy="565.41532" r={79} fill="#2f2e41" />
          <rect
            x="741.77716"
            y="691.82355"
            width={24}
            height={43}
            transform="translate(-215.99457 191.86399) rotate(-17.08345)"
            fill="#2f2e41"
          />
          <rect
            x="787.6593"
            y="677.72286"
            width={24}
            height={43}
            transform="matrix(0.95588, -0.29376, 0.29376, 0.95588, -209.82788, 204.72037)"
            fill="#2f2e41"
          />
          <ellipse
            cx="767.887"
            cy="732.00275"
            rx={20}
            ry="7.5"
            transform="translate(-220.8593 196.83312) rotate(-17.08345)"
            fill="#2f2e41"
          />
          <ellipse
            cx="813.47537"
            cy="716.94619"
            rx={20}
            ry="7.5"
            transform="translate(-214.42477 209.56103) rotate(-17.08345)"
            fill="#2f2e41"
          />
          <circle cx="708.52153" cy="545.71023" r={27} fill="#fff" />
          <circle cx="708.52153" cy="545.71023" r={9} fill="#3f3d56" />
          <Hat2 />
          <Leaf2 />
          <path
            d="M541.72029,721.77424l24.55253-34.30732-24.6139,38.07426-.0654,3.93872c-1.71785-.03682-3.41933-.1186-5.10033-.23313l2.6463-50.58165-.02047-.39266.045-.07361.24949-4.77718-24.67531-38.16836,24.753,34.58547.05731,1.01433,2-38.21741-21.12507-39.44039L541.80616,625.928l2.08182-79.23247.00819-.26994v.26177l-.34764,62.47962,21.031-24.76934-21.11693,30.15184-.55624,34.21735,19.63634-32.839-19.71812,37.87389-.31085,19.0228,28.50763-45.70631-28.614,52.34448Z"
            transform="translate(-39.70387 -61.04208)"
            fill="#3f3d56"
          />
          <path
            d="M875.29613,682.38411c0,55.07585-32.73985,74.3063-73.13,74.3063q-1.4035,0-2.80255-.0312c-1.87139-.04011-3.72494-.1292-5.55619-.254-36.45135-2.57979-64.77127-22.79937-64.77127-74.02113,0-53.00843,67.73872-119.89612,72.827-124.84633l.00892-.00889c.19608-.19159.29409-.28516.29409-.28516S875.29613,627.30827,875.29613,682.38411Z"
            transform="translate(-39.70387 -61.04208)"
            fill="currentColor"
          />
          <path
            d="M799.50168,748.26482l26.747-37.37367-26.81386,41.4773-.07125,4.29076c-1.87139-.04011-3.72494-.1292-5.55619-.254l2.88282-55.10258-.0223-.42775.049-.0802.27179-5.20415L770.108,654.01076l26.96539,37.67668.06244,1.105,2.17874-41.63324-23.0132-42.96551,23.29391,35.6583,2.26789-86.31419.00892-.294v.28516l-.37871,68.064,22.91079-26.98321-23.00435,32.84678-.606,37.27566L822.18523,632.958l-21.4805,41.259-.33863,20.723,31.05561-49.79149-31.17146,57.023Z"
            transform="translate(-39.70387 -61.04208)"
            fill="#3f3d56"
          />
          <ellipse
            cx="721.51694"
            cy="656.82212"
            rx="12.40027"
            ry="39.5"
            transform="translate(-220.83517 966.22323) rotate(-64.62574)"
            fill="#2f2e41"
          />
          <ellipse
            cx="112.51694"
            cy="651.82212"
            rx="12.40027"
            ry="39.5"
            transform="translate(-574.07936 452.71367) rotate(-68.15829)"
            fill="#2f2e41"
          />
        </svg>
      </div>
    </div>
  );
};

export default Error;
