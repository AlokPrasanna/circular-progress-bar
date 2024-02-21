import './App.css';
import CircularProgressBar from './Comonents/CircularProgressBar/CircularProgressBar';

function App() {

  return (
    <div className='body'>
      <div>
        <CircularProgressBar 
          CurrentValue={5} 
          StartValue={0}
          EndValue={100} 
          LowValue={20} 
          HighValue={80} 
          Units={"%"} 
          InnerColor={"#3498db"} 
          TextColor={"#ecf0f1"}
          Icon={"/Icons/battery1.svg"}
          Title={"Battery Persentage"}/>
      </div>
      <div>
        <CircularProgressBar 
          CurrentValue={75.6} 
          StartValue={10} 
          EndValue={100} 
          LowValue={20} 
          HighValue={80} 
          Units={" "} 
          InnerColor={"#3498db"} 
          TextColor={"#000000"}
          Icon={"/Icons/items1.svg"}
          Title={"Items Count"}/>
      </div>


      <div>
        <CircularProgressBar 
          CurrentValue={50} 
          StartValue={0} 
          EndValue={50} 
          LowValue={20} 
          HighValue={80} 
          Units={"V"} 
          InnerColor={"#3498db"} 
          TextColor={"#ecf0f1"}
          Icon={"/Icons/voltage1.svg"}
          Title={"Voltage"}/>
      </div>
    </div>
  )
}

export default App
