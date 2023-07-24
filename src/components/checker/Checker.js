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

  function handleClick(e) {
    console.log(e)
    if(props.symbol === 'X'){
      props.xClick();
    } else if (props.symbol === 'O'){ 
      props.oClick();
    } else {
      console.log('sup')
    }
  }



  // console.log(props.check)
  return (
    <div key={props.check} className={props.bin === 0 ? 'black ' : 'red'} id={props.symbol === 'X' ? 'xClick ' : 'oClick'} onClick={() => handleClick(checkNum)}value={props.check}>
        {/* {props.check} */}

        {props.symbol}
    </div>
  );
}

export default Checker;
