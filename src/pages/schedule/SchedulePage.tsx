import Calendar from "../../components/calendar/Calendar";
import CAForm from "../../components/createAppointmentForm/CAForm";
import AppointmentList from "../../components/appointmentList/AppointmentList";

im
function SchedulePage() {
	return (
		<section className="schedule">
			<div className="schedule__controls">
				<Calendar />
				<CAForm />
			</div>
			<div className="schedule__list">
				<AppointmentList />
			</div>
		</section>
	);
}

export default SchedulePage;
