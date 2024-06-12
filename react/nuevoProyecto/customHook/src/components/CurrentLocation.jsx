import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  const { location, loading, error, handleLocation } = useCurrentLocation();
  return (
    <div>
      <h1>Geolocation</h1>
      <button onClick={handleLocation}>Click to use location function</button>
      {error && <p>Error: {error}</p>}
      {location &&
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      }
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default CurrentLocation;