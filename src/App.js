import logo from './logo.svg';
import './App.css';
import Checker from './components/checker/Checker';
import { useRef, useState } from 'react';

function App() {

  const [myCount, setMyCount] = useState();
  
  const masterArray = ['','O',' ','O',' ','O',' ','O', 
                       'O',' ','O',' ','O',' ', 'O', ' ', 
                       ' ','O',' ','O',' ','O',' ','O',' ',
                       ' ',' ',' ',' ',' ',' ',' ', 
                      ' ',' ',' ',' ',' ',' ',' ',' ',
                      'X',' ','X',' ','X',' ','X', ' ',
                      ' ','X',' ','X','','X',' ', 'X',
                      'X',' ','X',' ','X',' ','X', ' '
                      ];

  const masterArr = [0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,
                    51,52,53,54,55,56,57,58,59,60,
                    61,62,63]

  const binArray = [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,]

  function xClick(e){
    alert('hello x')
  }

  function oClick(e){
    alert('hello o')
  }


  return (
    <>
    <div className='mainContain'>
      <div className='mainContain2'>

        {masterArr.map((check) => {
          // console.log(check)
          return (
            <>
              <div className='testCheck' key={check}>
                <Checker key={check} xClick={xClick} oClick={oClick} check={check} symbol={masterArray[check]} bin={binArray[check]}/>
              </div>
            </>
            )
          })
        }
      </div>
    </div>

    </>
  );
}

export default App;
