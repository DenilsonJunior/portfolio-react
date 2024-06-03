import './GlobalStyles.css';
import Contato from './componentes/contatos/Contato.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Header from './componentes/header/Header.jsx';
import Line from './componentes/line/Line.jsx';
import Projetos from './componentes/projetos/Projetos.jsx';
import QuemSouEu from './componentes/quemSou/QuemSouEu.jsx';
import Tecnologias from './componentes/tecnologias/Tecnologias.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <QuemSouEu />
                <section className='bg-sections'>
                    <Tecnologias />
                    <Projetos />
                </section>
                <Line />
                <Contato />
                <Footer />
            </main>
        </>
    );
}

export default App;
