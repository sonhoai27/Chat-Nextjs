import Head from 'next/head'
import { BASEURL } from '../../config/const';
export default () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href={BASEURL + "static/css/cdn.css"} />
      <link rel="stylesheet" href={BASEURL + "static/css/styles.css"} />
      <link
        href="https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900&amp;subset=latin-ext,vietnamese" rel="stylesheet"></link>
    </Head>
  );
};
