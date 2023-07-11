// export const getMe = (token) => {
//     return fetch('/api/users/me', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//     });
//   };
//   export const createUser = (userData) => {
//     return fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//   };
//   export const loginUser = (userData) => {
//     return fetch('/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//   }; 
//   export const saveFood = (foodData, token) => {
//     return fetch('/api/users', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(foodData),
//     });
//   };

//   export const deleteFood = (foodId, token) => {
//     return fetch(`/api/users/food/${foodId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     });
//   };
//   export const searchFood = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };
  