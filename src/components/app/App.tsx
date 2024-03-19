import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
import HistoryPage from "../../pages/history/HistoryPage";
import AppointmentsContextProvider from "../../context/appointments/AppointmentsContext";

import "./app.scss";
function App() {
	return (
		<main className="board">
			<Header />
			<AppointmentsContextProvider>
				<SchedulePage />
			</AppointmentsContextProvider>
			{/* <HistoryPage/> */}
		</main>
	);
}

export default App;
