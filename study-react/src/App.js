import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
    
//   );
// }

// export default App;
//import "./styles.css";
// export default function MyApp(){
//     return (
//         <div>
//             <h1>欢迎来到yi 的应用</h1>
//             <MyButton/>
//         </div>
//     );

// }
function Square(){
    const [value, setValue] = useState(null);

    function handleClick(){
        setValue('X');
    }
    return <button className="square" onClick={handleClick}>{value}</button>
}
export default function Board() {
    return ( 
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
                
        </>
    );
}