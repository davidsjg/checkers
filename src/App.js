import logo from './logo.svg';
import './App.css';
import Checker from './components/checker/Checker';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [myCount, setMyCount] = useState();
  const [curChecker, setCurChecker] = useState(null);
  const [futureChecker, setFutureChecker] = useState();
  const [clickCounter, setClickCounter] = useState(0);
  const [firstSymbol, setFirstSymbol] = useState();
  const [masterArray, setMasterArray] = useState(['','O',' ','O',' ','O',' ','O', 
                                                  'O',' ','O',' ','O',' ', 'O', ' ', 
                                                  ' ','O',' ','O',' ','O',' ','O',' ',
                                                  ' ',' ',' ',' ',' ',' ',' ', 
                                                ' ',' ',' ',' ',' ',' ',' ',' ',
                                                'X',' ','X',' ','X',' ','X', ' ',
                                                ' ','X',' ','X','','X',' ', 'X',
                                                'X',' ','X',' ','X',' ','X', ' '
 ]);

//   const masterArray = ['','O',' ','O',' ','O',' ','O', 
//   'O',' ','O',' ','O',' ', 'O', ' ', 
//   ' ','O',' ','O',' ','O',' ','O',' ',
//   ' ',' ',' ',' ',' ',' ',' ', 
//  ' ',' ',' ',' ',' ',' ',' ',' ',
//  'X',' ','X',' ','X',' ','X', ' ',
//  ' ','X',' ','X','','X',' ', 'X',
//  'X',' ','X',' ','X',' ','X', ' '
//  ];

  useEffect(() => {
    // console.log(masterArray[0])
    setCurChecker(curChecker)
    setFutureChecker(futureChecker)
  }, [masterArray, curChecker, futureChecker]);

  


  const masterArr = [0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,
                    51,52,53,54,55,56,57,58,59,60,
                    61,62,63]

  const binArray = [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,]

  function xClick(checkNum){
    // alert('hello x')
    console.log(checkNum);
    
    if(clickCounter === 0){
      console.log('first click');
      setCurChecker(checkNum)
      setFirstSymbol('X')
    } else if (clickCounter === 1){
      console.log('second click');
      console.log(checkNum)
      setFutureChecker(checkNum)
      checkSquares('X', checkNum);
    }


    setClickCounter(1);


  }

  function oClick(checkNum){
    // alert('hello o')
    if(clickCounter === 0){
      console.log('first click');
      setClickCounter(1)
    } else if (clickCounter === 1){
      alert('please click a valid moves')
    }
    checkSquares('O')

    console.log(checkNum);
  }
  function blankClick(checkNum){
    if(clickCounter === 0){
      console.log('first click');
      setClickCounter(0);
      alert('please click one of your players')
    } else if (clickCounter === 1){
      console.log('second click - in blank');
      // console.log(checkNum)
      setFutureChecker(checkNum)
      checkSquares(checkNum);
    }
    var symbol = ' '
    checkSquares(symbol, checkNum)

    // console.log(checkNum);
  }

  function checkSquares(symbol, checkNum){
    console.log(symbol);
    console.log(curChecker);
    var moveTo = checkNum;

    console.log(masterArray[curChecker])
    console.log(masterArray[checkNum])
    if(curChecker === checkNum){
      console.log('inside double x')
      alert('please make a valid move')
      setClickCounter(0)
    }

    if (firstSymbol === 'X' && symbol === ' '){
      if(curChecker - moveTo === 7 || curChecker - moveTo === 9){
        alert('valid move')
        swapNums(checkNum)
        //they clicked 2 buttons, now have both values (where they start and where they want to go)
        //checker numbers also represent index in array
        //compare the checker numbers, if its a valid move, 
      }
    }


  }

  function swapNums(checkNum){
    const destination = checkNum;
    const location = curChecker;
    let newArr = [...masterArray]

    let temp = newArr[location];
    newArr[location] = newArr[destination];
    newArr[destination] = temp;

    setMasterArray(newArr);

    setClickCounter(0);


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
