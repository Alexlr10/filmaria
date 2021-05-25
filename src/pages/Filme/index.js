import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import api from '../../service/api';
import './filme-info.css'


export default function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get(`r-api/?api=filmes/${id}`);
            setFilme(response.data);
            setLoading(false);
        }
        loadFilmes();
    }, [id]);

    if (loading) {
        return (
            <div className="filme=info">
                <h1>Carregando seu filme ...</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 className="filme=info">PAGINA DETALHES</h1>
        </div>
    )
}