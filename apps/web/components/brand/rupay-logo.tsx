import type * as React from "react";
import { useId } from "react";

export interface RupayLogoProps extends React.SVGProps<SVGSVGElement> {
	variant?: "default" | "white";
}

export function RupayLogo({
	variant = "default",
	className,
	"aria-label": ariaLabel,
	...props
}: RupayLogoProps) {
	const uid = useId();
	const leafGradId = `rupay-leaf-${uid}`;
	const mainColor = variant === "white" ? "#FFFFFF" : "#0B4F22";
	const leafStart = variant === "white" ? "#9AD168" : "#7EC93D";
	const leafEnd = "#4F9B20";

	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role={ariaLabel ? "img" : undefined}
			aria-label={ariaLabel}
			aria-hidden={ariaLabel ? undefined : true}
			className={className}
			{...props}
		>
			<defs>
				<linearGradient
					id={leafGradId}
					x1="12"
					y1="8"
					x2="32"
					y2="32"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor={leafStart} />
					<stop offset="100%" stopColor={leafEnd} />
				</linearGradient>
			</defs>
			{/* Circular arc broken at top-left where leaf emerges */}
			<path
				d="M37.5 11.8A21.5 21.5 0 1 1 14.3 44.2"
				stroke={mainColor}
				strokeWidth="4.6"
				strokeLinecap="round"
			/>
			<path
				d="M11.6 38.5A21.5 21.5 0 0 1 12.2 25.4"
				stroke={mainColor}
				strokeWidth="4.6"
				strokeLinecap="round"
			/>
			{/* Main leaf arching over top-left */}
			<path
				d="M16.2 28.4C14.8 18.8 21.4 10.6 33.4 7.4C31.8 17.6 25.4 25.8 16.2 28.4Z"
				fill={`url(#${leafGradId})`}
			/>
			<path
				d="M16.8 27.6C20.8 20.6 26.2 14.6 31.6 9.8"
				stroke="#EBF4E3"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			{/* Secondary accent leaf on outer left */}
			<path
				d="M12.8 23.2C9.6 19.6 8.8 14.4 11.4 9.8C14.2 13.8 15.2 18.8 12.8 23.2Z"
				fill={leafEnd}
			/>
			{/* Tilted fork whose handle curves seamlessly into the bottom ring */}
			<g transform="rotate(18 35 34)">
				<path
					d="M28.5 19.5V27.2C28.5 30.8 31.4 33.2 35 33.2C38.6 33.2 41.5 30.8 41.5 27.2V19.5"
					stroke={mainColor}
					strokeWidth="2.6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M32.8 19.2V26.5M37.2 19.2V26.5"
					stroke={mainColor}
					strokeWidth="2.4"
					strokeLinecap="round"
				/>
				<path
					d="M35 33.2V49.2C35 51.8 33.2 53.6 30.2 54"
					stroke={mainColor}
					strokeWidth="4.2"
					strokeLinecap="round"
				/>
			</g>
		</svg>
	);
}

export interface RuGestaoLogoProps extends React.SVGProps<SVGSVGElement> {
	variant?: "white" | "forest";
}

export function RuGestaoLogo({
	variant = "white",
	className,
	"aria-label": ariaLabel,
	...props
}: RuGestaoLogoProps) {
	const color = variant === "white" ? "#FFFFFF" : "#0B4F22";

	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role={ariaLabel ? "img" : undefined}
			aria-label={ariaLabel}
			aria-hidden={ariaLabel ? undefined : true}
			className={className}
			{...props}
		>
			<circle cx="32" cy="32" r="26" stroke={color} strokeWidth="3.8" />
			{/* Fork */}
			<path
				d="M20.5 17.5V25.5C20.5 28.4 22.4 30.2 24.5 30.6V46.5"
				stroke={color}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M24.5 17.5V30.6M28.5 17.5V25.5C28.5 28.4 26.6 30.2 24.5 30.6"
				stroke={color}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* Knife */}
			<path
				d="M40.5 17.5C37.2 19.4 36 24.2 36 30.2C36 31.8 37.2 33 38.8 33H40.5V46.5"
				fill={color}
			/>
			<path
				d="M40.5 17.5V46.5"
				stroke={color}
				strokeWidth="3.2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export interface EcoGlobeIllustrationProps
	extends React.SVGProps<SVGSVGElement> {}

