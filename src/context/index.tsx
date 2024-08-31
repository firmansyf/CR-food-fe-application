"use client"

import { ceckLogin, logout, me } from '@/service/auth';
import React, { useReducer, useMemo, createContext } from 'react'


export const GlobalContext = createContext(null)

export const meUser = async (dispatch) => {
  try {
    const response = await me();

    // Dispatch action with the fetched data
    dispatch({ type: 'SUCCESS_ME', data: response.data });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    dispatch({ type: 'ERROR_ME', error: error.response.data });
  }
};

export const CeckLogin = async (dispatch) => {
    try {
      const response = await ceckLogin();
  
      // Dispatch action with the fetched data
      dispatch({ type: 'CECK_SUCCESS_LOGIN', data: response.data });
    } catch (error) {
      console.error("Failed to fetch data:", error);
      dispatch({ type: 'CECK_ERROR_LOGIN', error: error.response.data });
    }
};

export const isLogout = async (dispatch) => {
  try {
    const res = await logout();

    // Dispatch action with the fetched data
    dispatch({ type: 'SUCCESS_LOGOUT', data: res.data });
  } catch (err) {
    console.error("Failed to fetch data:", err);
    dispatch({ type: 'ERROR_LOGOUT', error: error.response.message });
  }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_SIDENAV' : {
            return {...state, openSidenav: action.value}
        }
        case 'SUCCESS_ME': {
            return { ...state, me: action.data };
        }
        case 'ERROR_ME': {
            return { ...state, meError: action.error };
        }
        case 'CECK_SUCCESS_LOGIN': {
            return { ...state, data: action.data };
        }
        case 'CECK_ERROR_LOGIN': {
            return { ...state, error: action.error };
        }
        case 'SUCCESS_LOGOUT': {
          return { ...state, data: action.data };
        }
        case 'ERROR_LOGOUT': {
          return { ...state, error: action.error };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const ControllerProvider = ({children}) => {
    const initialState = {
        openSidenav: false,
    }

    const [controller, dispatch] = useReducer(reducer, initialState)
    const value = useMemo(() => [controller, dispatch], [controller, dispatch])

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export function useControllerContext() {
    const context = React.useContext(GlobalContext)
  
    if (!context) {
      throw new Error(
        'Error Context'
      )
    }
  
    return context
  }

export const setOpenSidenav = (dispatch, value) => dispatch({type: 'OPEN_SIDENAV', value})