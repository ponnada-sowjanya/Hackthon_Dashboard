
// import './App.css';

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

import React from 'react';
import './App122.css';
import 'boxicons/css/boxicons.min.css';
// import InterviewTopics from './InterviewTopics';
// import VerbalAbility from './VerbalAbility';
// import LogicalReasoning from './LogicalReasoning'
import QuantitativeAptitude from './QuantitativeAptitude'
import FAQs from './FAQs';
import VerbalAbility from './VerbalAbility';
import LogicalReasoning from './LogicalReasoning';
import InterviewTopics from './InterviewTopics';

function App() {
  return (
    <div className="App">
      {/* <QuantitativeAptitude /> */}
      {/* <VerbalAbility /> */}
      {/* <LogicalReasoning /> */}
      <InterviewTopics />
      <FAQs/>
    </div>
  );
}

export default App;
