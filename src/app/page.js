import React, { Fragment } from 'react';
import { Typography, Grid, Box} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Form from '../components/form';
import AppointmentList from '../components/appointmentList'
import style from './style';
import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider
} from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = ({ createAppointment, globalAppointments, deleteAppointment }) => {

	const classes = style();
	return (
		<Fragment>
			<MuiThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>

					
						<Typography variant="h2"><Box fontWeight="fontWeightBold">Patient appointments</Box></Typography>

						<Grid container spacing={3} className={classes.grid}>
							<Grid item lg={6} xl={6} md={6} sm={12} xs={12} >

								<Form createAppointment={createAppointment} />

							</Grid>
							<Grid item lg={6} xl={6} md={6} sm={12} xs={12} >
								<AppointmentList globalAppointments={globalAppointments} deleteAppointment={deleteAppointment} />
							</Grid>
						</Grid>
					



				</MuiPickersUtilsProvider>
			</MuiThemeProvider>
		</Fragment>

	);
}

export default App;