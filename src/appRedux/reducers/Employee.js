import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_ERROR,
  GET_All_EMPLOYEE_SUCCESS,
} from "../../constants/ActionTypes";

const INIT_STATE = {
  employeetList: [],
  loader: false,
  alertMessage: "",
  showMessage: false,
};

const EmployeeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_All_CONTACT_SUCCESS: {
      return {
        ...state,
        employeetList: action.payload,
      };
    }
    
    case FETCH_EMPLOYEE_ERROR: {
      return {
        ...state,
        loader: false,
        showMessage: true,
        alertMessage: action.payload,
      };
    }

    // case UPDATE_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     contactList: state.contactList.map((contact) =>
    //       contact.id === action.payload.id ? action.payload : contact
    //     ),
    //   };

    // case DELETE_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     contactList: state.contactList.filter(
    //       (contact) => contact.id !== action.payload.id
    //     ),
    //   };

    // case ON_ADD_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     contactList: action.payload.contact(state.contactList),
    //   };

    default:
      return state;
  }
};
