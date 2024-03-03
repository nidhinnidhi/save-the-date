import "./globals.css";

export const metadata = {
	title: "Save the date - Arun & Anusha",
	description: "Arun & Anusha",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
