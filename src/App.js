
import './App.css';
import React from 'react';
import Dashboard from './Components/Dashboard';
import './index.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="bg-green-600 text-white p-4">
//       <h1 className="text-xl font-bold">Work Management System</h1>
//      {/* <img src={logo} className="App-logo" alt="logo" />
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
//         </a> */}
//       </header>
//       <main>
//         <Dashboard />
//       </main>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      
      <Dashboard />
    </div>
  );
};

export default App;

// import React from 'react';
// import Dashboard from './components/Dashboard';
// import './index.css';

// const App = () => {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// };

// export default App;
