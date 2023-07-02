import Home from './home';
import Navbar from './navbar';
import './styles.css';

export default function App() {
  return (
    <div className={'App'}>
      <Navbar />
      <div className={'content'}>
        <Home />
      </div>
    </div>
  );
}
