import axios from 'axios';

const BACKEND_URL = 'https://grocery-list-a13f8-default-rtdb.firebaseio.com';

export async function storeGroceryItem(groceryData) {
  const response = await axios.post(
    BACKEND_URL + '/groceries.json',
    groceryData
  );
  const id = response.data.name;
  return id;
}
