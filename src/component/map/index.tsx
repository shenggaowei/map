import React, { useCallback } from "react";
import { Scene } from "@antv/l7";
import { CountryLayer } from "@antv/l7-district";
import "./index.module.less";
import { ProvinceData, markerData } from "./utils";
import MarkerInfo from "./components/marker";
import { AMapScene, Marker } from "@antv/l7-react";

const color = ["#7e18db", "#5d0cec", "#a224cd", "#6a0ee6"];

const ChinaMap = () => {
  const onSceneLoaded = useCallback((scene: Scene) => {
    new CountryLayer(scene, {
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
  }, []);

  return (
    <AMapScene
      option={{
        logoVisible: false,
      }}
      map={{
        // 地图中心
        center: [116.2825, 39.9],
        // 地图倾角
        pitch: 0,
        // 地图图样式 无底图
        style: "dark",
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
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onSceneLoaded={onSceneLoaded}
    >
      {markerData &&
        markerData.map((item) => {
          return (
            <Marker key={item.id} lnglat={[item.longitude, item.latitude]}>
              <MarkerInfo title={item.name} />
            </Marker>
          );
        })}
    </AMapScene>
  );
};

export default ChinaMap;
