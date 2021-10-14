import '../CSS/myNav.scss';
import NameFlag from './NameFlag.jsx';
import NavLinks from './NavLinks.jsx';

function MyNav() {
  return (
      <div className="nav">
        <div class="centerAll">
          <NameFlag />
          <NavLinks />
        </div>
      </div>
  );
}
export default MyNav; 
