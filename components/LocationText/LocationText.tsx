import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";
import styles from "./LocationText.module.scss";

type LocationTextProps = {
  lat: number;
  long: number;
};
type Location = {
  country: string;
  city: string;
};

const LocationText = ({ lat, long }: LocationTextProps) => {
  const [result, setResult] = useState<Location>({
    city: "",
    country: "",
  });
  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://www.mapquestapi.com/geocoding/v1/reverse?key=d53It9Y3Ante9kOY86E91VIZqIhj73Zz&location=${lat},${long}`
      );

      // `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=36903dad0180d4dfea887b137bca0a8a`
      const json = await data.json();

      const { adminArea1, adminArea5 } = await json.results[0].locations[0];

      if (!adminArea1 && !adminArea5) {
        setResult({ country: "", city: "" });
      } else {
        setResult({ country: adminArea1, city: adminArea5 });
      }
    })();
  }, [lat, long]);

  const { city, country } = result;
  return city && country ? (
    <div className={styles.location__container}>
      <PlaceIcon viewBox="5 2 14 20" className={styles.image} />
      {city}, {country}
    </div>
  ) : (
    <></>
  );
};

export default LocationText;
