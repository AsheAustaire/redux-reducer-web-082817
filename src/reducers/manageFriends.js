export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND' :
    return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND' :
    let friendsCopy = [...state.friends]
    return {...state, friends: friendsCopy.filter((fr) => {return fr.name != 'Joe'})}
    default :
      return {...state}
  }
}
