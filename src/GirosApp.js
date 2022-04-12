import './GirosApp.css';
import Footer from './components/Footer';
//import GirosContainer from './components/GirosContainer';
import NavBar from './components/NavBar';
import SolicitudCabeceraContainer from './components/SolicitudCabeceraContainer';

function GirosApp() {
  return (
    <>
    <NavBar />
    {/*<GirosContainer />*/}
    <SolicitudCabeceraContainer idCabecera={1} />
    <Footer />
    </>
  );
}

export default GirosApp;
