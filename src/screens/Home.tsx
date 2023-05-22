import { useQuery, gql } from "@apollo/client";
import React from "react";

export default function Home() {
  const GET_CONTINENTS = gql`
    query Continents {
      continents {
        code
        name
      }
    }
  `;

  interface Continent {
    code: string;
    name: string;
  }

  interface QueryData {
    continents: Continent[];
  }
    const { loading, error, data } = useQuery<QueryData>(GET_CONTINENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
      <div className="App">
        {data?.continents.map(({ code, name }) => (
          <div key={code}>
            <p>
              {code}: {name}
            </p>
          </div>
        ))}
      </div>
    );
  }

