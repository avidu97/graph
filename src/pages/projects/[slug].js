import { GraphQLClient } from "graphql-request";
import styles from "../../../styles/projects.module.css";

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
    <div className={styles.main}>
      <div className={styles.main_container}>
        {/* ______________________main image________________________________ */}

        <div></div>
        <div>
          <img src={project.mainImage.url} alt={project.title} />
        </div>

        {/* ______________________title and description_____________________ */}

        <div className={styles.t_d_holder}>
          <div className={styles.title_holder}>
            <h1>{project.title}</h1>
          </div>
          <div className={styles.des_holder}>
            <p>{project.description}</p>
          </div>
        </div>

        {/* ________________________tag area________________________________ */}

        <div className={styles.tag_container}>
          <div className={styles.tag_wrapper}>
            <div className={styles.tag_single}>
              <p>
                Date: <span className={styles.tag}>{project.date}</span>
              </p>
            </div>
            <div className={styles.tag_single}>
              <p>
                Platform: <span className={styles.tag}>{project.platform}</span>
              </p>
            </div>
            <div className={styles.tag_single}>
              <p>
                Company: <span className={styles.tag}>{project.company}</span>
              </p>
            </div>
            <div className={styles.tag_single}>
              <p>
                Demo URL: <span className={styles.tag}>{project.demoUrl}</span>
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

        {/* ______________________content area______________________________ */}

        <div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: project.projectContent.html }}
            />
          </div>
        </div>

        {/* __________________________footer________________________________ */}

        <footer>
          <div className={styles.footer}>avidu©2022</div>
        </footer>
      </div>
    </div>
  </React.Fragment>
);
