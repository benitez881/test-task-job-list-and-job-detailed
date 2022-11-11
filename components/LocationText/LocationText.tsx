import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";
import styles from "./LocationText.module.scss";

type Props = {
  lat: string;
  long: string;
};
type Location = {
  adminArea1: string;
  adminArea5: string;
};

const LocationText = ({ lat, long }: Props) => {
  const [result, setResult] = useState<Location>({
    adminArea1: "",
    adminArea5: "",
  });
  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://www.mapquestapi.com/geocoding/v1/reverse?key=d53It9Y3Ante9kOY86E91VIZqIhj73Zz&location=${lat},${long}`
      );
      // `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=36903dad0180d4dfea887b137bca0a8a`
      const json = await data.json();
      const { adminArea1, adminArea5 } = await json.results[0].locations[0];

      if (!adminArea1 && !adminArea5) return;
      setResult({ adminArea1, adminArea5 });
    })();
  }, [lat, long]);

  const { adminArea1, adminArea5 } = result;
  return adminArea1 && adminArea5 ? (
    <div className={styles.location__container}>
      <PlaceIcon viewBox="5 2 14 20" className={styles.image} />
      {adminArea1}, {adminArea5}
    </div>
  ) : (
    <></>
  );
};

export default LocationText;
