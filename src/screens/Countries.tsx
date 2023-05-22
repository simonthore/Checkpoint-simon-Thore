import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Countries() {
    const GET_CONTINENT = gql`
        query Continent($code: ID!) {
        continent(code: $code) {
            countries {
            code
            name
            }
        }
        }
    `;

    interface Country {
        code: string;
        name: string;
    }

    interface ContinentData {
        continent: {
        countries: Country[];
        };
    }

    const { code } = useParams<{ code: string }>();
    const { loading, error, data } = useQuery<ContinentData>(GET_CONTINENT, {
        variables: { code },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <ul>
        {data?.continent.countries.map((country) => (
            <li key={country.code}>
            <Link to={`/countries/${code}/${country.code}`}>{country.name}</Link>
            </li>
        ))}
        </ul>
    );
}
