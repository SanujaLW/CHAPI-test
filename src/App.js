import './App.css'
import { Link } from "react-router-dom";
import { loadOnce } from 'credential-handler-polyfill';

let polyfill;

const registerWallet = async () => {

  const MEDIATOR = 'https://authn.io/mediator' + '?origin=' +
    encodeURIComponent(window.location.origin);

    if(!polyfill) {
      polyfill = await loadOnce(MEDIATOR);
    }

    const {CredentialManager, CredentialHandlers} = polyfill;

    const result = await CredentialManager.requestPermission();
    if(result !== 'granted') {
      throw new Error('Permission denied.');
    }

    // get credential handler registration
    const registration = await CredentialHandlers.register('/credential-handler');
}

function App() {
  registerWallet();
  return (
    <div className="App">
      <Link to="/issuer">Issuer</Link>
      <Link to="/verifier">Verifier</Link>
    </div>
  );
}

export default App;
