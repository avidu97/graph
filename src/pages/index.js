import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";



export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-south-1.graphcms.com/v2/cl3rbzoet8srg01xk3ialfs6j/master"
  );

  const { projects } = await graphcms.request(
    `
      { 
        projects {
          slug
          title
        }
      }
    `
  );

  return {
    props: {
      projects,
    },
  };
}


export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Avidu | Web designer and Developer from Sri Lanka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* nav bar */}
      {/* hero content */}
      <div>
        <div>
          <h1>Hi, I'm Avidu, an self taught web developer and designer</h1>
        </div>
      </div>
      {/* services */}
      {/* why me */}
      {/* projects */}
      {/* contact */}
      {/* footer */}
      <div>
        <h1>PROJECTS</h1>
      </div>

      <div>
        {projects.map(({ slug, title }) => (
          <ul>
            <Link key={slug} href={`/projects/${slug}`}>
              <a>{title}</a>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
}

