import React, { Fragment } from 'react';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Form from '../components/form';
import AppointmentList from '../components/appointmentList'

import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider
} from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = ({ createAppointment, globalAppointments, deleteAppointment }) => {


	return (
		<Fragment>
			<MuiThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Container>

						<Typography variant="h2"><Box fontWeight="fontWeightBold">Patient appointments</Box></Typography>

						<Grid container spacing={3}>
							<Grid item md={6} sm={12} xs={12}>

								<Form createAppointment={createAppointment} />

							</Grid>
							<Grid item md={6} sm={12} xs={12}>
								<AppointmentList globalAppointments={globalAppointments} deleteAppointment={deleteAppointment} />
							</Grid>
						</Grid>

					</Container>

				</MuiPickersUtilsProvider>
			</MuiThemeProvider>
		</Fragment>

	);
}

export default App;