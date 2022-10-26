import { createContext, useReducer } from 'react';

export const GroceriesContext = createContext({
  groceries: [],
  addGrocery: ({ title }) => {},
  deleteGrocery: id => {},
  updateGrocery: (id, { title }) => {},
});

function groceriesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
    case 'DELETE':
    default:
      return state;
  }
}

function GroceriesContextProvider({ children }) {
  // used for state management - complex scenarios
  const [groceriesState, dispatch] = useReducer(groceriesReducer);

  function addGrocery(groceryData) {
    dispatch({ type: 'ADD', payload: groceryData });
  }

  function deleteGrocery(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateGrocery(id, groceryData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: groceryData } });
  }

  return <GroceriesContext>{children}</GroceriesContext>;
}

export default GroceriesContextProvider;