import './Style.css'

function MainPage(){
    return (
        <div className="conteiner">
            <div className='textoMain'>
            <h1>
                Chavosos de SP            
            </h1>
            <p>Confira nosso starter-pack para virar cria</p>
            <div className='button'>
            <h2> Quero ser um!</h2>
            </div>
            </div>
            <img width={500} height={500} src="https://rapgol.com.br/wp-content/uploads/2023/07/Kyan-e-Mu540-lancam-o-EP-Um-Quebrada-Inteligente.webp" alt="" />
        </div>
    );
}

export default MainPage;
