// reducers/sheetsReducer.js
const initialState = {
    data: [],
    formData: { name: '', email: '', message: '' },
  };
  
  const sheetsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'SET_FORM_DATA':
        return { ...state, formData: action.payload };
      default:
        return state;
    }
  };
  
  export default sheetsReducer;
  