import logo from './logo.svg';
import './App.css';
import Checker from './components/checker/Checker';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [myCount, setMyCount] = useState();
  const [curChecker, setCurChecker] = useState(null);
  const [futureChecker, setFutureChecker] = useState();
  const [clickCounter, setClickCounter] = useState(0);

  const masterArray = ['','O',' ','O',' ','O',' ','O', 
  'O',' ','O',' ','O',' ', 'O', ' ', 
  ' ','O',' ','O',' ','O',' ','O',' ',
  ' ',' ',' ',' ',' ',' ',' ', 
 ' ',' ',' ',' ',' ',' ',' ',' ',
 'X',' ','X',' ','X',' ','X', ' ',
 ' ','X',' ','X','','X',' ', 'X',
 'X',' ','X',' ','X',' ','X', ' '
 ];

  useEffect(() => {
    // console.log(masterArray[0])
    setCurChecker(curChecker)
  }, [masterArray, curChecker, futureChecker]);

  


  const masterArr = [0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,
                    51,52,53,54,55,56,57,58,59,60,
                    61,62,63]

  const binArray = [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,]

  function xClick(e){
    // alert('hello x')
    console.log(e)
    setCurChecker(e)
    if(clickCounter === 0){
      console.log('first click');
      setClickCounter(1)
    } else if (clickCounter === 1){
      console.log('second click')
    }
    setClickCounter(1)
    if(curChecker === null){
      setCurChecker(e)
    } else if (curChecker < 0) {
      setFutureChecker(e);
      console.log(curChecker)
    }
    checkSquares(e, 'X')

    if(futureChecker - curChecker === 7 || futureChecker - curChecker === 9){
      alert('valid move')
    }
  }

  function oClick(e){
    // alert('hello o')
    if(clickCounter === 0){
      console.log('first click');
      setClickCounter(1)
    } else if (clickCounter === 1){
      console.log('second click')
    }
    checkSquares(e, 'O')

    console.log(e);
  }
  function blankClick(e){
    // alert('hello o')
    if(clickCounter === 0){
      console.log('first click');
      setClickCounter(1)
    } else if (clickCounter === 1){
      console.log('second click')
      setClickCounter(0)
    }
    checkSquares(e, 'blank')

    console.log(e);
  }

  function checkSquares(e, symbol){
    console.log(e)
    console.log(symbol)
    console.log(curChecker)
    console.log(futureChecker)
    if(curChecker - futureChecker === 7 || curChecker - futureChecker === 9){
      alert('vaid move')
    }
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
                <Checker key={check} xClick={xClick} oClick={oClick} blank={blankClick} check={check} symbol={masterArray[check]} bin={binArray[check]}/>
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
