import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";
import { FETCH_INGREDIENT_FAILED } from "./actionsTypes";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENT_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-b4fde.firebaseio.com/Ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
