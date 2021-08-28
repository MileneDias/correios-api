import useStyles from './style';
import Container from '@material-ui/core/Container';

export default function Titulo(){
    const classes = useStyles();

    return(
        <Container fixed>
            <div class="row" >
                <div class="col-2" className={classes.cabecalho}> 
                    <img src="https://caderninhodeideias.files.wordpress.com/2014/05/logo-correios-1.jpg" alt="Correios" className={classes.logotipo}></img>
                </div>
                <div class="col-10" ></div>
            </div>
            <div>
                <h3 className={classes.subtitulo}>Destino do Pacote</h3>
            </div>
        </Container>
    );
}