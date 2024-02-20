import './App.css';
import CircularProgressBar from './Comonents/CircularProgressBar';

function App() {

  return (
    <div className='body'>
      <CircularProgressBar 
        CurrentValue={100} 
        StartValue={0} 
        EndValue={100} 
        LowValue={20} 
        HighValue={80} 
        Units={" "} 
        InnerColor={"#2c3e50"} 
        TextColor={"#ecf0f1"}
        Icon={""}
        Title={"Battery Persentage"}/>
    </div>
  )
}

export default App
