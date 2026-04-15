
import { gql } from "@apollo/client";

export const GET_SIMPLE_CHARACTERS = gql`
query GetSimpleCharacter {
  characters {
    results {
      id
      name
    }
  }
}
`;
