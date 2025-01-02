import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            width={512}
            height={512}
            enableBackground="new 0 0 512 512"
            {...props}
        >
            <Path
                d="M497 0c-14.7 0-26.8 4.499-36.7 8.699-16.8 6.899-31.8 6.899-48.6 0C401.8 4.499 390.7 0 376 0s-25.8 4.499-35.7 8.699c-16.8 6.899-31.8 6.899-48.6 0C281.8 4.499 270.7 0 256 0s-25.8 4.499-35.7 8.699c-16.8 6.899-31.8 6.899-48.6 0C161.8 4.499 150.7 0 136 0s-25.8 4.499-35.7 8.699c-16.8 6.899-31.8 6.899-48.6 0C41.8 4.499 29.7 0 15 0 6.599 0 0 6.599 0 15v482c0 8.399 6.599 15 15 15h482c8.401 0 15-6.601 15-15V15c0-8.401-6.599-15-15-15z"
                fill="#9bfcff"
            />
            <Path
                d="M512 15v482c0 8.399-6.599 15-15 15H256V0c14.7 0 25.8 4.499 35.7 8.699 16.8 6.899 31.8 6.899 48.6 0C350.2 4.499 361.3 0 376 0s25.8 4.499 35.7 8.699c16.8 6.899 31.8 6.899 48.6 0C470.2 4.499 482.3 0 497 0c8.401 0 15 6.599 15 15zM106 422c-24.814 0-45-21.186-45-46s20.186-45 45-45 45 20.186 45 45-20.186 46-45 46z"
                fill="#76e2f8"
            />
            <Circle cx={106} cy={467} r={15} fill="#76e2f8" />
            <Path
                d="M406 391c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z"
                fill="#25d9f8"
            />
            <Circle cx={406} cy={437} r={15} fill="#25d9f8" />
            <Circle cx={406} cy={91} r={15} fill="#25d9f8" />
            <Circle cx={106} cy={121} r={15} fill="#76e2f8" />
            <Path
                d="M435.099 226c-.899 12.9-7.2 24.899-17.699 32.699 0 0-98.401 72.301-101.4 72.301H196c-2.999 0-101.4-72.301-101.4-72.301-10.499-7.8-16.8-19.799-17.699-32.699-.901-13.2 3.6-25.8 12.9-35.101l65.7-65.4c1.199-1.5 2.999-2.699 4.799-3.3 1.8-.899 3.6-1.199 5.7-1.199h23.699l55.801 25.499h20.999L322.301 121H346c2.1 0 3.9.3 5.7 1.199 1.8.601 3.6 1.8 4.799 3.3l65.7 65.4c9.3 9.301 13.801 21.901 12.9 35.101z"
                fill="#fdbf00"
            />
            <Path
                d="M435.099 226c-.899 12.9-7.2 24.899-17.699 32.699 0 0-98.401 72.301-101.4 72.301h-60V146.499h10.499L322.301 121H346c2.1 0 3.9.3 5.7 1.199 1.8.601 3.6 1.8 4.799 3.3l65.7 65.4c9.3 9.301 13.801 21.901 12.9 35.101z"
                fill="#ff9100"
            />
            <Path
                d="M322.301 121L266.5 176.499C263.8 179.5 259.9 181 256 181s-7.8-1.5-10.499-4.501L189.699 121h132.602z"
                fill="#7c8388"
            />
            <Path
                d="M256 0c-32.999 0-60 26.999-60 60 0 32.999 27.001 61 60 61s60-28.001 60-61c0-33.001-27.001-60-60-60z"
                fill="#ffcebf"
            />
            <Path
                d="M256 121V0c32.999 0 60 26.999 60 60 0 32.999-27.001 61-60 61z"
                fill="#ffb99c"
            />
            <Path
                d="M316 482v-30l-30-30-30 30-30 17.812L256 482c0 16.567 13.431 30 30 30s30-13.433 30-30z"
                fill="#575f64"
            />
            <Path
                d="M256 482v-30l-25.313-30L196 452v30c0 16.567 13.431 30 30 30s30-13.433 30-30z"
                fill="#7c8388"
            />
            <Path
                d="M316 331L316 452 196 452 196 331 256 301z"
                fill="#fdbf00"
            />
            <Path d="M256 301L316 331 316 452 256 452z" fill="#ff9100" />
            <Path
                d="M322.301 121L266.5 176.499C263.8 179.5 259.9 181 256 181v-60h66.301z"
                fill="#575f64"
            />
            <Path
                d="M210.985 277c-3.135 0-6.284-.981-8.979-3.003l-28.652-21.489c-6.636-4.966-7.983-14.37-3.003-20.991 4.966-6.636 14.385-7.954 20.991-3.003l28.652 21.489c6.636 4.966 7.983 14.37 3.003 20.991-2.944 3.941-7.441 6.006-12.012 6.006z"
                fill="#ff9100"
            />
            <Path
                d="M301.015 277c-4.57 0-9.067-2.065-12.012-6.006-4.98-6.621-3.633-16.025 3.003-20.991l28.652-21.489c6.606-4.98 16.025-3.662 20.991 3.003 4.98 6.621 3.633 16.025-3.003 20.991l-28.652 21.489a14.909 14.909 0 01-8.979 3.003z"
                fill="#ff641a"
            />
            <Path
                d="M226 271v-75c0-8.286-6.716-15-15-15s-15 6.714-15 15v75l18.281 30L226 271z"
                fill="#ff9100"
            />
            <Path
                d="M316 271v-75c0-8.286-6.716-15-15-15s-15 6.714-15 15v75l18.281 30L316 271z"
                fill="#ff641a"
            />
            <Path d="M196 271H316V331H196z" fill="#7c8388" />
            <Path d="M256 271H316V331H256z" fill="#575f64" />
        </Svg>
    );
}

export default SvgComponent;