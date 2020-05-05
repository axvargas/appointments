import React from 'react';
import AppointmentListPage from './page';
const AppointmentList = ({globalAppointments, deleteAppointment}) => {
    return (
        <AppointmentListPage globalAppointments={globalAppointments} deleteAppointment={deleteAppointment}/>
    );
}

export default AppointmentList;
