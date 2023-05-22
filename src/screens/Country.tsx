import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

export default function Country() {
const GET_COUNTRY = gql`
    query Country($code: ID!) {
        country(code: $code) {
            name
            capital
            currency
            emoji
    }
}
`;

    interface CountryData {
        country: {
        name: string;
        capital: string;
        currency: string;
        emoji: string;
    };
}

const { countryCode } = useParams<{ countryCode: string }>();
const { loading, error, data } = useQuery<CountryData>(GET_COUNTRY, {
    variables: { code: countryCode },
});

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

    return (
        <>
        <h1>{data?.country.name}</h1>
        <p>Capital: {data?.country.capital}</p>
        <p>Currency: {data?.country.currency}</p>
        <p>Flag: {data?.country.emoji}</p>
        </>
    );
}
