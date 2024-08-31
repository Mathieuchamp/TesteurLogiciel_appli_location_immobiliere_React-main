import { Link } from 'react-router-dom';
import './Error.css'

function ErrorComponents() {
    return(
        
        <div className='erreurContainer'>
            <span>404</span>
            <h4>Oups ! La page que vous demandez n'existe pas.</h4>
            <p><Link to={"/home"}>Retourner sur la page d'accueil</Link></p>
        </div>
    )
    
}

export default ErrorComponents