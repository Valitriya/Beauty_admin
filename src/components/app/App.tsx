import { useEffect } from "react";
import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";

import useAppointmentService from "../../services/AppointmentService";
import {
	IAppointment,
	ActiveAppointment,
} from "../../shared/interfaces/appointment.interface";
import "./app.scss";

interface IInitialState {
	allAppointmens: IAppointment | [];
	ActiveAppointments: ActiveAppointment | [];
}
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
			<SchedulePage/>
		</main>
	);
}

export default App;
