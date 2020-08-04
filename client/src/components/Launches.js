import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error :(</h4>;
  console.log("LAUNCHES_QUERY", data);

  return (
    <Fragment>
      <h1 className="display-4, my-3">Launches </h1>

      {data.launches.map((launch) => {
        return <LaunchItem key={launch.flight_number} launch={launch} />;
      })}
    </Fragment>
  );
};

export default Launches;
