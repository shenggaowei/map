const data = [
  {
    lesson: "小读者",
    package: [
      {
        name: "pkg1",
        count: "22",
      },
      {
        name: "pkg2",
        count: "33",
      },
    ],
  },
  {
    lesson: "世界百科",
    package: [
      {
        name: "pkg3",
        count: "22",
      },
      {
        name: "pkg4",
        count: "33",
      },
    ],
  },
];

interface IData {
  lesson: string;
  package: {
    name: string;
    count: number;
  }[];
}
[];

const data = [
  {
    school: "山东一中",
    date: "8.2-8.8",
    count: 30,
  },
  {
    school: "山东一中",
    date: "8.9-8.15",
    count: 40,
  },
  {
    school: "山东一中",
    date: "8.16-8.22",
    count: 50,
  },
  {
    school: "山东二中",
    date: "8.2-8.8",
    count: 30,
  },
  {
    school: "山东二中",
    date: "8.9-8.15",
    count: 40,
  },
  {
    school: "山东二中",
    date: "8.16-8.22",
    count: 50,
  },
];

export default data;
