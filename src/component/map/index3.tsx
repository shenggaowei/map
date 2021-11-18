import React, { useEffect, useRef } from "react";
import { Scene, Marker, MarkerLayer } from "@antv/l7";
import { CountryLayer } from "@antv/l7-district";
import "./index.module.less";
import { GaodeMapV2 } from "@antv/l7-maps";
import MarkerInfo from "./components/marker";
import { ProvinceData, markerData } from "./utils";

const color = ["#7e18db", "#5d0cec", "#a224cd", "#6a0ee6"];

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
        style: "dark",
        // 初始化缩放等级
        zoom: 4.8,
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
          // 国界线颜色
          chinaNationalStroke: "#83a8e8",
          // 国界线宽度
          chinaNationalWidth: 1,
          // 省边界的颜色
          provinceStroke: "#83a8e8",
          // 省边界的宽度
          provinceStrokeWidth: 1,
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
              values: color,
            },
          },
          // 配置layer 上的标签(北京，山东等字体的样式)
          label: {
            color: "#fff",
            strokeWidth: 0,
            size: 12,
          },
          // 显示信息窗口
          popup: {
            enable: false,
          },
        });
      }
    });
    return () => {
      scene.current?.destroy();
    };
  }, []);

  return <div id="map"></div>;
};

export default ChinaMap;
