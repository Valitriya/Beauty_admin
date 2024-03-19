import { useEffect, useContext } from "react";
import AppointmentItem from "../appointmentItem/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
function AppointmentList() {
	const { ActiveAppointments, getActiveAppointments } =
		useContext(AppointmentContext);

	useEffect(() => {
		getActiveAppointments();
	}, []);
	return (
		<>
			{ActiveAppointments.map((item) => {
				return <AppointmentItem {...item} key={item.id} />;
			})}
		</>
	);
}

export default AppointmentList;
