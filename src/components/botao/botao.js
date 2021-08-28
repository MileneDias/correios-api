import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from './style';

export default function Botao(){
    const classes = useStyles();

    return(
        <Container>
            <div className={classes.root}>
                <Button variant="contained" color="primary">
                    Enviar
                </Button>
            </div>
        </Container>
    );
}