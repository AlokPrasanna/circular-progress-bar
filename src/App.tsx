import './App.css';
import CircularProgressBar from './Comonents/CircularProgressBar';

function App() {

  return (
    <div className='body'>
      <CircularProgressBar 
        CurrentValue={90} 
        StartValue={0} 
        EndValue={100} 
        LowValue={20} 
        HighValue={80} 
        Units={"V"} 
        InnerColor={"#2c3e50"} 
        TextColor={"#ecf0f1"}/>
    </div>
  )
}

export default App
