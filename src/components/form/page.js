import React, { Fragment } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CssTextField from './textFieldcss';
import KeyboardDateTimePickerCss from './datePickercss';
import ButtonCss from './buttonCss';

const FormPage = ({selectedDate, handleDateChange, handleDateTimeChange, appointment, handleChange ,submitAppointment}) => {
    const {pet, owner, symptoms}  = appointment;

    
    return (
        <Fragment>
            <Typography variant="h3"><Box fontWeight="fontWeightBold">Form</Box></Typography>

            <form onSubmit={submitAppointment}>
                <Grid container justify="center">

                    {/* <Box className={classes.label} fontWeight="fontWeightBold">PET NAME</Box> */}
                    {/* <TextField
                            className={classes.textField}
                            id="outlined-multiline-required"
                            placeholder="Pet name"
                            required
                            variant="filled"
                            InputProps={{
                                classes: {

                                    input: classes.input,
                                }
                            }}

                        /> */}
                    <CssTextField
                        name="pet"
                        label={<strong>PET NAME</strong>}
                        variant="outlined"
                        id="custom-css-outlined-input"
                        autoComplete='off'
                        onChange={handleChange}
                        value={pet}
                    />




                    <CssTextField
                        name="owner"
                        label={<strong>OWNER</strong>}
                        variant="outlined"
                        id="custom-css-outlined-input"
                        autoComplete='off'
                        onChange={handleChange}
                        value={owner}
                    />



                    <KeyboardDateTimePickerCss
                        label={<strong>DATE AND TIME</strong>}
                        inputVariant="outlined"
                        clearable={true}
                        value={selectedDate}
                        onChange={date => {handleDateChange(date);handleDateTimeChange(date);}}
                        onError={console.log}
                        minDate={new Date()}
                        format="MM/dd/yyyy     HH:mm"
                    />

                    <CssTextField
                        name="symptoms"
                        label={<strong>SYMPTOMS</strong>}
                        variant="outlined"
                        id="custom-css-outlined-input"
                        autoComplete='off'
                        multiline
                        rows={2}
                        onChange={handleChange}
                        value={symptoms}
                    />

                    <ButtonCss
                        type="submit"
                        variant="outlined"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </ButtonCss>




                </Grid>






            </form>



        </Fragment>
    );
}

export default FormPage;
