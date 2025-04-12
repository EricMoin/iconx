import '../styles/navbar.scss';
import Logo from '@assets/icons/logo.svg?url';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Switch } from '@mui/material';
export function NavBar() {
  return (
    <div className="navbar">
      <div className="slogan">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="title">IconX</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Switch />
          </li>
          <li>
            <a href="https://github.com/EricMoin/iconx.git">
              Docs
            </a>
          </li>
          <li>
            <a href="https://github.com/EricMoin/iconx.git">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
