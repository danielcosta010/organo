import './Colaborador.css'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }
    return (
    <div className="colaborador">
        <MdDeleteForever 
            size={25} 
            className="delete" 
            onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                {colaborador.favorito 
                    ? <AiFillHeart color="#ff0000" size={25} onClick={favoritar} /> 
                    : <AiOutlineHeart size={25} onClick={favoritar} 
                />}
            </div>
        </div>
    </div>)
}

export default Colaborador