
export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        displayProducts: true
      }
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: 'stranger',
        displayProducts: false,
        isModalOpen: true
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false
      }
    default:
      throw new Error('Action Type Not Found')
  }
}