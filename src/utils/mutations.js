import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password:$password) {
            token
            user {
                _id
                username
            }
        }
    }`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
  `


 export const REMOVE_FOOD = gql`
 mutation removeMeal($id: ID!) {
  removeMeal(_id: $id)
}
`


export const SAVE_MEAL = gql`
mutation Mutation($username: String!, $food: String!, $calories: Int!, $servings: Int!, $date: Int!) {
    saveMeal(username: $username, food: $food, calories: $calories, servings: $servings, date: $date) {
      _id
      username
      food
      calories
      servings
      date
    }
  }
  `