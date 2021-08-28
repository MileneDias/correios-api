import Titulo from '../components/titulo/titulo';
import Campos from '../components/campos/campos';
import Botao from '../components/botao/botao';

export default function Home(){
    document.title = "Correios";

    return (
        <div>
            <Titulo />
            <Campos />
            <Botao />
        </div>
    );
}