import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// after imorpoting bootstrap, we can use some pre-defined bootstrap styles including: 
// 1. container
// 2. row
// 3. col-sm
// 4. mt-3
// 5. alert
// 6. alert-danger
// 7. alert-success



//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        <div className='col-sm'>
                            <Remaining />    
                        </div> 
                        <div className='col-sm'>
                            <ExpenseTotal />    
                        </div>
                    </div>
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'>
                        {/* Add ExpenseList component here under */}         
                        <div className='col-sm'>
                            <ExpenseList />
                            </div>
                    </div>
                    <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row mt-3'>
                        {/* Add AllocationForm component here under */}        
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;


// // sample codes
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { AppProvider } from './context/AppContext';
// import Budget from './components/Budget';
// import ExpenseTotal from './components/ExpenseTotal';
// import ExpenseList from './components/ExpenseList';
// import AllocationForm from './components/AllocationForm';
// import RemainingBudget from './components/Remaining';

// const App = () => {
//     return (
//         <AppProvider>
//             <div className='container'>
//                 <h1 className='mt-3'>Company's Budget Allocation</h1>
//                 <div className='row mt-3'>
//                     <div className='col-sm'>
//                         <Budget />
//                     </div>
//                     <div className='col-sm'>
//                         <RemainingBudget />
//                     </div>
//                     <div className='col-sm'>
//                         <ExpenseTotal />
//                     </div>
//                 </div>
//                 <h3 className='mt-3'>Allocation</h3>
//                 <div className='row '>
//                     <div className='col-sm'>
//                         <ExpenseList />
//                     </div>
//                 </div>
//                 <h3 className='mt-3'>Change allocation</h3>
//                 <div className='row mt-3'>
//                     <div className='col-sm'>
//                         <AllocationForm/>
//                     </div>
//                 </div>
//             </div>
//         </AppProvider>
//     );
// };

// export default App;