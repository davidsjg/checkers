import './Checker.css';

function Checker(props) {
  const checkerboard = ['x','x','x','x'];

  // console.log(props.symbol);
  const checkNum = props.check;






  return (
    <div className={props.bin === 0 ? 'black' : 'red'}>
        {/* {props.check} */}

        {props.symbol}
    </div>
  );
}

export default Checker;
