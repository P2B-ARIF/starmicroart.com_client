/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#d03be3",
				secondary: "#9733E9",
				light: "#f4d9fc",
				black_c: "#262625",
				white_c: "#f4f0f5",
				gray_c: "#454545",
			},
			fontFamily: {
				lato: ["Lato", "sans-serif"],
				secondary: ["Dancing Script", "cursive"],
			},
			screens: {
				xl: "1240px",
				"2xl": "1540px",
			},
		},
	},
	plugins: [],
};
