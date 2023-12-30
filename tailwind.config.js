/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/modules/**/*.{js,jsx,ts,tsx}",
		"./src/common/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{html,js}",
	],
	css: ["./src/assets/styles/custom.css"],
	options: {
		safelist: [],
		safelistPatterns: [],
		keyframes: true,
		fontFace: true,
	},
	theme: {
		screens: {
			// specifying screens is mandatory in every tailwind.config file
			xs: "480px", //min-width 480px
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#FFF",

			orange: {
				50: "#F6B58F",
				100: "#FB8473",
			},
			black: {
				50: "#282727",
				75: "#28272799",
				100: "#191714",
				125: "#19171433",
				150: "#020202",
				200: "#1C1B1B99",
				250: "#19171419", //with opacity
				300: "#000",
				350: "#00000099", // with opacity
				400: "#28272763",
				450: "#02020101",
				500: "#02020299",
				550: "#28272710",
				600: "#281B1B99",
			},
			primary: {
				50: "#FFDB0A",
			},
			blue: {
				50: "#3D61B0",
				100: "#C3E9FC",
			},
			grey: {
				50: "#F3F3F3",
				100: "#D4D4D4",
				150: "#393A3B",
				200: "#8D8D8D",
				250: "#19171499",
				300: "#19171419",
				350: "#F6F6F6",
				400: "#02020299",
				450: "#1311E63F",
			},
			green: {
				50: "#BDD6AB",
			},
			red: {
				50: "#FF6142",
				75: "#F6C0B8",
			},
			navyBlue: {
				50: "#26458C",
			},
			darkGrey: {
				50: "#333333",
			},
			yellow: {
				50: "#FFE8AE",
			},
			purple: {
				50: "#EBC9F1",
				100: "#CEC0F6",
			},
		},

		fontSize: {
			// `[fontSize, { letterSpacing, lineHeight }]`
			ft0: [
				"12px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft1: [
				"14px",
				{
					letterSpacing: "0px",
					lineHeight: "16.8px",
				},
			],
			ft2: [
				"14px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft3: [
				"16px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft32: [
				"18px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft4: [
				"20px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft42: [
				"22px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft5: [
				"25px",
				{
					letterSpacing: "0em",
					lineHeight: "24px",
				},
			],
			ft52: [
				"28px",
				{
					letterSpacing: "0em",
					lineHeight: "24px",
				},
			],
			ft6: [
				"32px",
				{
					letterSpacing: "-0.64px",
					lineHeight: "44.8px",
				},
			],
			ft7: [
				"40px",
				{
					letterSpacing: "0em",
					lineHeight: "24px",
				},
			],
		},

		fontFamily: {
			ManropeBold: ["Manrope-Bold", "sans-serif"],
			ManropeExtraBold: ["Manrope-ExtraBold", "sans-serif"],
			ManropeExtraLight: ["Manrope-ExtraLight", "sans-serif"],
			ManropeLight: ["Manrope-Light", "sans-serif"],
			ManropeMedium: ["Manrope-Medium", "sans-serif"],
			ManropeRegular: ["Manrope-Regular", "sans-serif"],
			ManropeSemiBold: ["Manrope-SemiBold", "sans-serif"],
		},

		boxShadow: {
			// none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
			inner: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)",
			xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
			xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
			DEFAULT:
				"0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
			"2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
			lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
			md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
			outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)",
			custom: "0px 5px 20px 0px rgba(0, 0, 0, 0.10)",
			dropdownShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)",
		},

		backgroundImage: (theme) => ({
			dummyPostImage:
				"url('https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg')", //tailwind class => bg-dummy
		}),

		extend: {
			//theme options are to be extended with custom variants and not overridden (1 unit = 4px)
			spacing: {
				//common for width, height, padding, margin
				1.25: "5px",
				1.75: "7px",
				3.25: "13px",
				3.75: "15px",
				4.25: "17px",
				4.5: "18px", //p-4.5 , m-4.5 , w-4.5, h-4.5
				"22px": "22px",
				6.25: "25px",
				7.5: "30px",
				7.75: "31px",
				8.75: "35px",
				9.5: "38px",
				9.75: "39px",
				10.75: "43px",
				11.25: "45px",
				11.5: "46px", //divide the required value by 4 to get the key name (46/4 = 11.5)
				12.5: "50px",
				13: "52px",
				13.25: "53px",
				15: "60px",
				15.25: "61px",
				16.25: "65px",
				17.25: "69px",
				18: "72px",
				18.5: "74px",
				18.75: "75px",
				19.25: "77px",
				20.5: "82px",
				21.25: "85px",
				22.25: "89px",
				23.75: "95px",
				24.5: "98px",
				25: "100px",
				"107px": "107px",
				29: "116px",
				30: "120px",
				30.25: "121px",
				31: "124px",
				31.25: "125px",
				32.5: "130px",
				33.5: "134px",
				"137px": "137px",
				35: "140px",
				36.5: "146px",
				37.5: "150px",
				38.5: "154px",
				39.75: "159px",
				41.25: "165px",
				42.5: "170px",
				44.25: "177px",
				45: "180px",
				46.25: "185px",
				47.5: "190px",
				49: "196px",
				50: "200px",
				50.75: "203px",
				52.25: "209px",
				55: "220px",
				57.5: "230px",
				59.25: "237px",
				61: "244px",
				"252px": "252px",
				65: "260px",
				68.25: "273px",
				69.25: "277px",
				73.5: "294px",
				75: "300px",
				79.75: "319px",
				81.25: "325px",
				83.75: "335px",
				85: "340px",
				92.25: "369px",
				93: "370px",
				93.25: "373px",
				94.5: "378px",
				95.5: "382px",
				97.5: "390px",
				99.5: "398px",
				100: "400px",
				106.25: "425px",
				112.5: "450px",
				115: "460px",
				123.5: "494px",
				"509px": "509px",
				"519px": "519px",
				137.5: "550px",
				142.5: "570px",
				150: "600px",
				155: "620px",
				"679px": "679px",
				172.5: "690px",
				188.75: "755px",
				189.5: "758px",
				190.5: "762px",
				205.25: "821px",
				216.25: "865px",
				225: "900px",
				252.5: "1010px",
				278.25: "1113px",
				360: "1440px",
				"10vh": "10vh",
				"15vw": "15vw",
				"20vw": "20vw",
				"15vh": "15vh",
				"40vh": "40vh",
				"57vw": "45vw",
				"70vh": "70vh",
				"75vh": "75vh",
				"77vh": "77vh",
				"80vh": "80vh",
				"2per": "2%",
				"5per": "5%",
				"10per": "10%",
				"15per": "15%",
				"20per": "20%",
				"25per": "25%",
				"30per": "30%",
				"50per": "50%",
				"75per": "75%",
				"80per": "80%",
				"85per": "85%",
				"87per": "87%",
				"90per": "90%",
				"95per": "95%",
				"97per": "97%",
			},
			borderRadius: {
				//same as border width
				0.5: "0.5px",
				"5-5xl": "34px",
				"15px": "15px",
				17: "17px",
				20: "20px",
				30: "30px",
			},
			borderColor: {
				white: "#FFFFFF", // Change to the color you desire
				"gray-light": "#D4D4D4",
				"black-10": "#1311141A",
				"black-20": "#13111433",
			},
			borderWidth: {
				0.5: "0.5px",
			},
			gridTemplateColumns: {
				dashCol: "327px 1163px",
				dashColIcon: "124px 1316px",
				loginCol: "50% 50%",
				userCol: "277px 759px 404px",
				userColIcon: "124px 912px 404px",
			},
			gridTemplateRows: {
				dashRow: "85px 775px",
				userRow: "105px 795px",
			},
			maxHeight: {
				"50vh": "50vh",
				"70vh": "70vh",
				"75vh": "75vh",
				"80vh": "80vh",
				"95vh": "95vh",
			},
		},
	},
	variants: {
		//there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
		width: ["responsive", "hover", "focus", "group-hover"],
		display: ["responsive", "hover", "focus", "group-hover"],
		transform: ["responsive", "hover", "focus", "group-hover"],
		scale: ["responsive", "hover", "focus", "group-hover"],
		extend: {
			animation: ["hover", "focus", "group-hover"],
			grayscale: ["hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
