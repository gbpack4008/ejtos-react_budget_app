import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        // alert()
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    
    
    return (
        <tr>
		<td>{props.name}</td>
		<td>{currency}{props.cost}</td>
		<td align="center"><TiPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}style={{  backgroundColor:'#50a95b', color:'white'}}></TiPlus></td>
		<td align="center"><TiMinus size='1.5em' onClick={event=> decreaseAllocation(props.name)}style={{ backgroundColor:'#ab2514', color:'white'}}></TiMinus></td>
		<td align="center"><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
		</tr>
        );
    };
    
    export default ExpenseItem;