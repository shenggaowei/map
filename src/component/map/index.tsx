import React, { useEffect, useRef } from "react";
import { Scene } from "@antv/l7";
import { CountryLayer } from "@antv/l7-district";
import styles from "./index.module.less";
import { GaodeMapV2, GaodeMap } from "@antv/l7-maps";
import { ProvinceData } from "./utils";
const colors = ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"];
const color = ["red", "blue", "orange", "#fff"];

const ChinaMap = () => {
  const scene = useRef<Scene>();

  useEffect(() => {
    scene.current = new Scene({
      id: "map",
      logoVisible: false,
      map: new GaodeMapV2({
        // 地图中心
        center: [116.2825, 39.9],
        // 地图倾角
        pitch: 0,
        // 地图图样式 无底图
        style: "amap://styles/a48716d371475e95ffe8796cf27490fd",
        // 初始化缩放等级
        zoom: 4,
        // 允许旋转
        rotateEnable: false,
        // 鼠标拖拽平移
        dragEnable: false,
        // 鼠标缩放
        zoomEnable: false,
        // 鼠标双击放大地图
        doubleClickZoom: false,
        // 高德地图的显示插件
        plugin: [],
        token: "6f46b967a99eedecb414c0ee9021b92b",
      }),
    });
    scene.current.on("loaded", () => {
      if (scene.current) {
        new CountryLayer(scene.current, {
          // 数据用于可视化渲染
          data: ProvinceData,
          // 数据关联
          joinBy: ["NAME_CHN", "name"],
          // 数据显示层级
          depth: 1,
          // 省边界的颜色
          provinceStroke: "#fff",
          // 市边界的颜色
          cityStroke: "#EBCCB4",
          // 市边界的宽度
          cityStrokeWidth: 1,
          // 填充图的样式
          fill: {
            color: {
              // 田中映射字段
              field: "NAME_CHN",
              // 映射值
              values: colors,
            },
          },
        });
      }
    });
    return () => {
      scene.current?.destroy();
    };
  }, []);

  return <div id="map" className={styles.mapContainer}></div>;
};

export default ChinaMap;
