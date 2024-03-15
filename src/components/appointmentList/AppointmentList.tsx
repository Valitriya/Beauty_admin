import { useEffect, useContext} from "react";
import AppointmentItem from "../appointmentItem/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
function AppointmentList() {
    const {allAppointments, getAppointments} = useContext(AppointmentContext);
	return (
		<>
			<AppointmentItem />
			<AppointmentItem />
			<AppointmentItem />
			<AppointmentItem />
		</>
	);
}

export default AppointmentList;
