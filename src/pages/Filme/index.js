import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router'
import api from '../../service/api';
import './filme-info.css'


export default function Filme() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get(`r-api/?api=filmes/${id}`);
            console.log(response)
            if (response.data.lenght === 0) {
                //Tentou acessar com um id que nao existe
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }
        loadFilmes();

        return () => {

        }
    }, [history, id]);

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando seu filme ...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}
            <div className="botoes">
                <button onClick={() => { }}>Salvar</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}