import React from 'react';
import AppointmentPage from './page';
import PropTypes from 'prop-types';
const Appointment = ({appointment, deleteAppointment}) => {
    return (
        <AppointmentPage key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
    );
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
}

export default Appointment;
