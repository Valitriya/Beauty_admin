import { AppointmentAction, ActionsTypes } from "./actions";
import {
	IAppointment,
	ActiveAppointment,
} from "../../shared/interfaces/appointment.interface";
import {LoadingStatusOptions} from "../../shared/interfaces/hook.interface";

export interface IAppointmentState {
	allAppointments: IAppointment[] | [];
	ActiveAppointments: ActiveAppointment[] | [];
	appointmentLoadiingStatus: LoadingStatusOptions;
}

export default function reducer(
	state: IAppointmentState,
	action: AppointmentAction
): IAppointmentState {
	switch (action.type) {
		case ActionsTypes.SET_ALL_APPOINTMENTS:
			return { ...state, allAppointments: action.payload };
		case ActionsTypes.SET_ACTIVE_APPOINTMENTS:
			return { ...state, ActiveAppointments: action.payload };
		case ActionsTypes.FETCHING_APPOINTMENTS:
			return { ...state, appointmentLoadiingStatus: "loading" };
		case ActionsTypes.ERROR_FETCHING_APPOINTMENTS:
			return { ...state, appointmentLoadiingStatus: "error" };
		default:
			return state;
	}
}
