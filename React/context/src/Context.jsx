import { createContext, useEffect, useReducer } from "react";

let Context = createContext();
export default Context;

const ContextP = ({ children }) => {
  let initialData = {
    apiData: [],
    cart: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state, apiData: action.payload };

      case "ADD_TO_CART":
        // Avoid duplicate entries
        const isExist = state.cart.find((item) => item.id === action.payload.id);
        if (isExist) return state;
        return { ...state, cart: [...state.cart, action.payload] };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_DATA", payload: data.recipes });
      });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { ContextP };
