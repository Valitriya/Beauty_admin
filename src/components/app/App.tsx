import Header from "../header/Header";
import CancelModal from "../modal/CancelModal";
import "./app.scss";
function App() {
	return (
		<main className="board">
			<Header />
			<CancelModal />
		</main>
	);
}

export default App;
