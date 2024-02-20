import React, { useState, useEffect } from 'react';
import '../Styles/CircularProgressBar.scss';

interface CircularProgressBarProps {
  CurrentValue: number;
  StartValue: number;
  EndValue: number;
  LowValue: number;
  HighValue: number;
  Units: string;
  InnerColor:string;
  TextColor:string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  CurrentValue,
  StartValue,
  EndValue,
  LowValue,
  HighValue,
  Units,
  InnerColor,
  TextColor
}) => {
  const [ShowCurrentValue, setCurrentValue] = useState(0);
  const [BarColor, setBarColor] = useState('#e74c3c');
  const [DashOffSet,setDashOffSet] = useState(0);
  //const [AnimationTime,setAnimationTime] = useState(30);

  useEffect(() => {
    HandelCurrentValue(CurrentValue);
    UpdateDashOffset(CurrentValue);
    //CalculateAnimationTime(CurrentValue);
  }, [CurrentValue]);

  const HandelCurrentValue = (CurrentValue: number) => {
    setCurrentValue(0);
    let Count:number = 0;
    const IntervalId:number = setInterval(() => {
      if(Count == CurrentValue ){
        clearInterval(IntervalId);
      }else{
        Count += 1;
        setCurrentValue(Count);
        UpdateBarColor(Count);
      }
    },30)
  };

  // const CalculateAnimationTime = (value:number) => {
  //   const IntervalTime = 25; 
  //   const AnimationDuration = (value / 100) * IntervalTime * 1000;
  //   setAnimationTime(AnimationDuration);
  // }

  const UpdateDashOffset = (value:number) => {
    const percentage = value /100;
  // Calculate the dash offset
  const DashOffCal = Math.floor(472 - 472 * percentage);

    setDashOffSet(DashOffCal);
  }

  const UpdateBarColor = (value: number) => {
    let color: string;
  
    if (value >= HighValue) {
      // Above or equal to HighValue, set to green
      color = '#2ecc71';
    } else if (value <= LowValue) {
      // Below or equal to LowValue, set to red
      color = '#e74c3c';
    } else {
      // Calculate the ratio of ShowCurrentValue between LowValue and HighValue
      const ratio = (value - LowValue) / (HighValue - LowValue);
  
      // Interpolate between red and green based on the ratio
      const red = Math.floor(255 * (1 - ratio));
      const green = Math.floor(255 * ratio);
      color = `rgb(${red}, ${green}, 0)`;
    }
  
    setBarColor(color);
  };

  console.log(DashOffSet);

  return (
    <div className="progress-bar">
      <div className="outer">
        <div className="inner" style={{ backgroundColor: InnerColor , border:InnerColor }}>
          <div className="current-value" style={{color:TextColor}}>{ShowCurrentValue}{Units}</div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <circle cx="80" cy="80" r="70" strokeLinecap="round" strokeDasharray="472" style={{ '--BarColor': BarColor, '--DashOffSet': DashOffSet } as React.CSSProperties} />
      </svg>
    </div>
  );
};

export default CircularProgressBar;