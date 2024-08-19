import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<Provider store={store}>
					<App />
				</Provider>
				<Toaster />
			</AuthProvider>
		</ChakraProvider>
	</React.StrictMode>,
);
