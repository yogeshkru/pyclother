import React, { useState,  createContext } from 'react';
import StepHeader from './StepHeader';




function StepContent() {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState('');

  return (
    <div>
      
        <StepHeader 
          currentStep={currentStep} 
          setStep={setStep} 
          userData={userData} 
          setUserData={setUserData} 
          finalData={finalData} 
          setFinalData={setFinalData} 
        />
      
    </div>
  );
}

export default StepContent;
