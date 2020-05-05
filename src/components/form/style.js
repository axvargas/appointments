import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    label:{
        color: 'white !important',
        padding: 3,
    },

    textField: {
        background: 'white !important',
        width: 400,
        marginBottom: 15,

    },

    input: {
        color: "black",
    },

    button: {
        marginTop: 15,
        background: 'white',
        color: 'white !important',
        "&:hover": {
            background: "#6e6a6a !important",
        },

        border: '1px solid white !important',
        '& .MuiButton-outlined': {
            border: '1px solid white',
            padding: '5px 15px',
            color: 'white',
            
        }
    },
});


