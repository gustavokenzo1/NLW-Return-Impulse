export default function NLWLogo({ mode }: { mode: "light" | "dark" }) {
  return (
    <svg
      width="220"
      height="60"
      viewBox="0 0 288 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70.2908 12.5654C72.0888 14.5751 73.0342 17.2247 72.9218 19.9388V34.7334H66.6168V21.2999C66.6796 19.7998 66.201 18.3282 65.271 17.1618C64.8387 16.6485 64.2972 16.242 63.6875 15.973C63.0777 15.704 62.4158 15.5795 61.7517 15.6091C57.8175 15.6091 55.8504 18.3975 55.8504 23.9743V34.7334H49.5117V10.445H55.8504V12.6406C56.8431 11.6593 58.0222 10.8942 59.3157 10.3921C60.6093 9.88988 61.99 9.66119 63.3734 9.71997C64.659 9.66845 65.9406 9.89552 67.1333 10.3861C68.3259 10.8767 69.4022 11.6195 70.2908 12.5654V12.5654Z"
        fill={mode === "light" ? "#fff" : "#333"}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M80.9688 0V34.7329H87.2873V0H80.9688Z"
        fill={mode === "light" ? "#fff" : "#333"}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M123.004 34.7328H117.755L112.588 20.4238L107.366 34.7328H102.077L93.2148 10.3965H99.9438L104.97 24.9518L110.105 10.3965H115.03L120.164 24.9996L125.144 10.3965H131.873L123.004 34.7328Z"
        fill={mode === "light" ? "#fff" : "#333"}
      ></path>
      <path
        d="M37.1282 35.3486L27.9028 41.6071L7.16406 30.3418L16.2549 24.1859L26.0456 29.5073C26.0456 27.3801 26.0456 22.2023 26.0456 17.5512L37.1147 10.0273C37.1147 14.6511 37.1147 26.1284 37.1282 35.3486Z"
        fill="#8257E5"
      ></path>
      <path
        d="M20.1869 21.5788L10.0935 16.1069C10.0935 18.2888 10.0935 23.6991 10.0935 28.4187C5.86766 31.2983 2.08598 33.8564 0 35.2585C0 30.5732 0 18.8428 0 9.57478L8.91589 3.52148L29.9641 14.9578L20.1869 21.5788Z"
        fill="#8257E5"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M190.974 25.6207V2.58398H196.6V11.0039H208.665V16.1954H196.6V25.6207C196.6 28.7944 198.208 30.0393 200.53 30.0393C202.851 30.0393 204.453 28.8423 204.453 25.6207V24.9914H210.085V25.6207C210.085 32.2075 206.202 35.3812 200.53 35.3812C194.857 35.3812 190.974 32.2075 190.974 25.6207ZM149.914 10.3746C143.818 10.3746 139.652 13.7877 139.652 20.9559L139.666 34.7519H145.291V20.9627C145.291 17.0914 147.182 15.7234 149.927 15.7234C152.673 15.7234 154.564 17.1119 154.564 20.9627V21.2021H160.149V21.0517C160.149 13.7877 156.01 10.3746 149.914 10.3746ZM174.798 10.3746C167.417 10.3746 162.215 15.6618 162.215 22.8779C162.215 30.094 167.417 35.3812 174.798 35.3812C180.33 35.3812 184.589 32.4469 186.339 27.9257H180.33C179.145 29.4647 177.302 30.1829 174.798 30.1829C171.494 30.1829 168.884 28.3567 168.13 24.8957H187.287V22.8779C187.287 15.6618 182.18 10.3746 174.798 10.3746ZM174.798 15.5387C177.874 15.5387 180.424 17.1529 181.326 20.3266H168.271C169.166 17.1734 171.723 15.5387 174.798 15.5387ZM213.677 11.0047V23.3575C213.677 31.3397 218.313 35.382 225.217 35.382C232.121 35.382 236.757 31.2918 236.757 23.3575V11.0047H231.132V23.3575C231.132 27.8787 228.763 30.0401 225.217 30.0401C221.671 30.0401 219.302 27.8787 219.302 23.3575V11.0047H213.677ZM241.394 20.9559C241.394 13.7877 245.559 10.3746 251.656 10.3746C257.752 10.3746 261.877 13.7945 261.877 21.0517V21.2021H256.292V20.9627C256.292 17.0982 254.401 15.7302 251.663 15.7302C248.924 15.7302 247.026 17.0982 247.026 20.9696V34.7519H241.401L241.394 20.9559ZM276.446 10.3746C269.535 10.3746 264.899 14.4649 264.899 22.3991L264.872 34.7519H270.504V22.3991C270.504 17.878 272.913 15.7166 276.459 15.7166C280.006 15.7166 282.368 17.878 282.368 22.3991V34.7518H282.362V38.5479C282.368 39.602 282.169 40.647 281.777 41.623C281.385 42.5989 280.808 43.4866 280.078 44.2352C279.347 44.9837 278.479 45.5784 277.522 45.9851C276.566 46.3918 275.539 46.6026 274.502 46.6053H255.9L260.088 42.3437L256.509 38.7049L247.828 47.5283V51.174L256.509 59.9974L260.088 56.3518L256.068 52.2687H274.482C278.064 52.2705 281.501 50.8262 284.036 48.2532C286.571 45.6803 287.997 42.1893 288.001 38.5479V34.7518H288V22.3991C288 14.417 283.357 10.3746 276.446 10.3746Z"
        fill="url(#paint0_linear_7098_16311)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_7098_16311"
          x1="143.952"
          y1="49.3479"
          x2="284.448"
          y2="49.3479"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8257E5"></stop>
          <stop offset="0.53" stop-color="#D72891"></stop>
          <stop offset="1" stop-color="#F1594B"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}