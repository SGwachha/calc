import { usestate } from 'react';

function App() {
  const [calc, setCalc] = usestate("");
  const [result, setResult] = usestate("");
  
  const ops = ['/', '*', '-', '+', '.'];

  const updateCalc = value => {
    setCalc(calc + value)
  }

  const CreateDigits = () => {
    const digits = [];
    for(let i = 1; i < 10; i++){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>(0)</span> : ''} {calc || "0"}
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>

          <button>DEL</button>
        </div>
        <div className="digits">
          { CreateDigits() }
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
