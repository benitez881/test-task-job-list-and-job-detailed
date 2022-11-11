import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";
import styles from "./LocationText.module.scss";

type Props = {
  lat: string;
  long: string;
};
type Location = {
  country: string;
  name: string;
};

const LocationText = ({ lat, long }: Props) => {
  const [result, setResult] = useState<Location>({
    country: "",
    name: "",
  });
  useEffect(() => {
    (async function () {
      const data = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=36903dad0180d4dfea887b137bca0a8a`
      );
      // `https://www.mapquestapi.com/geocoding/v1/reverse?key=d53It9Y3Ante9kOY86E91VIZqIhj73Zz&location=${lat},${long}``;
      const json = await data.json();
      const results = await json[0];
      if (!results?.country && !results?.name) return;
      const { country, name } = results;
      setResult({ country, name });
    })();
  }, [lat, long]);

  const { country, name } = result;
  return country && name ? (
    <div className={styles.location__container}>
      <PlaceIcon viewBox="5 2 14 20" className={styles.image} />
      {name}, {country}
    </div>
  ) : (
    <></>
  );
};

export default LocationText;
