import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpenses = ( 
    {
        description = '',
        note = '',
        amount = 0,
        createdAt= 0
    } = {}
    
) => ({
    type: 'ADD-EXPENSES',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const editExpense = (id, updates) => ({
    type: 'EDIT-EXPENSES',
    id,
    updates
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE-EXPENSES',
    id: id
});

const setTextFilter = (text = '' ) => ({
    type: 'SET-TEXT-FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT-BY-AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT-BY-DATE'
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET-START-DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET-END-DATE',
    endDate
})


const defaultExpenseState = [];

const expenseReducer = (state = defaultExpenseState, action) => {
    switch (action.type) {
        case 'ADD-EXPENSES':
            return [
                ...state,
                action.expenses
            ];
            // state.push(action.expenses);
            // return state;
            // return state.concat(action.expenses);
        case 'REMOVE-EXPENSES':
            return state.filter( ({ id }) =>  id !== action.id );
        case 'EDIT-EXPENSES':
            return state.map( (expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }; 
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterDefaultValue = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducers = (state = filterDefaultValue , action) => {
    switch( action.type){
        case 'SET-TEXT-FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT-BY-AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT-BY-DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET-START-DATE':
            return {
                ...state,
                sortBy: action.startDate
            };
        case 'SET-END-DATE':
            return {
                ...state,
                sortBy: action.endDate
            };
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducers,
}));


// console.log(store.getState());
store.subscribe( () => {
    console.log(store.getState());
});

// const one = store.dispatch(addExpenses({ description: 'rent', amount: 100 }));
// const two = store.dispatch(addExpenses({ description: 'coffee', amount: 200 }));
// const three = store.dispatch(addExpenses({ description: 'tea', amount: 50 }));

// store.dispatch( removeExpense({id: one.expenses.id}));

// store.dispatch( editExpense(three.expenses.id, { amount: 500 }));

// store.dispatch( setTextFilter('rent'));
// store.dispatch( setTextFilter());

// store.dispatch( sortByAmount());

// store.dispatch( sortByDate());


store.dispatch( setStartDate(321));
store.dispatch( setStartDate());
store.dispatch( setEndDate(1244));



const demoState = {
    expensify: [{
        id: 'asdf',
        description: 'Rent',
        note: 'this is house rent for janury',
        amount: 20000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
