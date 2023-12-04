import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_ERROR,
  GET_All_EMPLOYEE_SUCCESS,
} from "../../constants/ActionTypes";
import axios from "../../util/axios";

export const onGetAllEmployee = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEE_START });
    try {
      const response = await axios.get("/api/karyawan");
      dispatch({ type: FETCH_EMPLOYEE_SUCCESS });
      dispatch({
        type: GET_All_EMPLOYEE_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_EMPLOYEE_ERROR,
        payload: response.data.data,
      });
    }
  };
};
