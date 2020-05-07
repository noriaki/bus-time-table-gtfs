import fetch from 'node-fetch';

import config from './config';

type FetcherParams = {
  url: string;
};
const fetcher: (params: FetcherParams) => Promise<any> = async ({ url }) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const main: () => Promise<void> = async () => {
  const jsons = await Promise.all(config.map(fetcher));
  console.log(jsons);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
