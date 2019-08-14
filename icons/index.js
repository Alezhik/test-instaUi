import React from 'react';

export const Home = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
	</svg>
);

export const WiFi = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C16.08,16.42 20.24,11.24 23.65,7C20.32,4.41 16.22,3 12,3Z" />
	</svg>
);

export const Vibrate = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M16,19H8V5H16M16.5,3H7.5A1.5,1.5 0 0,0 6,4.5V19.5A1.5,1.5 0 0,0 7.5,21H16.5A1.5,1.5 0 0,0 18,19.5V4.5A1.5,1.5 0 0,0 16.5,3M19,17H21V7H19M22,9V15H24V9M3,17H5V7H3M0,15H2V9H0V15Z" />
	</svg>
);

export const Battery = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z" />
	</svg>
);

export const Nettwork = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M1,21H21V1" />
	</svg>
);

export const Timer = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
	</svg>
);

export const Message = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M20,20H7A2,2 0 0,1 5,18V8.94L2.23,5.64C2.09,5.47 2,5.24 2,5A1,1 0 0,1 3,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M8.5,7A0.5,0.5 0 0,0 8,7.5V8.5A0.5,0.5 0 0,0 8.5,9H18.5A0.5,0.5 0 0,0 19,8.5V7.5A0.5,0.5 0 0,0 18.5,7H8.5M8.5,11A0.5,0.5 0 0,0 8,11.5V12.5A0.5,0.5 0 0,0 8.5,13H18.5A0.5,0.5 0 0,0 19,12.5V11.5A0.5,0.5 0 0,0 18.5,11H8.5M8.5,15A0.5,0.5 0 0,0 8,15.5V16.5A0.5,0.5 0 0,0 8.5,17H13.5A0.5,0.5 0 0,0 14,16.5V15.5A0.5,0.5 0 0,0 13.5,15H8.5Z" />
	</svg>
);

export const Maps = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M15.5,4.5C15.5,5.06 15.7,5.54 16.08,5.93C16.45,6.32 16.92,6.5 17.5,6.5C18.05,6.5 18.5,6.32 18.91,5.93C19.3,5.54 19.5,5.06 19.5,4.5C19.5,3.97 19.3,3.5 18.89,3.09C18.5,2.69 18,2.5 17.5,2.5C16.95,2.5 16.5,2.69 16.1,3.09C15.71,3.5 15.5,3.97 15.5,4.5M22,4.5C22,5.5 21.61,6.69 20.86,8.06C20.11,9.44 19.36,10.56 18.61,11.44L17.5,12.75C17.14,12.38 16.72,11.89 16.22,11.3C15.72,10.7 15.05,9.67 14.23,8.2C13.4,6.73 13,5.5 13,4.5C13,3.25 13.42,2.19 14.3,1.31C15.17,0.44 16.23,0 17.5,0C18.73,0 19.8,0.44 20.67,1.31C21.55,2.19 22,3.25 22,4.5M21,11.58V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H11.2C11.08,3.63 11,4.13 11,4.5C11,5.69 11.44,7.09 12.28,8.7C13.13,10.3 13.84,11.5 14.41,12.21C15,12.95 15.53,13.58 16.03,14.11L17.5,15.7L19,14.11C20.27,12.5 20.94,11.64 21,11.58M9,14.5V15.89H11.25C11,17 10.25,17.53 9,17.53C8.31,17.53 7.73,17.28 7.27,16.78C6.8,16.28 6.56,15.69 6.56,15C6.56,14.31 6.8,13.72 7.27,13.22C7.73,12.72 8.31,12.47 9,12.47C9.66,12.47 10.19,12.67 10.59,13.08L11.67,12.05C10.92,11.36 10.05,11 9.05,11H9C7.91,11 6.97,11.41 6.19,12.19C5.41,12.97 5,13.91 5,15C5,16.09 5.41,17.03 6.19,17.81C6.97,18.59 7.91,19 9,19C10.16,19 11.09,18.63 11.79,17.91C12.5,17.19 12.84,16.25 12.84,15.09C12.84,14.81 12.83,14.61 12.8,14.5H9Z" />
	</svg>
);

