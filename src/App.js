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
    setClickCounter(clickCounter)
  }, [masterArray, curChecker, futureChecker, clickCounter]);

  


  const masterArr = [0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,
                    51,52,53,54,55,56,57,58,59,60,
                    61,62,63]

  const binArray = [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,]

  function xClick(checkNum, color){
    console.log(color)
      // alert('hello x')
      console.log(checkNum);
      console.log(clickCounter)
      
      if(clickCounter === 0){
        console.log('first click');
        setCurChecker(checkNum)
        setFirstSymbol('X')
        setClickCounter(1);

      } else if (clickCounter === 1){
        console.log('second click');
        console.log(checkNum)
        setFutureChecker(checkNum)
        checkSquares('X', checkNum, color);
      }

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

  function blankClick(checkNum, color){

    console.log(checkNum);
    console.log(clickCounter)

    var symbol = 'b'

    if(clickCounter === 0){
      console.log('first click');
      setClickCounter(0);
      alert('please click one of your players')
    } else if (clickCounter === 1){
      console.log('second click - in blank');
      checkSquares(symbol, checkNum, color);
    }

  }

  function checkSquares(symbol, checkNum, color){

    var moveTo = checkNum;
    var curSym = symbol;
    var futureSym = checkNum;
    var tempColor = color;

    // console.log(masterArray[curChecker])
    // console.log(masterArray[checkNum])
    // console.log(curSym === futureSym)
    if(firstSymbol === 'X' && symbol === 'X'){
      console.log('inside double x')
      alert('please make a valid move')
      swapNums(checkNum)
    }
    console.log(color)
    console.log(symbol)
    console.log(moveTo)
    console.log(curChecker)
    if(color === 'black'){
      console.log('hello black')
    }
    if (firstSymbol === 'X' && symbol === 'b'){
      if(curChecker - moveTo === 7 || curChecker - moveTo === 9){
        alert('valid move')
        swapNums(checkNum)
        //they clicked 2 buttons, now have both values (where they start and where they want to go)
        //checker numbers also represent index in array
        //compare the checker numbers, if its a valid move, 
      } 
      if(moveTo > curChecker){
        alert('please pick a valid move')
        resetClick()
      } 
      if(moveTo < curChecker && color === 'black'){
        alert('please pick a valid move')
        resetClick()
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

  function resetClick(){
    let newArr = [...masterArray];
    setMasterArray(newArr);
    setClickCounter(0);
  }


  return (
    <>
    <div className='mainContain' key={Math.random()} >
      <div className='mainContain2' key={Math.random()} >

        {masterArr.map((check, i) => {
          // console.log(check)
          return (
            <>
              <div className='testCheck' key={Math.random()}>
                <Checker key={Math.random()}  xClick={xClick} oClick={oClick} blank={blankClick} check={check} symbol={masterArray[check]} bin={binArray[check]}/>
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
