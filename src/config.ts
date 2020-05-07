const repository = 'https://github.com/noriaki/bus-time-table-web';
const rawPathname = '/raw/master/src/data';
const basePath = `${repository}${rawPathname}`;

const config = [
  {
    key: 'home',
    url: `${basePath}/home-timetable.json`,
  },
  {
    key: 'higashiginza',
    url: `${basePath}/st-higashiginza-timetable.json`,
  },
  {
    key: 'shimbashi',
    url: `${basePath}/st-shimbashi-timetable.json`,
  },
];

export default config;
