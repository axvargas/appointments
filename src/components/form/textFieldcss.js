import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

})(TextField);