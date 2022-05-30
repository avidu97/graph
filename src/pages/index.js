import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/cl3rbzoet8srg01xk3ialfs6j/master'
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

export default ({ projects }) =>
  projects.map(({ slug, title }) => (
    <Link key={slug} href={`/projects/${slug}`}>
      <a>{title}</a>
    </Link>
  ));
