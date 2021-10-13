import '../CSS/myNav.css';
import NameFlag from './NameFlag.js';
import NavLinks from './NavLinks.js';

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