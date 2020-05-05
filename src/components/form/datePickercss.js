import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { withStyles } from '@material-ui/core/styles';



export default withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-input:focus': {
            color: 'white',
            
        },
        '& .MuiInput-input': {
            color: 'white',
        },
        '& label..MuiInputLabel-outlined': {
            fontSize: 50
        },
        '& .MuiSvgIcon-root':{
            color:'white'
        },
        
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },


            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
            color: 'white',
            

        },
        marginTop: 30,
        width: '75%',
      


    },

})(KeyboardDateTimePicker);