export const Android = ({size = 12, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M8,11.5A1.25,1.25 0 0,0 6.75,12.75A1.25,1.25 0 0,0 8,14A1.25,1.25 0 0,0 9.25,12.75A1.25,1.25 0 0,0 8,11.5M16,11.5A1.25,1.25 0 0,0 14.75,12.75A1.25,1.25 0 0,0 16,14A1.25,1.25 0 0,0 17.25,12.75A1.25,1.25 0 0,0 16,11.5M12,7C13.5,7 14.9,7.33 16.18,7.91L18.34,5.75C18.73,5.36 19.36,5.36 19.75,5.75C20.14,6.14 20.14,6.77 19.75,7.16L17.95,8.96C20.41,10.79 22,13.71 22,17H2C2,13.71 3.59,10.79 6.05,8.96L4.25,7.16C3.86,6.77 3.86,6.14 4.25,5.75C4.64,5.36 5.27,5.36 5.66,5.75L7.82,7.91C9.1,7.33 10.5,7 12,7Z" />
	</svg>
);

export const LeftChevron = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
	</svg>
);

export const LeftArrow = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
	</svg>
);

export const CircleSmall = ({ size = 12, className, color="#000000" }) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
	</svg>
);

export const DotsVertical = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
	</svg>
);

export const AccountCheck = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M11,4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4M11,6A2,2 0 0,0 9,8A2,2 0 0,0 11,10A2,2 0 0,0 13,8A2,2 0 0,0 11,6M11,13C11.68,13 12.5,13.09 13.41,13.26L11.74,14.93L11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H11.1L13,20H3V17C3,14.34 8.33,13 11,13Z" />
	</svg>
);

export const MenuDropdown = ({size = 24, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M7,10L12,15L17,10H7Z" />
	</svg>
);

export const DecagramCheck = ({size = 24, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
	</svg>
);

export const Grid = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
	</svg>
);

export const ImageIcon = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
	</svg>
);

export const Rectangle = ({size = 24, className, color="#000000"}) => (
	<svg
		width={size}
		height={size}
		className={className}
		viewBox="0 0 24 24"
	>
		<path fill={color} d="M4,6V19H20V6H4M18,17H6V8H18V17Z" />
	</svg>
);

export const VideoIcon = ({size = 24, className, color="#000000"}) => (
	<svg
		width={size}
		height={size}
		className={className}
		viewBox="0 0 24 24"
	>
		<path fill={color} d="M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z" />
	</svg>
);

export const ImagesIcon = ({size = 24, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" />
	</svg>
);


export const Search = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
	</svg>
);

export const Add = ({size = 24}) => (
	<svg width={size} height={size} viewBox="0 0 489.8 489.8" >
		<g>
			<path d="M438.2,0H51.6C23.1,0,0,23.2,0,51.6v386.6c0,28.5,23.2,51.6,51.6,51.6h386.6c28.5,0,51.6-23.2,51.6-51.6V51.6
				C489.8,23.2,466.6,0,438.2,0z M465.3,438.2c0,14.9-12.2,27.1-27.1,27.1H51.6c-14.9,0-27.1-12.2-27.1-27.1V51.6
				c0-14.9,12.2-27.1,27.1-27.1h386.6c14.9,0,27.1,12.2,27.1,27.1V438.2z"/>
			<path d="M337.4,232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v80.3h-80.3c-6.8,0-12.3,5.5-12.3,12.2
				c0,6.8,5.5,12.3,12.3,12.3h80.3v80.3c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-80.3h80.3c6.8,0,12.3-5.5,12.3-12.3
				C349.7,238.1,344.2,232.7,337.4,232.7z"/>
		</g>
	</svg>
);
export const Heart = ({size = 24, color="#000000"}) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path fill={color} d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
	</svg>
);

export const TV = ({size = 24, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z" />
	</svg>
);

export const Account = ({size = 24, className, color="#000000"}) => (
	<svg width={size} height={size} className={className} viewBox="0 0 24 24">
		<path fill={color} d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M16,14H8V13C8,11.67 10.67,11 12,11C13.33,11 16,11.67 16,13V14M12,6A2,2 0 0,1 14,8A2,2 0 0,1 12,10A2,2 0 0,1 10,8A2,2 0 0,1 12,6Z" />
	</svg>
);