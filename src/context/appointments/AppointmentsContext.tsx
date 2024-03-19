import React, { createContext, useReducer } from "react";
import reducer, { IInitialState } from "./reducer";
import { ActionsTypes } from "./actions";

import useAppointmentService from "../../services/AppointmentService";

const initialState: IInitialState = {
	allAppointments: [],
	ActiveAppointments: [],
};

interface IAppointmentContextValue extends IInitialState {
	getAppointments: () => void;
	getActiveAppointments: () => void;
}
export const AppointmentContext = createContext<IAppointmentContextValue>({
	allAppointments: initialState.allAppointments,
	ActiveAppointments: initialState.ActiveAppointments,
	getAppointments: () => {},
	getActiveAppointments: () => {},
});
interface ProviderProps {
	children: React.ReactNode;
}
const AppointmentsContextProvider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loadingStatus, getAllAppointments, getAllActiveAppointments } =
		useAppointmentService();

	const value: IAppointmentContextValue = {
		allAppointments: state.allAppointments,
		ActiveAppointments: state.ActiveAppointments,
		getAppointments: () => {
			getAllAppointments().then((data) =>
				dispatch({ type: ActionsTypes.SET_ALL_APPOINTMENTS, payload: data })
			);
		},
		getActiveAppointments: () => {
			getAllActiveAppointments().then((data) => 
				dispatch({type: ActionsTypes.SET_ACTIVE_APPOINTMENTS, payload: data}))
		}
	};

	return (
		<AppointmentContext.Provider value={value}>
			{children}
		</AppointmentContext.Provider>
	);
};

export default AppointmentsContextProvider;
