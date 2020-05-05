import React, { useState } from 'react';
import FormPage from './page';
import { useSnackbar } from 'notistack';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Form = ({ createAppointment }) => {
    const { enqueueSnackbar } = useSnackbar();
    const initialStateDate = new Date();
    const [selectedDate, handleDateChange] = useState(initialStateDate);

    const initialStateAppointment = {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: '',
    }

    const [appointment, setAppointment] = useState(initialStateAppointment);

    const handleDateTimeChange = (date) => {
        
        setAppointment({
            ...appointment,
            date: date.toDateString(),
            time: date.toTimeString()
        });

    }

    const handleChange = (event) => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        });
    }

    const validateAppointment = () => {
        let numberOfError = 0;
        for (let [field, value] of Object.entries(appointment)) {
            if (value.trim() === '') {
                console.log(`There is an error in the field ${field}`);
                enqueueSnackbar(
                    `There field ${field.toUpperCase()} is required`,
                    {
                        variant: 'error',
                        autoHideDuration: 5000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                        },
                    });
                numberOfError++;
            }
        }
        return numberOfError;
    }

    const submitAppointment = (event) => {
        event.preventDefault();

        // Validate
        const numberOfErrors = validateAppointment();
        console.log(numberOfErrors);
        if (numberOfErrors > 0) {

            return;
        }

        //Asign an id
        appointment.id = uuidv4();


        //Create appointment 
        createAppointment(appointment);

        //Reset the form
        setAppointment(initialStateAppointment);
        handleDateChange(initialStateDate);


        console.log("Sending...");
        enqueueSnackbar(
            `The appointment was saved`,
            {
                variant: 'success',
                autoHideDuration: 4000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                },
            });

    }

    return (

        <FormPage
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            handleDateTimeChange={handleDateTimeChange}
            appointment={appointment}
            setAppointment={setAppointment}
            handleChange={handleChange}
            submitAppointment={submitAppointment}

        />


    );
}

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}
export default Form;
