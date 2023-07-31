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
 const [exTurn, setExTurn] = useState(true)
 const [ohTurn, setOhTurn] = useState(false)
 const [turnCount, setTurnCount] = useState();


  useEffect(() => {
    setCurChecker(curChecker)
    setFutureChecker(futureChecker)
    setClickCounter(clickCounter)
  }, [masterArray, curChecker, futureChecker, clickCounter, exArray, ohArray]);

  


  const masterArr = [0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,
                    51,52,53,54,55,56,57,58,59,60,
                    61,62,63]

  const binArray = [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,]

  //FUNCTION xCLICK
  function xClick(checkNum, color){

      if(clickCounter === 0){
        if(ohTurn){
          alert('not your turn!')
          resetClick()
          return;
        }
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

  //FUNCTION oCLICK
  function oClick(checkNum, color){

    if(clickCounter === 0){
      if(exTurn){
        alert('not your turn!')
        resetClick()
        return
      }
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

  //FUNCTION BlankCLICK
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

  //FUNCTION xxCLICK
  function xxClick(checkNum, color) {
      if(ohTurn){
        alert('not your turn!')
        resetClick()
        return;
      }

    if(clickCounter === 0){

      console.log('first click');
      setCurChecker(checkNum)
      setFirstSymbol('XX')
      setClickCounter(1);

    } else if (clickCounter === 1){
      console.log('second click');
      console.log(checkNum)
      checkSquares('XX', checkNum, color);
    }
  }

  //FUNCTION ooCLICK
  function ooClick(checkNum, color){
    if(clickCounter === 0){
      if(exTurn){
        alert('not your turn!')
        resetClick()
        return;
      }
      console.log('first click');
      setCurChecker(checkNum)
      setFirstSymbol('OO')
      setClickCounter(1);

    } else if (clickCounter === 1){
      console.log('second click');
      console.log(checkNum)
      setFutureChecker(checkNum)
      checkSquares('OO', checkNum, color);
    }  
  }

  function checkSquares(symbol, checkNum, color){

    var moveTo = checkNum;
    var curSym = symbol;
    var futureSym = checkNum;
    var tempColor = color;

    if((firstSymbol === 'X' && symbol === 'X') || (firstSymbol === 'O' && symbol === 'O') || (firstSymbol === 'XX' && symbol === 'X') ){
      alert('please make a valid move')
      resetClick();
    }

    if (firstSymbol === 'X' && symbol === 'b'){
      if(curChecker - moveTo === 7 || curChecker - moveTo === 9){
        swapNums(checkNum)
      } 
      if(curChecker - moveTo === 14 || curChecker - moveTo === 18){
        var myTemp = curChecker - 7;
        var myTemp2 = curChecker - 9;
        jumpX(checkNum)
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
        
        console.log(checkNum)
        swapNums(checkNum)
      } 
      if(moveTo - curChecker  === 14 || moveTo - curChecker === 18){
        var myTemp = curChecker - 7;
        var myTemp2 = curChecker - 9;
        console.log(checkNum)
        jumpO(checkNum)
      } 
      if(moveTo < curChecker){
        alert('please pick a valid move')
        resetClick()
      } 
      if(color === 'black'){
        alert('please pick a valid move')
        resetClick()
      } 
    }

    if (firstSymbol === 'XX' && symbol === 'b'){
      if(curChecker - moveTo === 7 || curChecker - moveTo === 9){
        
        swapNums(checkNum)
        return;
      } 
      if(curChecker - moveTo === -7 || curChecker - moveTo === -9){
        
        swapNums(checkNum)
        return;
      } 
      if(curChecker - moveTo === 14 || curChecker - moveTo === 18){
        
        jumpXX(checkNum)
        return;
      } 
      if(curChecker - moveTo === -14 || curChecker - moveTo === -18){
        
        console.log('xx backwards')
        console.log(checkNum)
        jumpXX(checkNum)
        return;
      } 
      if(color === 'black'){
        alert('please pick a valid move')
        resetClick()
      } 
    }


    if (firstSymbol === 'OO' && symbol === 'b'){
      if(curChecker - moveTo === 7 || curChecker - moveTo === 9){
        
        swapNums(checkNum)
        return;
      } 
      if(curChecker - moveTo === -7 || curChecker - moveTo === -9){
        
        swapNums(checkNum)
        return;
      } 
      if(curChecker - moveTo === 14 || curChecker - moveTo === 18){
        
        jumpOO(checkNum)
        return;
      } 
      if(curChecker - moveTo === -14 || curChecker - moveTo === -18){
        
        console.log(checkNum)
        jumpOO(checkNum)
        return;
      } 
      if(color === 'black'){
        alert('please pick a valid move')
        resetClick()
      } 
    }
    
    if((firstSymbol === 'XX' && symbol ==='b') && (color !== 'black')){
      swapNums(checkNum)
    }
    if((firstSymbol === 'XX' && symbol ==='b') && (color === 'black')){
      alert('please pick a valid move')
    }
    if((firstSymbol === 'OO' && symbol ==='b') && (color !== 'black')){
      swapNums(checkNum)
    }
    if((firstSymbol === 'OO' && symbol ==='b') && (color === 'black')){
      alert('please pick a valid move')
    }
    if(firstSymbol === 'O' && symbol === 'OO'){
      overTakeO(checkNum)
    }
    if(firstSymbol === 'X' && symbol === 'OO'){
      console.log('attempting to take OO king')
      overTakeX(checkNum)
    }
  }

  function swapNums(checkNum){
    const destination = checkNum;
    const location = curChecker;
    let newArr = [...masterArray]
    console.log('inside swapNums')

    console.log(checkNum)

    if((checkNum < 8) && firstSymbol === 'X'){
      console.log('inside less than 8')
      newArr[checkNum] = 'XX';
      newArr[curChecker] = ' ';
    } else if (checkNum > 55 && firstSymbol === 'O') {
      console.log('inside greater than 55')
      newArr[checkNum] = 'OO';
      newArr[curChecker] = ' ';
    }else if (masterArray[curChecker] === 'O') {
      newArr[curChecker] = ' ';
      newArr[checkNum] = 'O';
    } 
    else if (masterArray[curChecker] === 'X') {
      newArr[curChecker] = ' ';
      newArr[checkNum] = 'X';
    }
    else if (masterArray[curChecker] === 'XX') {
      newArr[curChecker] = ' ';
      newArr[checkNum] = 'XX';
      console.log('inside xx clicked second time')
    }
    else if (masterArray[curChecker] === 'OO') {
      newArr[curChecker] = ' ';
      newArr[checkNum] = 'OO';
    }

    setMasterArray(newArr);
    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }

  function jumpX(checkNum){
    console.log('inside jump')
    var tempNum;

    if(curChecker - checkNum === 14){
      tempNum = curChecker - 7;
    }
    if(curChecker - checkNum === 18){
      tempNum = curChecker - 9;
    }

    let newArr = [...masterArray]

    if(checkNum < 8){
      let temp = newArr[checkNum];
      newArr[checkNum] = 'XX';
      newArr[curChecker] = ' ';
      newArr[tempNum] = ' '
    } else {
      let temp = newArr[curChecker];
      newArr[curChecker] = ' ';
      newArr[tempNum] = ' '
      newArr[checkNum] = 'X';
    }
    setOhArray(oldArray => [...oldArray, 'X'])
    setMasterArray(newArr);
    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }
  function jumpO(checkNum){
    console.log('inside jump O')
    var tempNum;
    //44
    console.log(curChecker)
    //58
    console.log(checkNum)
    //14
    console.log(checkNum - curChecker)

    if(checkNum - curChecker === 14){
      tempNum = curChecker + 7;
    }
    if(checkNum - curChecker === 18){
      tempNum = curChecker + 9;
    }
    //51
    console.log(tempNum)

    let newArr = [...masterArray]

    if(checkNum > 55){
      let temp = newArr[checkNum];
      newArr[checkNum] = 'OO';
      newArr[curChecker] = ' ';
      newArr[tempNum] = ' '
    } else {
      let temp = newArr[curChecker];
      newArr[curChecker] = ' ';
      newArr[tempNum] = ' '
      newArr[checkNum] = 'O';
    }
    setExArray(oldArray => [...oldArray, 'X'])
    setMasterArray(newArr);
    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }

  function jumpXX(checkNum) {
    var tempNum;

    console.log(curChecker)
    console.log(checkNum)

    if(curChecker - checkNum === 14){
      tempNum = curChecker - 7;
    }
    if(curChecker - checkNum === 18){
      tempNum = curChecker - 9;
    }
    if(checkNum - curChecker === 14){
      tempNum = curChecker + 7;
    }
    if(checkNum - curChecker === 18){
      tempNum = curChecker + 9;
    }

    let newArr = [...masterArray]
    newArr[curChecker] = ' ';
    console.log(tempNum)
    newArr[tempNum] = ' '
    newArr[checkNum] = 'XX';

    console.log(newArr[tempNum])
      
    setOhArray(oldArray => [...oldArray, 'X'])
    setMasterArray(newArr);
    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }
  function jumpOO(checkNum) {
    var tempNum;

    console.log(curChecker)
    console.log(checkNum)

    if(curChecker - checkNum === 14){
      tempNum = curChecker - 7;
    }
    if(curChecker - checkNum === 18){
      tempNum = curChecker - 9;
    }
    if(checkNum - curChecker === 14){
      tempNum = curChecker + 7;
    }
    if(checkNum - curChecker === 18){
      tempNum = curChecker + 9;
    }

    let newArr = [...masterArray]
    newArr[curChecker] = ' ';
    console.log(tempNum)
    newArr[tempNum] = ' '
    newArr[checkNum] = 'OO';

    console.log(newArr[tempNum])
      
    setExArray(oldArray => [...oldArray, 'X'])
    setMasterArray(newArr);
    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }

  function resetClick(){
    let newArr = [...masterArray];
    setMasterArray(newArr);
    setClickCounter(0);
  }

  function overTakeO(checkNum){
    console.log('O just overtook X')
    const destination = checkNum;
    const location = curChecker;
    let newArr = [...masterArray]


    console.log(checkNum)
    if(checkNum > 55){
      let temp = newArr[destination];
      newArr[destination] = 'OO';
      newArr[location] = ' ';
    } else {
      let temp = newArr[destination];
      newArr[destination] = newArr[location];
      newArr[location] = ' ';
    }

    setExArray(oldArray => [...oldArray, 'X'])

    setMasterArray(newArr);

    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }

  function overTakeX(checkNum){
    console.log('X just overtook O')

    const destination = checkNum;
    const location = curChecker;
    let newArr = [...masterArray]

    //temp = checker# value in array at curChecker
    if(checkNum < 8){
      let temp = newArr[destination];
      newArr[destination] = 'XX';
      newArr[location] = ' ';
    } else {
      let temp = newArr[destination];
      newArr[destination] = newArr[location];
      newArr[location] = ' ';
    }


    setOhArray(oldArray => [...oldArray, 'X'])

    setMasterArray(newArr);

    setClickCounter(0);
    setExTurn((turn) => !turn)
    setOhTurn((turn) => !turn)
  }


  const dispBlackPieces = exArray.map((piece) =>
      <>
        {piece}
      </>
    )
  const dispWhitePieces = ohArray.map((piece) =>
      <>
        {piece}
      </>
    )

  return (
    <>

    <div className='mainContain' >
      <div className='oPieces'>
        <p>WELCOME TO CHECKERS</p>
        <div className='rules'>
          <p>Please follow these simple rules to have the best time!</p>
          <p>-TURN is displayed below-</p>
          <p>-Click the player you want to move, then click the square you want it to go-</p>
          <p>-No double jumps!😅-</p>
      </div>
      </div>
      <div className='mainContain2' >

        {masterArr.map((check, i) => {
          // console.log(check)
          return (
            <>
              <div className='testCheck' key={Math.random()}>
                <Checker key={Math.random()} xxClick={xxClick} ooClick={ooClick} xClick={xClick} oClick={oClick} blank={blankClick} check={check} symbol={masterArray[check]} bin={binArray[check]}/>
              </div>
            </>
            )
          })
        }
      </div>
    <div className='rightContain'>
      <div className='scoreboard'>
          <div className='turn'>
           <span>CURRENT TURN </span> <br/>
            {ohTurn ? <><p className='redsTurn'>Reds turn </p></>: <><p className='blacksTurn'>Blacks turn </p></>}
          </div>
          <p>~BLACK TAKEN~</p>
          <div className='oScore'>
            {dispBlackPieces}
          </div>
          <p style={{color : 'red'}}>~RED TAKEN~</p>
          <div className='oScore' style={{color : 'red'}}>
            {dispWhitePieces}
          </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default App;
