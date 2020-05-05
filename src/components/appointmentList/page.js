import React, { Fragment } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import Appointment from '../apointment';

const AppointmentListPage = ({ globalAppointments, deleteAppointment }) => {



    return (
        <Fragment>
            <Typography variant="h3"><Box fontWeight="fontWeightBold">Appointments</Box></Typography>

            <Grid container justify="center">
                {globalAppointments.length === 0 ?
                    <Fragment>
                        <Typography variant="h5">There isn't appointments</Typography>
                    </Fragment>

                    :

                    globalAppointments.map((appointment) => {
                        return <Appointment key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
                    })




                }
            </Grid>



        </Fragment>
    );
}

export default AppointmentListPage;
