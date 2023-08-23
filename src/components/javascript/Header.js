import '../css/header.css';
import '../css/root.css';
import logo from '../css/images/logo_ohne_hintergrund.png';


const Header = () => {


  return (
    <div className='header-container'>
        <div className='header-1'>
          <h1>
            Indoorspielplatz<br/><span>Piratenland Baden-Baden</span>
          </h1>
        </div>
      <br/>
      <div className='header'>
        <div className='centered-text'>
          <br/>
          <div className='header-2'>
            <h2>
              Paulo und Guisy´s <br />Traumwelten
            </h2>
          </div>
        </div>
        <picture>
          <img src={logo} alt='logo' />
        </picture>
      </div>
    </div>
  );
};

export default Header;
