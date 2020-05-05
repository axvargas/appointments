import React from 'react';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import style from './style';
const AppointmentPage = ({appointment, deleteAppointment}) => {
    const classes = style();
    const { id, pet, owner, date, time, symptoms } = appointment;
    const bull = <span className={classes.bullet}><strong>•</strong></span>;
    return (
        <Card className={classes.root} variant="outlined"  >
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong>PET</strong>  {bull}     {pet}
                </Typography>
                
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong>OWNER</strong> {bull}      {owner}
                </Typography>
               
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong>DATE</strong> {bull}      {date}
                </Typography>
                
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong>TIME</strong> {bull}      {time}
                </Typography>
                
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong>SYMPTOMS</strong> {bull}      {symptoms}
                </Typography>
              
            </CardContent>
            <CardActions>
                <Button className={classes.button} size="large" onClick={()=>deleteAppointment(id)}><strong>&times; DELETE &times;</strong></Button>
            </CardActions>
        </Card>
    );
}

export default AppointmentPage;
