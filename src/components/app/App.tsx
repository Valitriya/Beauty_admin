import { useEffect } from "react";
import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
import useAppointmentService from "../../services/AppointmentService";

import { IInitialState } from "../../context/appointments/reducer";

import "./app.scss";

const initialState: IInitialState = {
	allAppointmens: [],
	ActiveAppointments: [],
};
function App() {
	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
		useAppointmentService();
	useEffect(() => {
		getAllAppointments().then((data) => console.log(data));
	}, []);
	return (
		<main className="board">
			<Header />
			<SchedulePage />
		</main>
	);
}

export default App;
