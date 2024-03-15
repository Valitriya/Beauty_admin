import React, { createContext, useReducer, useEffect } from "react";
import reducer, { IInitialState } from "./reducer";
import { ActionsTypes } from "./actions";

import useAppointmentService from "../../services/AppointmentService";

const initialState: IInitialState = {
	allAppointmens: [],
	ActiveAppointments: [],
};

interface IAppointmentContextValue extends IInitialState {
	getAppointments: () => void;
}
const appointmentContext = createContext<IAppointmentContextValue>({
	allAppointmens: initialState.allAppointmens,
	ActiveAppointments: initialState.ActiveAppointments,
	getAppointments: () => {},
});
interface ProviderProps {
	children: React.ReactNode;
}
const AppointmentsContextProvider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
		useAppointmentService();

	const value: IAppointmentContextValue = {
		allAppointmens: state.allAppointmens,
		ActiveAppointments: state.ActiveAppointments,
		getAppointments: () => {
			getAllAppointments().then((data) =>
				dispatch({ type: ActionsTypes.SET_ALL_APPOINTMENTS, payload: data })
			);
		},
	};
};

export default AppointmentsContextProvider;
