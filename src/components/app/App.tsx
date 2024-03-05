import Header from "../header/Header";
import AppointmentItem from "../appointmentItem/AppointmentItem";
import "./app.scss";
function App() {
	return (
		<main className="board">
			<Header />
			<AppointmentItem/>
		</main>
	);
}

export default App;
