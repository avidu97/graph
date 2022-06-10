import { GraphQLClient } from "graphql-request";
import styles from "../../../styles/projects.module.css";
import Head from "next/head";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl3rbzoet8srg01xk3ialfs6j/master"
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
    <Head>
      <title>Avidu | {project.title}</title>
      <meta name="description" content={project.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="all" />
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.mainImage.url} />
      <meta property="og:type" content="website" />
      <meta charSet="utf-8"></meta>
    </Head>
    <div className={styles.main}>
      <div className={styles.main_container}>
        {/* ______________________main image________________________________ */}

        <div className={styles.main_image_container}>
          <div>
            <img
              className={styles.main_image}
              src={project.mainImage.url}
              alt={project.title}
            />
          </div>
        </div>

        {/* ______________________title and description_____________________ */}

        <div className={styles.title_container}>
          <div className={styles.t_d_holder}>
            <div className={styles.title_holder}>
              <h1>{project.title}</h1>
            </div>
            <div className={styles.des_holder}>
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        <div className={styles.hr}></div>

        {/* ________________________tag area________________________________ */}

        <div className={styles.tag_container}>
          <div className={styles.tag_holder}>
            <div className={styles.tag_wrapper}>
              <div className={styles.tag_single}>
                <p>
                  Date: <span className={styles.tag}>{project.date}</span>
                </p>
              </div>
              <div className={styles.tag_single}>
                <p>
                  Platform:{" "}
                  <span className={styles.tag}>{project.platform}</span>
                </p>
              </div>
              <div className={styles.tag_single}>
                <p>
                  Company: <span className={styles.tag}>{project.company}</span>
                </p>
              </div>
              <div className={styles.tag_single}>
                <p>
                  Demo URL:{" "}
                  <span className={styles.tag}>{project.demoUrl}</span>
                </p>
              </div>
              <div className={styles.tag_single}>
                <p>
                  Source URL:{" "}
                  <span className={styles.tag}>{project.sourceUrl}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.hr}></div>

        {/* ______________________content area______________________________ */}

        <div className={styles.content_container}>
          <div className={styles.content_wrapper}>
            <div
              dangerouslySetInnerHTML={{ __html: project.projectContent.html }}
            />
          </div>
        </div>

        <div className={styles.hr}></div>

        {/* __________________________footer________________________________ */}

        <footer>
          <div className={styles.footer}>Avidu ❤ 2022</div>
        </footer>
      </div>
    </div>
  </React.Fragment>
);