export function EcoGlobeIllustration({
	className,
	"aria-label": ariaLabel,
	...props
}: EcoGlobeIllustrationProps) {
	const uid = useId();
	const clipId = `eco-globe-clip-${uid}`;
	const oceanGradId = `eco-ocean-${uid}`;
	const landGradId = `eco-land-${uid}`;
	const leafLeftGradId = `eco-leaf-l-${uid}`;
	const leafRightGradId = `eco-leaf-r-${uid}`;

	return (
		<svg
			viewBox="0 0 180 140"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role={ariaLabel ? "img" : undefined}
			aria-label={ariaLabel}
			aria-hidden={ariaLabel ? undefined : true}
			className={className}
			{...props}
		>
			<defs>
				<clipPath id={clipId}>
					<circle cx="90" cy="70" r="42" />
				</clipPath>
				<linearGradient
					id={oceanGradId}
					x1="60"
					y1="30"
					x2="122"
					y2="112"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#166830" />
					<stop offset="100%" stopColor="#0B4F22" />
				</linearGradient>
				<linearGradient
					id={landGradId}
					x1="62"
					y1="34"
					x2="118"
					y2="108"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#9AD168" />
					<stop offset="100%" stopColor="#5FA927" />
				</linearGradient>
				<linearGradient
					id={leafLeftGradId}
					x1="20"
					y1="34"
					x2="54"
					y2="96"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#8FD152" />
					<stop offset="100%" stopColor="#4F9B20" />
				</linearGradient>
				<linearGradient
					id={leafRightGradId}
					x1="158"
					y1="30"
					x2="126"
					y2="96"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#8FD152" />
					<stop offset="100%" stopColor="#4F9B20" />
				</linearGradient>
			</defs>

			{/* Soft sage aura behind globe */}
			<circle cx="90" cy="70" r="54" fill="#DFF0D2" fillOpacity="0.65" />

			{/* Left flanking leaves */}
			<path
				d="M46 78C31 74 21 58 24 41C39 45 48 61 46 78Z"
				fill={`url(#${leafLeftGradId})`}
			/>
			<path
				d="M44 74C37 64 31 54 27 45"
				stroke="#EBF4E3"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path d="M52 96C39 97 29 90 26 78C38 77 48 84 52 96Z" fill="#5FA927" />
			<path
				d="M49 94C42 90 35 85 29 80"
				stroke="#EBF4E3"
				strokeWidth="1.3"
				strokeLinecap="round"
			/>

			{/* Right flanking leaves */}
			<path
				d="M134 74C149 69 158 53 154 36C139 41 131 57 134 74Z"
				fill={`url(#${leafRightGradId})`}
			/>
			<path
				d="M136 70C143 60 148 50 151 41"
				stroke="#EBF4E3"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M128 96C141 97 151 90 154 78C142 77 132 84 128 96Z"
				fill="#5FA927"
			/>
			<path
				d="M131 94C138 90 145 85 151 80"
				stroke="#EBF4E3"
				strokeWidth="1.3"
				strokeLinecap="round"
			/>

			{/* Globe sphere */}
			<circle cx="90" cy="70" r="42" fill={`url(#${oceanGradId})`} />

			{/* Stylized continents clipped to sphere */}
			<g clipPath={`url(#${clipId})`}>
				{/* North & Central America */}
				<path
					d="M56 36C64 31 78 30 88 35C95 39 94 47 89 51C84 55 81 56 80 61C79 65 84 68 83 72C77 73 70 69 66 64C62 59 53 56 51 48C49 42 52 38 56 36Z"
					fill={`url(#${landGradId})`}
				/>
				{/* South America */}
				<path
					d="M84 72C91 71 101 76 105 84C108 91 102 101 95 109C91 113 86 113 84 107C82 100 84 91 81 84C79 79 80 73 84 72Z"
					fill={`url(#${landGradId})`}
				/>
				{/* Eastern landmass edge */}
				<path
					d="M112 40C121 39 131 45 133 55C134 62 127 67 121 67C115 67 112 61 110 55C108 49 107 41 112 40Z"
					fill={`url(#${landGradId})`}
					fillOpacity="0.92"
				/>
				{/* Subtle spherical highlight */}
				<path
					d="M58 52C64 39 77 32 92 32"
					stroke="#FFFFFF"
					strokeOpacity="0.22"
					strokeWidth="3"
					strokeLinecap="round"
				/>
			</g>

			{/* Clean ring border */}
			<circle
				cx="90"
				cy="70"
				r="42"
				stroke="#0B4F22"
				strokeOpacity="0.18"
				strokeWidth="1.5"
			/>
		</svg>
	);
}
