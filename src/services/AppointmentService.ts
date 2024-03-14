import { useHttp } from "../hooks/http.hook";
import hasRequiredFields from "../utils/hasRequiredFields";

import {
	IAppointment,
	ActiveAppointment,
} from "../shared/interfaces/appointment.interface";

const requiredFields = ["id", "date", "name", "service", "phone", "canceled"];

const useAppointmentService = () => {
	const { loadingStatus, request } = useHttp();

	const _apiBase = "http://localhost:3000/appointments";
	const getAllAppointments = async (): Promise<IAppointment[]> => {
		const res = await request({ url: _apiBase });
		if (
			res.every((item: IAppointment) => hasRequiredFields(item, requiredFields))
		) {
			return res;
		} else {
			throw new Error("Data doesnt have all the fields");
		}
	};

	const getAllActiveAppointments = async (): Promise<ActiveAppointment[]> => {
		const base = await getAllAppointments();
		const transformed: ActiveAppointment[] = base.map((item) => {
			return {
				id: item.id,
				date: item.date,
				name: item.name,
				service: item.service,
				phone: item.phone,
			};
		});

		return transformed;
	};

	return {
		loadingStatus,
		getAllAppointments,
		getAllActiveAppointments,
	};
};

export default useAppointmentService;