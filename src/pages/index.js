import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import styles from "../pages/home.module.css";

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
      <div className={styles.container}>
        <div className={styles.hero_container}>
          <div className={styles.hero_text}>
            <h1>Hi, I'm Avidu, an self taught web developer and designer</h1>
          </div>
          <div className={styles.hero_opposite}>
            <div className={styles.hero_image_container}>
              <div className={styles.hero_image}>
                <img className={styles.pp} src="https://media.graphassets.com/1lP32KT5Qk2Fp9NOcFo0" alt="" />
              </div>
            </div>
            <div className={styles.hero_social}>
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.2975C0 1.92375 1.9725 0 4.40625 0H55.5938C58.0275 0 60 1.92375 60 4.2975V55.7025C60 58.0763 58.0275 60 55.5938 60H4.40625C1.9725 60 0 58.0763 0 55.7025V4.2975ZM18.5362 50.2275V23.1338H9.5325V50.2275H18.5362ZM14.0363 19.4325C17.175 19.4325 19.1287 17.355 19.1287 14.7525C19.0725 12.0938 17.1788 10.0725 14.0963 10.0725C11.0138 10.0725 9 12.0975 9 14.7525C9 17.355 10.9537 19.4325 13.9762 19.4325H14.0363ZM32.4412 50.2275V35.0963C32.4412 34.2863 32.5013 33.4762 32.7412 32.8988C33.39 31.2825 34.8713 29.6063 37.3613 29.6063C40.62 29.6063 41.9212 32.0888 41.9212 35.7337V50.2275H50.925V34.6875C50.925 26.3625 46.485 22.4925 40.56 22.4925C35.7825 22.4925 33.6413 25.1175 32.4412 26.9662V27.06H32.3813C32.4012 27.0287 32.4212 26.9974 32.4412 26.9662V23.1338H23.4412C23.5537 25.6763 23.4412 50.2275 23.4412 50.2275H32.4412Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.6 0H2.4C1.0725 0 0 1.0725 0 2.4V57.6C0 58.9275 1.0725 60 2.4 60H57.6C58.9275 60 60 58.9275 60 57.6V2.4C60 1.0725 58.9275 0 57.6 0ZM36.4875 17.9175H46.8675V20.445H36.4875V17.9175ZM30 38.76C29.5145 39.6816 28.8212 40.4776 27.975 41.085C27.09 41.7 26.1075 42.15 25.065 42.4125C23.9743 42.7048 22.8491 42.8486 21.72 42.84H9.3V17.2575H21.375C22.5975 17.2575 23.7075 17.37 24.72 17.58C25.725 17.79 26.58 18.15 27.3 18.6375C28.0125 19.125 28.575 19.7775 28.9725 20.5875C29.3625 21.39 29.565 22.395 29.565 23.5875C29.565 24.8775 29.2725 25.9425 28.6875 26.805C28.095 27.6675 27.24 28.365 26.0775 28.9125C27.66 29.3625 28.8225 30.165 29.5875 31.29C30.3675 32.43 30.75 33.795 30.75 35.4C30.75 36.705 30.5025 37.8225 30 38.76ZM50.91 34.8H37.53C37.53 36.255 38.0325 37.65 38.79 38.4C39.555 39.1425 40.65 39.5175 42.0825 39.5175C43.1175 39.5175 43.995 39.255 44.745 38.7375C45.4875 38.22 45.9375 37.6725 46.1025 37.1025H50.5875C49.8675 39.33 48.7725 40.92 47.2875 41.88C45.8175 42.84 44.0175 43.32 41.925 43.32C40.4625 43.32 39.15 43.08 37.9725 42.6225C36.84 42.18 35.82 41.505 34.98 40.635C34.1518 39.7416 33.5116 38.6907 33.0975 37.545C32.64 36.2775 32.415 34.9425 32.43 33.6C32.43 32.2125 32.6625 30.9225 33.1125 29.7225C33.975 27.39 35.7675 25.5225 38.055 24.555C39.2775 24.045 40.59 23.79 41.9175 23.805C43.4925 23.805 44.8575 24.105 46.0425 24.72C47.1833 25.3073 48.1738 26.1489 48.9375 27.18C49.695 28.2075 50.2275 29.3775 50.565 30.6975C50.8875 31.995 51 33.36 50.91 34.8ZM41.76 27.63C40.95 27.63 40.2675 27.7725 39.7425 28.05C39.2175 28.3275 38.7825 28.6725 38.4525 29.07C38.1382 29.4538 37.9059 29.8979 37.77 30.375C37.65 30.7725 37.5675 31.1775 37.5375 31.59H45.825C45.705 30.2925 45.255 29.3325 44.655 28.6575C44.025 27.99 43.0125 27.63 41.76 27.63ZM23.1225 26.8725C23.775 26.4 24.09 25.62 24.09 24.5475C24.1125 24.0375 24.0075 23.535 23.7825 23.0775C23.58 22.71 23.28 22.4025 22.9125 22.185C22.5314 21.9539 22.1082 21.801 21.6675 21.735C21.1875 21.645 20.7 21.6 20.22 21.6075H14.9475V27.585H20.655C21.6375 27.5925 22.47 27.3525 23.1225 26.8725ZM24.0075 32.2725C23.2725 31.71 22.29 31.4325 21.0675 31.4325H14.9325V38.4825H20.9475C21.51 38.4825 22.0275 38.43 22.53 38.325C23.0325 38.22 23.4825 38.04 23.865 37.785C24.2475 37.5375 24.555 37.2 24.7875 36.765C25.0125 36.33 25.125 35.775 25.125 35.1075C25.125 33.78 24.75 32.8425 24.0075 32.2725Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.5714 0H6.42857C2.87946 0 0 2.87946 0 6.42857V53.5714C0 57.1205 2.87946 60 6.42857 60H53.5714C57.1205 60 60 57.1205 60 53.5714V6.42857C60 2.87946 57.1205 0 53.5714 0ZM37.1384 51.3884C36.0134 51.5893 35.5982 50.8929 35.5982 50.317C35.5982 49.5938 35.625 45.8973 35.625 42.9107C35.625 40.8214 34.9286 39.4955 34.1116 38.7991C39.067 38.25 44.2902 37.567 44.2902 29.0089C44.2902 26.5714 43.4196 25.3527 42 23.7857C42.2277 23.2098 42.9911 20.8393 41.7723 17.7589C39.9107 17.183 35.6518 20.1562 35.6518 20.1562C33.8839 19.6607 31.9688 19.4062 30.0804 19.4062C28.192 19.4062 26.2768 19.6607 24.5089 20.1562C24.5089 20.1562 20.25 17.183 18.3884 17.7589C17.1696 20.8259 17.9196 23.1964 18.1607 23.7857C16.7411 25.3527 16.0714 26.5714 16.0714 29.0089C16.0714 37.5268 21.067 38.25 26.0223 38.7991C25.3795 39.375 24.8036 40.3661 24.6027 41.7857C23.3304 42.3616 20.0759 43.3527 18.1339 39.9241C16.9152 37.808 14.7188 37.6339 14.7188 37.6339C12.5491 37.6071 14.5714 39 14.5714 39C16.0179 39.6696 17.0357 42.2411 17.0357 42.2411C18.3348 46.2187 24.5491 44.8795 24.5491 44.8795C24.5491 46.7411 24.5759 49.7679 24.5759 50.317C24.5759 50.8929 24.1741 51.5893 23.0357 51.3884C14.1964 48.4286 8.00893 40.0179 8.00893 30.1875C8.00893 17.8929 17.4107 8.55804 29.7054 8.55804C42 8.55804 51.9643 17.8929 51.9643 30.1875C51.9777 40.0179 45.9777 48.442 37.1384 51.3884ZM24 43.2054C23.7455 43.2589 23.5045 43.1518 23.4777 42.9777C23.4509 42.7768 23.625 42.6027 23.8795 42.5491C24.1339 42.5223 24.375 42.6295 24.4018 42.8036C24.442 42.9777 24.2679 43.1518 24 43.2054ZM22.7277 43.0848C22.7277 43.2589 22.5268 43.4062 22.2589 43.4062C21.9643 43.433 21.7634 43.2857 21.7634 43.0848C21.7634 42.9107 21.9643 42.7634 22.2321 42.7634C22.4866 42.7366 22.7277 42.8839 22.7277 43.0848ZM20.8929 42.9375C20.8393 43.1116 20.5714 43.192 20.3437 43.1116C20.0893 43.058 19.9152 42.8571 19.9688 42.683C20.0223 42.5089 20.2902 42.4286 20.5179 42.4821C20.7857 42.5625 20.9598 42.7634 20.8929 42.9375ZM19.2455 42.2143C19.125 42.3616 18.8705 42.3348 18.6696 42.1339C18.4687 41.9598 18.4152 41.7054 18.5491 41.5848C18.6696 41.4375 18.9241 41.4643 19.125 41.6652C19.2991 41.8393 19.3661 42.1071 19.2455 42.2143ZM18.0268 40.9955C17.9062 41.0759 17.6786 40.9955 17.5312 40.7946C17.3839 40.5938 17.3839 40.3661 17.5312 40.2723C17.6786 40.1518 17.9062 40.2455 18.0268 40.4464C18.1741 40.6473 18.1741 40.8884 18.0268 40.9955ZM17.1562 39.6964C17.0357 39.817 16.8348 39.75 16.6875 39.6161C16.5402 39.442 16.5134 39.2411 16.6339 39.1473C16.7545 39.0268 16.9554 39.0937 17.1027 39.2277C17.25 39.4018 17.2768 39.6027 17.1562 39.6964ZM16.2589 38.7054C16.2054 38.8259 16.0312 38.8527 15.8839 38.7589C15.7098 38.6786 15.6295 38.5312 15.683 38.4107C15.7366 38.3304 15.8839 38.2902 16.058 38.3571C16.2321 38.4509 16.3125 38.5982 16.2589 38.7054Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
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
    </div>
  );
}
