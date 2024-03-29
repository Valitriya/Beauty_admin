import { useEffect, useContext, useState, useCallback } from "react";

import AppointmentItem from "../appointmentItem/AppointmentItem";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import CancelModal from "../modal/CancelModal";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
function AppointmentList() {
	const {
		ActiveAppointments,
		getActiveAppointments,
		appointmentLoadiingStatus,
	} = useContext(AppointmentContext);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedId, selectId] = useState(0);

	useEffect(() => {
		getActiveAppointments();
	}, []);

	const handleOpenModal = useCallback((id: number) => {
		setIsOpen(true);
		selectId(id);
	}, []);

	if (appointmentLoadiingStatus === "loading") {
		return <Spinner />;
	} else if (appointmentLoadiingStatus === "error") {
		return (
			<>
				<Error />
				<button className="schedule__reload" onClick={getActiveAppointments}>
					Try to reload
				</button>
			</>
		);
	}

	return (
		<>
			{ActiveAppointments.map((item) => {
				return (
					<AppointmentItem
						{...item}
						key={item.id}
						openModal={handleOpenModal}
						getActiveAppointments = {getActiveAppointments}
					/>
				);
			})}
			{isOpen ? (
				<CancelModal handleClose={setIsOpen} selectedId={selectedId} />
			) : null}
		</>
	);
}

export default AppointmentList;
