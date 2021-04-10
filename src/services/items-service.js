import { SERVER, API, ENDPOIND, HEADERS } from "../config/env"

const ItemsServices = {
  getItems: async (query) => {
    try {
      if (query) {
        const url = `${SERVER}${API}${ENDPOIND.items}?q=${query}`
        const result = await fetch(url, { method: 'GET', headers: HEADERS})
        return result.json()
      } 
      
      return {}
    } catch (err) {
      throw await err
    }
  },

  getItemById: async (id) => {
    try {
      if (id) {
        const url = `${SERVER}${API}${ENDPOIND.items}/${id}`
        const result = await fetch(url, { method: 'GET', headers: HEADERS})
        return result.json()
      } 

      return {}
    }
    catch (err) {
      throw await err
    }
  }
}

export default ItemsServices