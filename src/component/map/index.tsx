import { AMapScene, Marker } from "@antv/l7-react";
import * as React from "react";
import mockData from "./mock.json";
import styles from "./index.module.less";

const MarkerPinImg = {
  green:
    "https://gw.alipayobjects.com/mdn/rms_855bab/afts/img/A*JhBbT4LvHpQAAAAAAAAAAAAAARQnAQ",
  blue: "https://gw.alipayobjects.com/mdn/rms_855bab/afts/img/A*n6cXTb8R7iUAAAAAAAAAAAAAARQnAQ",
};

const MarkerInfo = ({ title }) => {
  return (
    <div className={styles.markerContent}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "32px",
          padding: "0.05rem",
          background: "#1677ff",
          borderRadius: "44px",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "12px",
          }}
        >
          {title}
        </div>
      </div>
      <div className={styles.markContainer}>
        <img
          style={{
            width: "20px",
            height: "30px",
          }}
          alt="marker"
          src={MarkerPinImg.blue}
        />
      </div>
    </div>
  );
};

const MapScene = React.memo(function Map() {
  return (
    <AMapScene
      map={{
        center: [110.19382669582967, 50.258134],
        pitch: 0,
        style: "dark",
        zoom: 1,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {mockData &&
        mockData.slice(0, 1).map((item: any) => {
          return (
            <Marker key={item.id} lnglat={[item.longitude, item.latitude]}>
              <MarkerInfo title={item.name} />
            </Marker>
          );
        })}
    </AMapScene>
  );
});

export default MapScene;
