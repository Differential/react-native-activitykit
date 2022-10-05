// import axios from 'axios';

export const SELECT_MENU_CATEGORY = 'SELECT_MENU_CATEGORY';
export const selectMenuCategory = (payload: string) => ({
  type: SELECT_MENU_CATEGORY,
  payload,
});

// export const UPDATE_FIELDS = 'UPDATE_FIELDS';
// export const updateFields = (payload) => ({
//   type: UPDATE_FIELDS,
//   payload,
// });

// export const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
// export const updateCampus = (payload) => ({
//   type: UPDATE_CAMPUS,
//   payload,
// });

// export const FORM_SUBMITTED = 'FORM_SUBMITTED';
// export const formSubmitted = () => ({
//   type: FORM_SUBMITTED,
// });

// export const submitInformation = () => {
//   return async (dispatch, getState) => {
//     const formValues = getState().form;
//     axios.post('/api/submit', { formValues });
//     dispatch(formSubmitted());
//   };
// };
