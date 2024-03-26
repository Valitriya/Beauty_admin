import { useEffect, useState, useContext } from "react";
import Portal from "../portal/portal";
import useAppointmentService from "../../services/AppointmentService";
import "./modal.scss";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";

interface IModalProps {
	handleClose: (state: boolean) => void;
	selectedId: number;
}

function CancelModal({ handleClose, selectedId }: IModalProps) {
	const { getActiveAppointments } = useContext(AppointmentContext);

	const { cancelOneAppointment } = useAppointmentService();

	const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
	const [cancelStatus, setCancelStatus] = useState<boolean | null>(null);

	const handleCancelAppointment = (id: number) => {
		setBtnDisabled(true);
		cancelOneAppointment(id)
			.then(() => {
				setCancelStatus(true);
			})
			.catch(() => {
				setCancelStatus(false);
				setBtnDisabled(false);
			});
	};

	const closeModal = () => {
		handleClose(false);
		if (cancelStatus) {
			getActiveAppointments();
		}
	};

	const closeOnEscape = (e: KeyboardEvent): void => {
		if (e.key === "Escape") {
			closeModal();
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
						<button
							className="modal__ok"
							disabled={btnDisabled}
							onClick={() => handleCancelAppointment(selectedId)}
						>
							Ok
						</button>
						<button className="modal__close" onClick={() => closeModal()}>
							Close
						</button>
					</div>
					<div className="modal__status">
						{cancelStatus === null
							? ""
							: cancelStatus
							? "Success"
							: "Error, please try again"}
					</div>
				</div>
			</div>
		</Portal>
	);
}

export default CancelModal;
