import { useEffect } from "react";
import Portal from "../portal/portal";
import "./modal.scss";

interface IModalProps {
	handleClose: (state: boolean) => void;
	selectedId: number;
}

function CancelModal({ handleClose }: IModalProps) {
	const closeOnEscape = (e: KeyboardEvent): void => {
		if (e.key === "Escape") {
			handleClose(false);
		}
	};
	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscape);

		return () => {
			document.body.removeEventListener("keydown", closeOnEscape);
		};
	}, [handleClose]);

	return (
		<Portal>
			<div className="modal">
				<div className="modal__body">
					<span className="modal__title">
						Are you sure you want to delete the appointment?
					</span>
					<div className="modal__btns">
						<button className="modal__ok" onClick={() => handleClose(false)}>
							Ok
						</button>
						<button className="modal__close" onClick={() => handleClose(false)}>
							Close
						</button>
					</div>
					<div className="modal__status">Success</div>
				</div>
			</div>
		</Portal>
	);
}

export default CancelModal;
