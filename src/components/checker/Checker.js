import './Checker.css';

function Checker(props) {
  const checkerboard = ['x','x','x','x'];

  // console.log(props.symbol);
  const checkNum = props.check;

  var tempStr = 'this';

  if(props.bin === 0){
    tempStr = 'xClass';
  } else {
    tempStr = 'props.oClick'
  }

  function handleClick(checkNum, e) {
    //this is number need to send to x and cClick
    console.log(checkNum)
    console.log(e.target.id)
    if(props.symbol === 'X'){
      props.xClick(e);
    } else if (props.symbol === 'O'){ 
      props.oClick(e);
    } else {
      props.blank(e);
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
