import Header from "../header/Header";
import HistoryPage from "../../pages/history/HistoryPage";
import "./app.scss";
function App() {
	return (
		<main className="board">
			<Header />
			<HistoryPage />
		</main>
	);
}

export default App;
