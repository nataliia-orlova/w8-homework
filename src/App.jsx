import './App.css';
import Button from './components/Button';
import withColor from './components/WithColor';

function App() {
    const ButtonWithColor = withColor(Button);

    return (
        <div className='btn'>
            <ButtonWithColor />
        </div>
    );
}

export default App;
