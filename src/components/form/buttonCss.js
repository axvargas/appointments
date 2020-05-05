import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
export default withStyles({
    root: {
        color: 'white',
        border: '2px solid white',
        '&:hover': {

            backgroundColor: 'rgba(0, 0, 10, 0.4)',
        },
        marginTop: 80,
        width: '50%'
    },

})(Button);
