export const initialStore=()=>{
  return{
  
    contacts: [
     {
      "name": "Jenny",
      "phone": "303-867-7378",
      "email": "email@email.com",
      "address": "234 north live ",
      "id": 1
    }
  ]
}
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "set_contacts":
      return{
        ...store,
        contacts: action.payload
      }
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
