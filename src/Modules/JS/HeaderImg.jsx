import '../CSS/HeaderImg.scss';
import logo from '../../images/header.jpg';

function HeaderImg() {
    return(
        <img src={logo} className="HeaderImg" alt="Kermit"></img>
    );
}
export default HeaderImg;