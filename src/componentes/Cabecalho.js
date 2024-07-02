

function Cabecalho() {
  return (
  
    <div className="container">
    <div className="nav-container"> 
        <div className="brand">
            <a href="https://sodiedoces.com.br/">
                
                <img id="img-logo" src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/logo-sodie.png" alt="Sodiê Doces"/></a>
        </div>
        <nav>
            <div className="nav-mobile"><a id="nav-toggle"><span></span></a></div>
            <ul className="nav-list">
                <li><a href="https://sodiedoces.com.br/sobre">A Sodiê</a></li>
                <li><a id="abrirsub" href="#!">Produtos <i className="fas fa-caret-down" aria-hidden="true"></i> </a>
                    <ul className="nav-dropdown">
                        <li><a href="https://sodiedoces.com.br/bolos">Bolos</a></li>
                        <li><a href="https://sodiedoces.com.br/salgados">Salgados</a></li>
                        <li><a href="https://sodiedoces.com.br/kit-festa/escolha-seu-kit-festa">Kit Festa</a></li>
                        <li><a href="https://sodiedoces.com.br/doces">Doces</a></li>
                        <li><a href="https://sodiedoces.com.br/tortas-doces">Tortas Doces</a></li>
                        <li><a href="https://sodiedoces.com.br/bebidas">Bebidas</a></li>
                        <li><a href="https://sodiedoces.com.br/balas-de-coco">Balas de Coco</a></li>
                    </ul>
                </li>
                <li><a href="https://sodiedoces.com.br/lojas">Lojas</a></li>
                <li><a href="https://sodiedoces.com.br/contato">Contato</a></li>
            </ul>
        </nav>
        <div className="brand2 center">
            <div className="nav-app center btn-marrom">
                <p>Peça no app</p>
                <a href="https://play.google.com/store/apps/details?id=com.sodiedoces" target="_blank"><i className="fab fa-google-play" aria-hidden="true"></i></a>
                <a href="https://apps.apple.com/br/app/sodi%C3%AA-doces-oficial/id1557040152" target="_blank"><i className="fab fa-apple" aria-hidden="true"></i></a>
            </div>

            <a href="https://suafranquia.sodiedoces.com.br/oportunidade/" target="_blank" className="nav-franqueado center btn-marrom" role="button">Seja um franqueado</a>
            <ul className="nav-social ulflex">
                <li><a href="https://instagram.com/SodieDoces" target="_blank" rel="noopener"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://www.facebook.com/sodiedocesoficial" target="_blank" rel="noopener"><i className="fab fa-facebook-square" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
</div>

  );
}

export default Cabecalho;
