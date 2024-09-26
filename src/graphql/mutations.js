export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      city
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
