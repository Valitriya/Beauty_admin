import { IAppointmentAction, ActionsTypes } from "./actions";
import {
	IAppointment,
	ActiveAppointment,
} from "../../shared/interfaces/appointment.interface";

export interface IInitialState {
	allAppointmens: IAppointment[] | [];
	ActiveAppointments: ActiveAppointment[] | [];
}

export default function reducer(
	state: IInitialState,
	action: IAppointmentAction
) {
    switch(action.type){
        case ActionsTypes.SET_ALL_APPOINTMENTS:
            return {...state, allAppointmens: action.payload};
        case ActionsTypes.SET_ACTIVE_APPOINTMENTS: 
            return {...state, ActiveAppointments: action.payload};
        default: 
            return state;
    }
}