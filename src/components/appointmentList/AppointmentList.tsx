import { useEffect, useContext } from "react";

import AppointmentItem from "../appointmentItem/AppointmentItem";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
function AppointmentList() {
	const {
		ActiveAppointments,
		getActiveAppointments,
		appointmentLoadiingStatus,
	} = useContext(AppointmentContext);

	useEffect(() => {
		getActiveAppointments();
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
				return <AppointmentItem {...item} key={item.id} />;
			})}
		</>
	);
}

export default AppointmentList;
