import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    colorPrimary: {
        backgroundColor: '#00695C',
    },
    barColorPrimary: {
        backgroundColor: '#28a745',
    }
  }));

export default function Loader({ isLoading }) {
    const classes = useStyles();

    return (
      <div className={classes.root} style={{visibility: isLoading ? 'visible' : 'hidden' }}>
        <LinearProgress color="primary" classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
      </div>
    );
}
