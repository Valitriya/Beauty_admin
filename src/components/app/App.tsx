import { useEffect } from "react";
import Header from "../header/Header";

import useAppointmentService from "../../services/AppointmentService";
import "./app.scss";
function App() {
	return (
		<main className="board">
			<Header />
		</main>
	);
}

export default App;
