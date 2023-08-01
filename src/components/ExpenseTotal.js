import react, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { total } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{total}</span>
        </div>
    )
}

export default ExpenseTotal;