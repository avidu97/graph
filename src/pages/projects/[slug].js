import { GraphQLClient } from 'graphql-request';
import styles from "../../../styles/projects.module.css"



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
        demoUrl
        platform
        sourceUrl
        company
        date
        mainImage {
          url
        }
        projectContent {
          html
        }
        projectImages {
          url
          fileName
        }
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
    <img src={project.mainImage.url} alt={project.title} />
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <p>{project.sourceUrl}</p>
    <p>{project.demoUrl}</p>
    <p>{project.platform}</p>
    <p>{project.company}</p>
    <p>{project.date}</p>
    <div dangerouslySetInnerHTML={{__html: project.projectContent.html}} />
    <img src={project.projectImages.url} alt={project.projectImages.fileName} />
  </React.Fragment>
);
