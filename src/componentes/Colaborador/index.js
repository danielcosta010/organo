import './Colaborador.css'
import { MdDeleteForever } from 'react-icons/md'

const Colaborador = ({colaborador, nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (
    <div className='colaborador'>
        <MdDeleteForever 
            size={25}
            className='delete'
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador