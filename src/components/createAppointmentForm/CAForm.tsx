import useAppointmentService from "../../services/AppointmentService";
import { FormEvent, useState, ChangeEvent } from "react";
import { IAppointment } from "../../shared/interfaces/appointment.interface";

import "./caform.scss";
function CAForm() {
	const { createNewAppointment } = useAppointmentService();
	const [formData, setFormDate] = useState<IAppointment>({
		name: "",
		service: "",
		phone: "",
		date: "",
		canceled: false,
		id: 1,
	});

	const [creationStatus, setCreationStatus] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCreationStatus(true);
		createNewAppointment(formData).then(() => {
			setCreationStatus(false);
			setFormDate({
				name: "",
				service: "",
				phone: "",
				date: "",
				canceled: false,
				id: 1,
			});
		});
	};
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormDate((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	return (
		<form className="caform" onSubmit={handleSubmit}>
			<div className="caform__title">Create new appointment</div>
			<label htmlFor="name">
				Name<span>*</span>
			</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="User name"
				required
				value={formData.name}
				onChange={handleChange}
			/>
			<label htmlFor="service">
				Service<span>*</span>
			</label>
			<input
				type="text"
				name="service"
				id="service"
				placeholder="service name"
				required
				value={formData.service}
				onChange={handleChange}
			/>
			<label htmlFor="phone">
				Phone number<span>*</span>
			</label>
			<input
				type="tel"
				name="phone"
				id="phone"
				placeholder="+7 999 999 99 99"
				pattern="^\++[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
				title="Format should be +7 999 999 99 99"
				required
				value={formData.phone}
				onChange={handleChange}
			/>
			<label htmlFor="date">
				Date<span>*</span>
			</label>
			<input
				type="text"
				name="date"
				id="date"
				placeholder="DD/MM/YYYY HH:mm"
				pattern="^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$"
				title="Format should be DD/MM/YYYY HH:mm"
				required
				value={formData.date}
				onChange={handleChange}
			/>
			<button disabled={creationStatus}>Create</button>
		</form>
	);
}
export default CAForm;
