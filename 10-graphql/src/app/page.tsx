"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  GetSimpleCharacterQuery,
  GetSimpleCharacterQueryVariables,
} from "@/gql/graphql";

const GET_SIMPLE_CHARACTERS = gql`
  query Results {
    characters {
      results {
        id
        name
      }
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery<
    GetSimpleCharacterQuery,
    GetSimpleCharacterQueryVariables
  >(GET_SIMPLE_CHARACTERS);

  if (loading) <p> Loading </p>

  return (
    <div>
      <ul>
        {data?.characters?.results?.map((e) => (
          <li key={e?.id}>{e?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;