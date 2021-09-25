import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './style';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

//import api from '../../services/api';

export default function Campos(){
    const classes = useStyles();

    return(
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Rua" />
                <br />
                <TextField type="number" id="standard-basic" label="Número da Casa" />
                <br />
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-native-simple">UF</InputLabel>
                    <Select
                        native
                        value
                        onChange
                        inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" ng-repeat="item in ufList" />
                        <option value={10}></option>
                    </Select>
                </FormControl>
                <br />
                <TextField type="number" id="standard-basic" label="Peso do Pacote" />
                <br />
                <TextField type="number" id="standard-basic" label="Valor da Entrega" />
            </form>
        </Container>
    );
}