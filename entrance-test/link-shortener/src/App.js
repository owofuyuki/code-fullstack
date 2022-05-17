import './App.css';
import LinkShortener from './LinkShortener.js';

function App() {
  return (
    <div className="App">
      <h1 className="title">The <strong>privacy-friendly</strong> URL shortener</h1>
      <LinkShortener />
      <p>By using <strong>shrtcode</strong> you agree to our <strong>Terms of Service</strong>.</p>
    </div>
  );
}

export default App;
