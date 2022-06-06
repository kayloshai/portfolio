import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./_components/Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
