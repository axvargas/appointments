import React, { useState, useEffect } from 'react';

import AppPage from './page';

const App = () => {
	
	//Appointments in Local
	let initialStateAppointments = JSON.parse(localStorage.getItem('appointments'));
	if(!initialStateAppointments){
		initialStateAppointments = [];
	}

	const [globalAppointments, setGlobalAppointments] = useState(initialStateAppointments);

	// useEffect
	useEffect(() => {
		console.log('Ready!!!!!!!!! because sth happened to the appointments')
		
		if(initialStateAppointments){
			localStorage.setItem('appointments', JSON.stringify(globalAppointments));
		}else{
			localStorage.setItem('appointments', JSON.stringify([]))
		}
	}, [globalAppointments, initialStateAppointments]);

	// Function to get actual appointments and to add a new one
	const createAppointment = appointment => {
		setGlobalAppointments([
			...globalAppointments,
			appointment
		]);
	}

	const deleteAppointment = (id) => {
		const newAppointments = globalAppointments.filter((appointment)=>appointment.id !== id);
		setGlobalAppointments(newAppointments);
	}

	return (
		<AppPage
			createAppointment={createAppointment}
			globalAppointments={globalAppointments}
			deleteAppointment={deleteAppointment}
		/>
	);
}

export default App;
