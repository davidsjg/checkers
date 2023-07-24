import './Checker.css';

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
    console.log(checkNum)
    console.log(e.target.id)
    if(props.symbol === 'X'){
      props.xClick(checkNum);
    } else if (props.symbol === 'O'){ 
      props.oClick(e, checkNum);
    } else {
      console.log(checkNum)
      props.blank(checkNum);
    }
  }


  // console.log(props.check)
  return (
    <div key={props.check} className={props.bin === 0 ? 'black ' : 'red'} id={props.symbol === 'X' ? 'xClick ' : 'oClick'} onClick={(e) => {handleClick(checkNum, e)}} value={props.check}>
        {/* {props.check} */}

        {props.symbol}
    </div>
  );
}

export default Checker;
