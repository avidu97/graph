import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-ap-south-1.graphcms.com/v2/cl3rbzoet8srg01xk3ialfs6j/master'
);

export async function getStaticProps({ params }) {
  const { project } = await graphcms.request(
    `
    query ProductPageQuery($slug: String!) {
      project(where: { slug: $slug }) {
        title
        description
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const { projects } = await graphcms.request(`
    {
      projects {
        slug
        title
      }
    }
  `);

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ project }) => (
  <React.Fragment>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
  </React.Fragment>
);
