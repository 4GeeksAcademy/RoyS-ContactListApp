export const initialStore=()=>{
  return{
  
    contacts: []
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
