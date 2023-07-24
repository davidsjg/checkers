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
 const [exArray, setExArray] = useState([]);
 const [ohArray, setOhArray] = useState([]);

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

  function oClick(checkNum, color){

    if(clickCounter === 0){
      console.log('first click');
      setCurChecker(checkNum)
      setFirstSymbol('O')
      setClickCounter(1);

    } else if (clickCounter === 1){
      console.log('second click');
      console.log(checkNum)
      setFutureChecker(checkNum)
      checkSquares('O', checkNum, color);
    }

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
    if((firstSymbol === 'X' && symbol === 'X') || (firstSymbol === 'O' && symbol === 'O')){
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
        // alert('valid move')
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

    if (firstSymbol === 'O' && symbol === 'b'){
      if(moveTo - curChecker === 7 || moveTo - curChecker === 9){
        // alert('valid move')
        swapNums(checkNum)
        //they clicked 2 buttons, now have both values (where they start and where they want to go)
        //checker numbers also represent index in array
        //compare the checker numbers, if its a valid move, 
      } 
      if(moveTo < curChecker){
        alert('please pick a valid move')
        resetClick()
      } 
      if(moveTo > curChecker && color === 'black'){
        alert('please pick a valid move')
        resetClick()
      } 
    }

    if(firstSymbol === 'O' && symbol === 'X'){
        overTakeO(checkNum)
    }

    if(firstSymbol === 'X' && symbol === 'O'){
        overTakeX(checkNum)
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

  function overTakeO(checkNum){
    //destination = X
    const destination = checkNum;
    const location = curChecker;
    let newArr = [...masterArray]

    //temp = checker# value in array at curChecker
    let temp = newArr[destination];
    newArr[destination] = newArr[location];
    newArr[location] = ' ';
    exArray.push('X');

    setMasterArray(newArr);

    setClickCounter(0);
  }

  function overTakeX(checkNum){
    //destination = X
    const destination = checkNum;
    const location = curChecker;
    let newArr = [...masterArray]

    //temp = checker# value in array at curChecker
    let temp = newArr[destination];
    newArr[destination] = newArr[location];
    newArr[location] = ' ';

    let tempOarr = [];
    tempOarr.push('O');
    setOhArray(tempOarr);

    setMasterArray(newArr);

    setClickCounter(0);
  }

  console.log(exArray)

  const dispBlackPieces = exArray.map((piece) =>
      <>
        {piece}
      </>
    )

  return (
    <>
    <div className='mainContain' >
      <div className='oPieces'>
        {dispBlackPieces}
      </div>
      <div className='mainContain2' >

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
      <div className='xPieces'>
        {ohArray.map((piece) => {
          return (
            {piece}
          )
        })}
      </div>
    </div>


    </>
  );
}

export default App;
