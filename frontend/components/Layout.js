import Head from "next/head";
import styles from '../styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ EVENTS | Find Parties",
  description: "Find the lates DJ and other party events",
  keywords: "music, dj, edm, event",
};
