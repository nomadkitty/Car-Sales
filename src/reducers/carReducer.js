import { BUY_ITEM, REMOVE_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

const carReducer = (state=initialState, action) => {
  // console.log(state.store, 'hi')
  switch (action.type) {
    case BUY_ITEM: 
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price, 
          features: [...state.car.features, action.payload]
        },
        store: 
          state.store.filter(item=> item.id !== action.payload.id)
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: state.car.features.filter(item => 
            item.id ===action.payload.id ? !item : item)
        },
        store: [...state.store, action.payload]
      }
    default:
      return state
  }
}

export default carReducer