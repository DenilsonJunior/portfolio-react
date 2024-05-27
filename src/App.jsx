import './GlobalStyles.css';
import Contato from './componentes/contatos/Contato.jsx';
import Header from './componentes/header/Header.jsx';
import QuemSouEu from './componentes/quemSou/QuemSouEu.jsx';
import Tecnologias from './componentes/tecnologias/Tecnologias.jsx';

function App() {
    return (
        <>
            <Header />
            <QuemSouEu />
            <Tecnologias />
            <Contato />
        </>
    );
}

export default App;
