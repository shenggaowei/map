interface IBar {
  school: string;
  value: number;
  course: string;
}

const data = [
  {
    school: "世界百科",
    course: [
      {
        name: "山东一中",
        value: 40,
      },
      {
        name: "山东二中",
        value: 78,
      },
    ],
  },
  {
    school: "小读者",
    course: [
      {
        name: "山东一中",
        value: 40,
      },
      {
        name: "山东二中",
        value: 78,
      },
    ],
  },
];

// 堆叠条形图数据结构
interface IData {
  course: string;
  school: {
    name: string;
    value: number;
  }[];
}
[];

export default [
  {
    school: "山东一中",
    value: 40,
    course: "世界百科",
  },
  {
    school: "山东一中",
    value: 50,
    course: "小读者",
  },
  {
    school: "山东一中",
    value: 50,
    course: "科学",
  },
  {
    school: "山东一中",
    value: 30,
    course: "美术",
  },
  {
    school: "山东二中",
    value: 60,
    course: "世界百科",
  },
  {
    school: "山东二中",
    value: 70,
    course: "小读者",
  },
  {
    school: "山东二中",
    value: 20,
    course: "美术",
  },
  {
    school: "山东三中",
    value: 78,
    course: "世界百科",
  },
  {
    school: "山东三中",
    value: 88,
    course: "小读者",
  },
  {
    school: "山东三中",
    value: 38,
    course: "美术",
  },
];
