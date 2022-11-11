import React from "react";
import styles from "./Map.module.scss";

type Props = {
  lat: string;
  long: string;
};
const Map = ({ lat, long }: Props) => {
  return (
    <div className={styles.job__map}>
      <iframe
        width="100%"
        height="100%"
        src={`https://maps.google.com/maps?q=${lat},${long}&hl=en&z=14&amp&output=embed`}
      ></iframe>
    </div>
  );
};

export default Map;
