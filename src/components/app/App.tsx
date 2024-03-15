import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
import AppointmentsContextProvider from "../../context/appointments/AppointmentsContext";

import "./app.scss";
function App() {
	return (
		<main className="board">
			<Header />
			<AppointmentsContextProvider>
				<SchedulePage />
			</AppointmentsContextProvider>
		</main>
	);
}

export default App;
