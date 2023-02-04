import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='rodape' style={{ backgroundImage: 'url(/imagens/fundo.png)'}}>
      <section>
        <ul className='rodape__lista'>
          <li>
            <a href="twitter"><img src='/imagens/twitter.png' alt='Logo twitter' /></a>
          </li>
          <li>
            <a href="instagram"><img src='/imagens/instagram.png' alt='Logo instagrem' /></a>
          </li>
          <li>
            <a href="facebook"><img src='/imagens/facebook.png' alt='Logo facebook' /></a>
          </li>
        </ul>

      </section> 
      <section>
      <img src='/imagens/logo.png' alt='Imagem de fundo rodape' />
      </section>
      <section>
        <p>
          Desenvolvido por Daniel Costa, para curso de react Alura
        </p>
      </section>
    </footer>
  )
}

export default Rodape