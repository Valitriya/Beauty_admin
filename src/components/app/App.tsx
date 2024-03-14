import { useEffect } from "react";
import Header from "../header/Header";

import useAppointmentService from "../../services/AppointmentService";
import "./app.scss";
function App() {
	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
		useAppointmentService();
		
	useEffect(() => {
		getAllAppointments().then((data) => console.log(data));
	}, []);
	return (
		<main className="board">
			<Header />
		</main>
	);
}

export default App;
