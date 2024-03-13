import { useHttp } from "../hooks/http.hook";
import hasRequiredFields from "../utils/hasRequiredFields";

import { IAppointment } from "../shared/interfaces/appointment.interface";

const requiredFields = ["id", "date", "name", "service", "phone", "canceled"];

const useAppointmentService = () => {
	const { loadingStatus, request } = useHttp();

	const _apiBase = "http://localhost:3000/appointment";
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

	return {
		loadingStatus,
		getAllAppointments,
	};
};
