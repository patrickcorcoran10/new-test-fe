import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
// query
//     }`

    export const GET_USER = gql`
    query GetUser($getUserId: ID!) {
      getUser(id: $getUserId) {
        _id
        email
        password
        username
      }
    }
    `

    export const GET_ALL_USERS = gql`
    query Query {
        getAllUsers {
          _id
          email
          password
          username
        }
      }
    `
    export const GET_MEAL = gql`
    query GetMeal($getMealId: ID!) {
      getMeal(id: $getMealId) {
        _id
        calories
        date
        food
        servings
        username
      }
    }
    `

    export const GET_SAVED_MEALS = gql`
    query Query($username: String!) {
      getSavedMeals(username: $username) {
        _id
        calories
        date
        food
        servings
        username
      }
    }
    `


  export const GET_MEAL_BY_USERNAME_AND_DATE = gql`
  query Query($username: String!, $date: String!) {
    getMealsByUsernameAndDate(username: $username, date: $date) {
      _id
      calories
      date
      food
      servings
      username
    }
  }
  `