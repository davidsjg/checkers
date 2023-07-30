import './Checker.css';
import '../xCheck/xCheck.js'

function Checker(props) {
  //props
  //xClick, oClick, blank = functions
  //check = its checker value at that time
  //symbol = board symbol, X or O
  //bin = binary number, alternates, 0 or 1 


  // console.log(props.symbol);
  const checkNum = props.check;

  var tempStr = 'this';

  if(props.bin === 0){
    tempStr = 'xClass';
  } else {
    tempStr = 'props.oClick'
  }

  function handleClick(checkNum, e) {
    //this is number need to send to xClick and oClick
    // console.log(checkNum)
    //know its an x
    console.log(props.symbol)
    let tempClass = e.target.className;
    if(props.symbol === 'X'){
      props.xClick(checkNum, tempClass);
    } else if (props.symbol === 'O'){ 
      props.oClick(checkNum, tempClass);
    } else if (props.symbol === 'XX'){
      props.xxClick(checkNum, tempClass)
    } else if (props.symbol === 'OO'){
      props.ooClick(checkNum, tempClass)
    } else {
      console.log(checkNum)
      props.blank(checkNum, tempClass);
    }
  }


  // console.log(props.check)
  return (
    <div key={props.i} className={props.bin === 0 ? 'black' : 'red'} id={props.symbol === 'X' ? 'xClick ' : 'XX' ? 'xxClick' : 'OO' ?  'ooClick' : 'oClick'} onClick={(e) => {handleClick(checkNum, e)}} value={props.check}>
        {/* {props.check} */}

        {/* {props.symbol} */}
        {props.symbol === 'X' &&
        <>
          <div className='xCheck'>
          </div>
        </>
        }
        {props.symbol === 'O' &&
        <>
        <div className='oCheck'>
        </div>
      </>
        }
        
    </div>
  );
}

export default Checker;
