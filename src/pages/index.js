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

      {/* ____________________hero content________________________ */}

      <div className={styles.container}>
        <div className={styles.hero_container}>
          <div className={styles.hero_text}>
            <h1>Hi, I'm Avidu, </h1>
            <h2>
              self tought web designer and developer from sri lanka. who is
              passionate in designing and building great websites.
            </h2>
          </div>
          <div className={styles.hero_opposite}>
            <div className={styles.hero_image_container}>
              <div className={styles.hero_image}>
                <img
                  className={styles.pp}
                  src="https://media.graphassets.com/1lP32KT5Qk2Fp9NOcFo0"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.hero_hr}></div>
            <div className={styles.hero_social}>
              <div className={styles.social_icons}>
                <svg
                  width="40"
                  height="40"
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
              <div className={styles.social_icons}>
                <svg
                  width="40"
                  height="40"
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
              <div className={styles.social_icons}>
                <svg
                  width="40"
                  height="40"
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
        <div className={styles.sec_hr}></div>
        {/* ___________________________services_______________________________*/}
        <div>
          <h1>WHAT I DO</h1>
          <div className={styles.service_box_container}>
            <div className={styles.service_boxes_1}>
              <div className={styles.service_box_title}>
                <h3>WEB DESIGN</h3>
              </div>
              <p>
                This is a service i offer to you, you can contact me if you want
              </p>
            </div>
            <div className={styles.service_boxes_2}>
              <div className={styles.service_box_title}>
                <h3>WEB DEVELOPMENT</h3>
              </div>
              <p>
                This is a service i offer to you, you can contact me if you want
              </p>
            </div>
            <div className={styles.service_boxes_3}>
              <div className={styles.service_box_title}>
                <h3>SOCIAL MEDIA</h3>
              </div>
              <p>
                This is a service i offer to you, you can contact me if you want
              </p>
            </div>
            <div className={styles.service_boxes_4}>
              <div className={styles.service_box_title}>
                <h3 className={styles.service_title}>DOMAINS/ E-MAIL</h3>
              </div>
              <p>
                This is a service i offer to you, you can contact me if you want
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sec_hr}></div>

        {/* ____________________________tools________________________________ */}

        <div>
          <div className={styles.tool_container}>
            <div className={styles.tool_holder}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.3803 0.0215105C37.2084 0.0371355 36.6609 0.0918231 36.1681 0.130886C24.8056 1.15526 14.1622 7.28527 7.42125 16.7072C3.6675 21.9459 1.26688 27.8884 0.359688 34.1828C0.0390625 36.3797 0 37.0288 0 40.0078C0 42.9869 0.0390625 43.636 0.359688 45.8328C2.53375 60.8532 13.2237 73.4732 27.7222 78.1488C30.3187 78.9857 33.0556 79.5563 36.1681 79.9004C37.3803 80.0332 42.6197 80.0332 43.8319 79.9004C49.2044 79.306 53.7556 77.977 58.2444 75.686C58.9325 75.3341 59.0656 75.2404 58.9716 75.1619C58.9091 75.1151 55.9766 71.1823 52.4575 66.4282L46.0606 57.7882L38.045 45.9269C33.6344 39.4056 30.0059 34.0731 29.9747 34.0731C29.9434 34.0653 29.9122 39.3356 29.8966 45.7703C29.8728 57.0375 29.8653 57.491 29.7244 57.7569C29.5212 58.14 29.3647 58.2966 29.0363 58.4685C28.7859 58.5935 28.5669 58.6169 27.3862 58.6169H26.0331L25.6737 58.3904C25.4509 58.2506 25.2698 58.0534 25.1497 57.8194L24.9853 57.4675L25.0009 41.7906L25.0244 26.1056L25.2669 25.8006C25.3919 25.6366 25.6578 25.4256 25.8456 25.3237C26.1662 25.1675 26.2912 25.1519 27.6441 25.1519C29.2394 25.1519 29.5053 25.2144 29.9197 25.6678C30.0372 25.7928 34.3772 32.3297 39.5697 40.2034C44.7625 48.0769 51.8634 58.8282 55.3509 64.106L61.6853 73.6998L62.0059 73.4888C64.8447 71.6435 67.8475 69.0163 70.2247 66.2794C75.2844 60.47 78.5453 53.3863 79.6403 45.8331C79.9609 43.636 80 42.9869 80 40.0081C80 37.0288 79.9609 36.38 79.6403 34.1828C77.4662 19.1625 66.7763 6.54246 52.2778 1.86683C49.7203 1.03807 46.9991 0.467136 43.9491 0.123073C43.1984 0.044948 38.0294 -0.0409896 37.3803 0.0215105ZM53.7556 24.2134C54.1309 24.4009 54.4359 24.7609 54.5453 25.1362C54.6078 25.3394 54.6234 29.6869 54.6078 39.4841L54.5847 53.5425L52.1056 49.7425L49.6188 45.9425V35.7231C49.6188 29.1159 49.65 25.4019 49.6969 25.2222C49.8219 24.7844 50.0959 24.4403 50.4712 24.2369C50.7919 24.0728 50.9091 24.0572 52.1369 24.0572C53.2944 24.0572 53.4975 24.0728 53.7556 24.2134Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="98"
                height="60"
                viewBox="0 0 98 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.4335 23.4323C72.4335 23.4323 64.5155 52.8213 63.8686 55.2483C61.8747 36.8293 59.862 18.4132 57.8304 0C44.3381 0 37.1241 11.3646 33.3116 23.36L22.875 55.3205C22.814 53.0284 21.4102 23.7067 21.4102 23.7067C20.5802 9.00981 9.20372 0.0626016 0 0.0626016L11.1446 80C25.2797 79.9278 32.9006 68.6306 36.8922 56.6352C36.8922 56.6352 45.396 30.6411 45.746 29.4613C45.807 30.5688 51.8492 79.9952 51.8492 79.9952C66.0413 79.9952 73.6663 69.3914 77.7677 57.815L97.6521 0.0674168C83.635 0.0674168 76.246 11.3646 72.4335 23.4274V23.4323Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.1651 38.265C63.1651 34.025 61.6401 31.09 60.3351 28.805L59.9351 28.155C58.3501 25.605 56.9651 23.365 56.9651 20.755C56.9651 17.605 59.3551 14.665 62.7251 14.665C62.8251 14.665 62.9201 14.675 63.0151 14.68L63.1701 14.695C56.8509 8.89066 48.5804 5.67453 40.0001 5.68496C34.3134 5.68204 28.7154 7.09407 23.7104 9.79381C18.7055 12.4936 14.4509 16.3962 11.3301 21.15C12.1301 21.175 12.8951 21.195 13.5401 21.195C17.1251 21.195 22.6801 20.76 22.6801 20.76C24.5301 20.65 24.7501 23.365 22.9001 23.585C22.9001 23.585 21.0451 23.805 18.9751 23.91L31.4751 61.08L38.9751 38.55L33.6251 23.905C31.7801 23.795 30.0301 23.58 30.0301 23.58C28.1801 23.47 28.4001 20.64 30.2451 20.75C30.2451 20.75 35.9151 21.185 39.2851 21.185C42.8751 21.185 48.4351 20.75 48.4351 20.75C50.2851 20.64 50.5001 23.36 48.6501 23.58C48.6501 23.58 46.7901 23.795 44.7251 23.905L57.1251 60.79L60.5451 49.355L60.8151 48.49C62.1651 44.19 63.1601 41.015 63.1601 38.26L63.1651 38.265ZM5.68509 40C5.68475 46.4437 7.49848 52.7573 10.9187 58.2184C14.339 63.6795 19.2276 68.0674 25.0251 70.88L8.65009 26.03C6.68924 30.4259 5.67886 35.1865 5.68509 40Z"
                  fill="black"
                />
                <path
                  d="M30.3049 72.915L40.6049 43L51.1499 71.9C51.2199 72.065 51.2999 72.22 51.3949 72.37C44.5971 74.7649 37.2173 74.9556 30.3049 72.915ZM70.1049 23.535C70.2549 24.63 70.3399 25.8 70.3399 27.065C70.3399 30.545 69.6899 34.46 67.7299 39.355L57.2499 69.655C64.9835 65.1618 70.656 57.8255 73.0583 49.2101C75.4606 40.5947 74.4027 31.3816 70.1099 23.535H70.1049Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 40C0 17.945 17.945 0 40 0C62.05 0 80 17.945 80 40C80 62.055 62.05 80 40 80C17.945 80 0 62.055 0 40ZM1.835 40C1.835 61.045 18.955 78.165 40 78.165C61.04 78.165 78.16 61.045 78.16 40C78.16 18.95 61.04 1.835 40 1.835C18.95 1.835 1.835 18.95 1.835 40Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="70"
                height="60"
                viewBox="0 0 70 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.9466 13.9567C34.2166 14.3407 35.5687 14.3614 36.8499 14.0167L57.9366 51.29C56.9603 52.2306 56.2743 53.4314 55.9599 54.75H14.0332C13.6959 53.3656 12.9531 52.1132 11.8999 51.1534L32.9432 13.9567H32.9466ZM29.8766 12.0734C29.9366 12.14 30.0032 12.2034 30.0666 12.2667L8.97657 49.55C8.87711 49.5234 8.77709 49.4989 8.67657 49.4767V30.52C9.63543 30.3055 10.5391 29.8936 11.3299 29.3105C12.1208 28.7274 12.7815 27.9859 13.2699 27.1334C13.7563 26.2856 14.0635 25.347 14.1725 24.3757C14.2814 23.4044 14.1898 22.4211 13.9032 21.4867L29.8766 12.0767V12.0734ZM41.7766 9.29002C42.1144 8.22935 42.1986 7.10419 42.0224 6.00505C41.8462 4.90591 41.4144 3.86347 40.7619 2.96158C40.1094 2.05969 39.2544 1.32353 38.2655 0.812308C37.2767 0.301088 36.1816 0.02908 35.0685 0.0181643C33.9554 0.00724865 32.8552 0.25773 31.8565 0.74946C30.8579 1.24119 29.9885 1.96044 29.3185 2.84936C28.6484 3.73828 28.1963 4.77205 27.9986 5.86753C27.8008 6.963 27.8629 8.0896 28.1799 9.15669L12.1966 18.5767C11.4295 17.7901 10.4905 17.1921 9.45327 16.8297C8.41604 16.4674 7.3089 16.3506 6.21891 16.4886C5.12891 16.6265 4.08577 17.0154 3.1715 17.6247C2.25724 18.234 1.49677 19.0471 0.949899 20C0.403712 20.9541 0.0847888 22.0213 0.0178942 23.1186C-0.0490004 24.216 0.137934 25.314 0.564182 26.3274C0.990429 27.3407 1.64452 28.2422 2.47566 28.9619C3.3068 29.6815 4.29262 30.1998 5.35657 30.4767V49.5267C4.29493 49.8063 3.31185 50.3264 2.48338 51.0467C1.65492 51.767 1.00328 52.6683 0.578885 53.6808C0.154491 54.6933 -0.0312798 55.7898 0.0359453 56.8856C0.10317 57.9814 0.421589 59.047 0.966565 60C1.51269 60.9506 2.27153 61.7619 3.18362 62.3701C4.09572 62.9784 5.13628 63.3672 6.22377 63.5061C7.31127 63.6449 8.41614 63.53 9.4518 63.1704C10.4875 62.8108 11.4258 62.2163 12.1932 61.4334L28.1766 70.8534C27.9855 71.5085 27.889 72.1876 27.8899 72.87C27.8877 73.8053 28.07 74.7318 28.4263 75.5965C28.7826 76.4613 29.3059 77.2473 29.9663 77.9095C30.6267 78.5718 31.4112 79.0973 32.2749 79.456C33.1386 79.8147 34.0646 79.9996 34.9999 80C36.1379 79.9975 37.2588 79.7226 38.2687 79.1981C39.2787 78.6736 40.1484 77.9149 40.805 76.9855C41.4617 76.056 41.8862 74.9828 42.043 73.8556C42.1999 72.7285 42.0845 71.5801 41.7066 70.5067L57.5432 61.1734C58.2897 62.017 59.2264 62.6708 60.2758 63.0805C61.3252 63.4902 62.457 63.6441 63.5777 63.5294C64.6983 63.4148 65.7756 63.0348 66.7202 62.4211C67.6649 61.8073 68.4497 60.9774 69.0099 60C69.5715 59.0314 69.8969 57.9441 69.9598 56.8262C70.0228 55.7083 69.8214 54.5913 69.3721 53.5658C68.9228 52.5402 68.2382 51.6349 67.3737 50.9234C66.5093 50.2118 65.4893 49.7139 64.3966 49.47V30.5367C65.4903 30.2925 66.5113 29.7948 67.3775 29.0838C68.2437 28.3728 68.9309 27.4684 69.3836 26.4433C69.8363 25.4181 70.042 24.301 69.984 23.1819C69.9261 22.0628 69.6061 20.9729 69.0499 20C68.4963 19.0389 67.7256 18.2206 66.7993 17.6105C65.8729 17.0005 64.8167 16.6156 63.7151 16.4867C62.6134 16.3577 61.4969 16.4884 60.4548 16.868C59.4126 17.2477 58.4738 17.866 57.7132 18.6734L41.7799 9.28669L41.7766 9.29002ZM39.7799 12.4134L40.0299 12.1734L56.0566 21.6167C55.7953 22.5343 55.7205 23.4949 55.8368 24.4419C55.953 25.3888 56.2578 26.3029 56.7332 27.13C57.1991 27.9466 57.8232 28.662 58.569 29.2344C59.3148 29.8068 60.1673 30.2246 61.0766 30.4634V49.53C60.9894 49.5539 60.9027 49.5794 60.8166 49.6067L39.7799 12.4134ZM56.0966 58.6067L40.1832 67.9867C39.5201 67.2769 38.718 66.7112 37.8269 66.3246C36.9357 65.9381 35.9746 65.7391 35.0032 65.74C32.9832 65.74 31.1632 66.58 29.8699 67.9334L13.9199 58.5334C13.9599 58.4034 13.9966 58.2734 14.0266 58.14H55.9666C56.0066 58.2967 56.0499 58.4534 56.0999 58.6067H56.0966Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="54"
                height="60"
                viewBox="0 0 54 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0499 0C6.89322 0 0.333219 6.84333 0.333219 15.2267C0.333219 20.3233 2.75989 24.85 6.48989 27.6133C4.56748 29.0536 3.00925 30.9243 1.9401 33.0753C0.870949 35.2263 0.320616 37.5979 0.333219 40C0.333219 45.1 2.75989 49.6233 6.48989 52.3867C4.56748 53.827 3.00925 55.6976 1.9401 57.8486C0.870949 59.9997 0.320616 62.3713 0.333219 64.7733C0.333219 73.1567 6.89322 80 15.0499 80C23.2032 80 29.7666 73.1567 29.7666 64.7733V51.9C32.3443 54.0493 35.5936 55.2275 38.9499 55.23C47.1066 55.2267 53.6666 48.3833 53.6666 40C53.6799 37.5978 53.13 35.2259 52.0607 33.0748C50.9915 30.9236 49.4329 29.0531 47.5099 27.6133C49.4323 26.173 50.9905 24.3024 52.0597 22.1514C53.1288 20.0003 53.6792 17.6287 53.6666 15.2267C53.6666 6.84333 47.1066 0 38.9499 0H15.0499ZM5.86322 15.2267C5.86322 9.92333 10.0032 5.67667 15.0499 5.67667H24.2332V24.7767H15.0499C10.0032 24.7767 5.86322 20.5267 5.86322 15.2267ZM38.9499 24.7733H29.7666V5.67333H38.9499C43.9999 5.67333 48.1366 9.92333 48.1366 15.2267C48.1366 20.5267 43.9999 24.7733 38.9499 24.7733ZM5.86655 40C5.86655 34.7 10.0066 30.45 15.0532 30.45H24.2366V49.55H15.0499C9.99989 49.55 5.86322 45.3 5.86322 40H5.86655ZM29.7666 40C29.7666 34.7 33.9066 30.45 38.9532 30.45C44.0032 30.45 48.1399 34.6967 48.1399 40C48.1399 45.3 44.0032 49.55 38.9532 49.55C33.9066 49.55 29.7699 45.3033 29.7699 40H29.7666ZM5.86655 64.7733C5.86655 59.4733 10.0066 55.2267 15.0532 55.2267H24.2366V64.7733C24.2366 70.0767 20.1032 74.3233 15.0532 74.3233C10.0066 74.3233 5.86655 70.0767 5.86655 64.7733Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="68"
                height="60"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.0001 67.3333H14.0001C10.4639 67.3333 7.07248 65.9285 4.57199 63.428C2.07151 60.9276 0.666748 57.5362 0.666748 54V14C0.666748 10.4637 2.07151 7.07235 4.57199 4.57187C7.07248 2.07138 10.4639 0.666626 14.0001 0.666626H54.0001C57.5363 0.666626 60.9277 2.07138 63.4282 4.57187C65.9286 7.07235 67.3334 10.4637 67.3334 14V54C67.3334 57.5362 65.9286 60.9276 63.4282 63.428C60.9277 65.9285 57.5363 67.3333 54.0001 67.3333ZM14.0001 7.33329C12.232 7.33329 10.5363 8.03567 9.28604 9.28591C8.03579 10.5362 7.33341 12.2318 7.33341 14V54C7.33341 55.7681 8.03579 57.4638 9.28604 58.714C10.5363 59.9642 12.232 60.6666 14.0001 60.6666H54.0001C55.7682 60.6666 57.4639 59.9642 58.7141 58.714C59.9644 57.4638 60.6667 55.7681 60.6667 54V14C60.6667 12.2318 59.9644 10.5362 58.7141 9.28591C57.4639 8.03567 55.7682 7.33329 54.0001 7.33329H14.0001ZM46.5401 49.92C45.0986 49.978 43.6604 49.742 42.3131 49.2262C40.9658 48.7105 39.7376 47.9258 38.7034 46.92C36.5381 44.4514 35.4274 41.2319 35.6101 37.9533C35.543 34.7668 36.6797 31.6721 38.7934 29.2866C39.8984 28.1184 41.2379 27.197 42.7241 26.5829C44.2102 25.9688 45.8094 25.6759 47.4167 25.7233H48.1934V19.0566C48.1934 18.5366 48.6167 18.1133 49.1367 18.11H53.5267C53.7704 18.1009 54.0086 18.1842 54.1934 18.3433C54.2836 18.4287 54.3546 18.5323 54.4017 18.6472C54.4489 18.7622 54.471 18.8858 54.4667 19.01V44.6066C54.4501 45.49 54.4967 46.3733 54.6001 47.25V47.3333C54.6052 47.5452 54.5395 47.7529 54.4134 47.9233C54.3046 48.0571 54.1666 48.1642 54.0101 48.2366C51.6967 49.3408 49.1668 49.917 46.6034 49.9233L46.5401 49.92ZM43.4867 32.8666L43.4701 32.8866C42.4143 34.2761 41.8831 35.9937 41.9701 37.7366C41.8332 39.5527 42.3577 41.3569 43.4467 42.8166C44.3367 43.7966 45.6201 44.33 46.9434 44.2633C47.3636 44.2696 47.783 44.227 48.1934 44.1366V31.3066C47.8823 31.24 47.5649 31.2076 47.2467 31.21C46.5355 31.1909 45.829 31.3306 45.1786 31.6189C44.5282 31.9072 43.9502 32.3369 43.4867 32.8766V32.8666ZM34.7501 49.5333H29.9134C29.6648 49.5495 29.4173 49.4876 29.2057 49.356C28.9941 49.2245 28.8289 49.0301 28.7334 48.8L28.0334 47.3333L28.0167 47.2966L27.3334 45.9333L27.1201 45.49C26.0567 43.2966 24.9601 41.0366 23.8601 38.71C22.3306 42.0986 20.756 45.4667 19.1367 48.8133V48.8466L19.1201 48.8766C19.0085 49.0636 18.8529 49.2204 18.6667 49.3333C18.4775 49.4463 18.2604 49.504 18.0401 49.5H13.4701C13.279 49.5093 13.09 49.4562 12.9318 49.3485C12.7736 49.2408 12.6548 49.0845 12.5934 48.9033C12.5533 48.7653 12.5453 48.6199 12.5702 48.4783C12.595 48.3367 12.652 48.2027 12.7367 48.0866L20.1667 33.8833L12.9801 19.5033C12.8834 19.3634 12.8283 19.199 12.8213 19.0291C12.8142 18.8592 12.8554 18.6907 12.9401 18.5433C13.0215 18.4095 13.1361 18.2991 13.2728 18.2226C13.4094 18.1461 13.5635 18.1061 13.7201 18.1066H18.5001C18.7323 18.0942 18.9633 18.1473 19.1667 18.26C19.3736 18.3862 19.5329 18.5772 19.6201 18.8033C21.4067 22.5533 22.9134 25.8033 24.2301 28.6866C25.8667 25.02 27.6067 21.2933 28.7734 18.8233L28.7901 18.7866L28.8101 18.7533V18.7166C28.8936 18.574 28.9981 18.4448 29.1201 18.3333C29.3263 18.1612 29.5882 18.0699 29.8567 18.0766H34.3334C34.5046 18.0721 34.6734 18.1172 34.8195 18.2065C34.9657 18.2958 35.0828 18.4255 35.1567 18.58C35.2156 18.7214 35.2394 18.8751 35.226 19.0277C35.2127 19.1804 35.1626 19.3275 35.0801 19.4566L27.8901 33.4133L35.4967 48.08C35.5768 48.2073 35.627 48.3511 35.6437 48.5006C35.6605 48.6501 35.6433 48.8014 35.5934 48.9433C35.5306 49.1159 35.4157 49.2647 35.2646 49.3692C35.1136 49.4737 34.9338 49.5287 34.7501 49.5266V49.5333Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.8827 16.8763H35.2161L47.1994 57.0233H39.9609L36.9803 45.5875H25.3012L22.2597 57.0234H15.8727L26.8828 18.762V16.8763H26.8827ZM35.3378 39.6872L31.2014 22.7156L26.9434 39.6869H35.3378V39.6872ZM59.6086 27.1872H53.0391V57.0234H59.6086V27.1875V27.1872ZM56.2391 15.5955C54.1108 15.5955 52.3855 17.3009 52.3855 19.4048C52.3855 21.5088 54.1108 23.2144 56.2391 23.2144C58.3673 23.2144 60.0928 21.5089 60.0928 19.405C60.0928 17.3011 58.3675 15.5955 56.2391 15.5955ZM80 80H0V0H80V80Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M80 80H0V0H80V80ZM63.5016 33.9084V27.7038C62.4797 27.2488 56.628 25.5748 52.005 27.3389C45.3456 29.8798 45.5848 37.5345 48.1119 40.5387C51.3861 44.4313 59.5309 45.8825 58.1981 49.7031C57.508 51.6816 54.2859 52.0259 51.4453 51.3617C48.8 50.7433 46.5 49.1764 46.5 49.1764V55.7459C46.5 55.7459 48.7734 57.0134 51.5638 57.315C55.1408 57.7014 59.6245 56.9717 61.8708 54.9752C65.8692 51.4209 66.4833 43.5475 58.9059 39.8914C52.6005 36.8492 52.7042 35.9809 52.7484 34.4205C52.8078 32.3305 57.1959 31.0439 63.5016 33.9084ZM29.4984 16.4961C34.7448 16.6786 42.455 19.0966 42.455 29.407C42.455 39.7175 33.0216 43.1008 24.4139 42.3636V56.9625H18.0016V16.6328C18.0016 16.6328 24.2517 16.3136 29.4983 16.4961H29.4984ZM31.1636 35.9766C33.9286 34.9677 35.7258 32.7988 35.7258 29.4297C35.7258 25.8577 33.8969 23.4387 31.0997 22.7555C28.0706 22.0153 24.4139 22.4516 24.4139 22.4516V36.5209C24.4139 36.5209 29.4756 36.5925 31.1636 35.9766Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.2516 36.1438C32.9813 46.2286 28.7863 52.19 18.3719 51.0959V22.3556C28.8945 21.197 33.305 26.6894 33.2516 36.1438ZM80 0V80H0V0H80ZM40.0181 35.9981C40.0181 24.393 33.9062 16.462 21.6462 16.462H11.7144V57.0259H21.2823C29.4316 57.0259 40.0183 52.1509 40.0183 35.9981H40.0181ZM68.3219 37.4534C68.3219 28.613 62.5739 26.612 57.4442 26.612C53.2606 26.612 49.1133 27.8491 46.0208 29.0131C45.3567 29.318 45.9136 29.1564 45.9117 33.1969V56.9167H52.5694V33.1242C58.3584 31.4773 61.7394 32.8316 61.6644 37.9264V56.9167H68.3219V37.4534Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.tool_holder}>
              <svg
                width="65"
                height="60"
                viewBox="0 0 65 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.4999 18.8333C55.6158 18.8254 54.7343 18.7362 53.8666 18.5666C53.0323 18.3915 52.2172 18.1347 51.4332 17.8L50.8666 17.6666H50.4666C50.1332 17.6666 49.9666 17.9 49.9666 18.3666V19.4666C49.9193 19.6751 49.9193 19.8915 49.9666 20.1C50.134 20.3741 50.3771 20.5941 50.6666 20.7333C51.4683 21.1344 52.3204 21.4259 53.1999 21.6C54.2919 21.861 55.4104 21.9953 56.5332 22C57.6627 22.0339 58.7898 21.8761 59.8666 21.5333C60.7561 21.2999 61.5857 20.8794 62.2999 20.3C62.9749 19.7782 63.5316 19.1193 63.9332 18.3666C64.3154 17.5537 64.5091 16.6649 64.4999 15.7666C64.5119 14.6521 64.1609 13.564 63.4999 12.6666C62.611 11.6567 61.4559 10.9174 60.1666 10.5333L56.9999 9.5333C56.1151 9.30432 55.2868 8.89586 54.5666 8.3333C54.3554 8.13071 54.1875 7.88745 54.0729 7.61819C53.9583 7.34894 53.8995 7.05926 53.8999 6.76663C53.8761 6.37111 53.9595 5.97649 54.1414 5.62445C54.3233 5.27242 54.5968 4.97605 54.9332 4.76663C55.8555 4.3192 56.8762 4.11277 57.8999 4.16663C59.3584 4.13123 60.806 4.42757 62.1332 5.0333C62.4045 5.17163 62.6978 5.26186 62.9999 5.29997C63.3332 5.29997 63.4999 5.0333 63.4999 4.56663V3.36663C63.5099 3.10748 63.4401 2.8515 63.2999 2.6333C63.1219 2.40641 62.8937 2.22386 62.6332 2.09997C62.336 1.93631 62.0234 1.80233 61.6999 1.69997C61.2851 1.55355 60.8621 1.43112 60.4332 1.3333L58.9666 0.999967C58.4228 0.960683 57.877 0.960683 57.3332 0.999967C56.3979 0.983841 55.4654 1.10743 54.5666 1.36663C53.725 1.61227 52.9346 2.00746 52.2332 2.5333C51.5825 3.00812 51.0471 3.62333 50.6666 4.3333C50.2577 5.09021 50.051 5.93982 50.0666 6.79997C50.0466 8.00337 50.4343 9.17813 51.1666 10.1333C52.0818 11.2358 53.3162 12.0277 54.6999 12.4L58.0332 13.4C58.858 13.5927 59.6241 13.9814 60.2666 14.5333C60.6656 14.9558 60.8813 15.519 60.8666 16.1C60.8738 16.5216 60.7697 16.9378 60.5649 17.3064C60.3601 17.6751 60.0617 17.9833 59.6999 18.2C58.7105 18.6977 57.6043 18.9166 56.4999 18.8333ZM37.1332 2.66663C37.0818 2.3399 36.9304 2.03712 36.6999 1.79997C36.4506 1.6161 36.1412 1.5328 35.8332 1.56663H33.9999C33.6935 1.54962 33.3897 1.63141 33.1332 1.79997C32.8902 2.02807 32.7366 2.33537 32.6999 2.66663L29.3666 17.3333L25.5666 2.66663C25.5059 2.33588 25.3427 2.03264 25.0999 1.79997C25.0999 1.79997 24.6666 1.56663 24.2332 1.56663H22.0666C21.6999 1.56663 21.5332 1.76663 21.5332 2.1333C21.5656 2.43991 21.6327 2.74185 21.7332 3.0333L26.9332 20.1666C27.0008 20.4714 27.1377 20.7566 27.3332 21C27.5953 21.1527 27.8974 21.2225 28.1999 21.2H30.0999C30.4129 21.2211 30.7253 21.1517 30.9999 21C31.21 20.7403 31.348 20.4299 31.3999 20.1L34.7332 5.8333L38.0666 20.1333C38.0943 20.4601 38.2358 20.7669 38.4666 21C38.7288 21.1832 39.0483 21.266 39.3666 21.2333H41.2666C41.5623 21.2478 41.8547 21.166 42.0999 21C42.3506 20.7735 42.5155 20.4673 42.5666 20.1333L47.9332 2.99997C47.9528 2.82273 47.9528 2.64387 47.9332 2.46663C47.9462 2.34475 47.9462 2.22184 47.9332 2.09997C47.9444 2.02296 47.9375 1.9444 47.9129 1.87055C47.8884 1.79669 47.847 1.72958 47.792 1.67456C47.7369 1.61953 47.6698 1.57811 47.596 1.55359C47.5221 1.52906 47.4436 1.52212 47.3666 1.5333H45.2999C44.994 1.5208 44.6915 1.60222 44.4332 1.76663C44.228 2.02091 44.0802 2.31655 43.9999 2.6333L40.6666 17.6666L37.1332 2.66663ZM13.2332 9.76663C12.4484 9.66366 11.6581 9.608 10.8666 9.59997C8.90481 9.49689 6.97286 10.1132 5.43323 11.3333C4.77758 11.8948 4.25719 12.5971 3.91088 13.3879C3.56458 14.1786 3.4013 15.0373 3.43322 15.9C3.39445 16.6856 3.51965 17.4706 3.80085 18.2052C4.08206 18.9398 4.5131 19.6077 5.06656 20.1666C5.66141 20.7156 6.36011 21.14 7.12149 21.4148C7.88288 21.6896 8.69156 21.8092 9.49989 21.7666C10.7722 21.8032 12.0358 21.5455 13.1921 21.0136C14.3485 20.4816 15.3664 19.6899 16.1666 18.7C16.3614 19.1468 16.5841 19.581 16.8332 20C17.0705 20.3662 17.3381 20.7118 17.6332 21.0333C17.7138 21.1149 17.8099 21.1797 17.9157 21.224C18.0216 21.2682 18.1352 21.291 18.2499 21.291C18.3646 21.291 18.4782 21.2682 18.5841 21.224C18.6899 21.1797 18.7859 21.1149 18.8666 21.0333L20.2666 20.1C20.3834 20.0276 20.4829 19.9303 20.5578 19.8151C20.6327 19.6998 20.6812 19.5695 20.6999 19.4333C20.7538 19.2596 20.7538 19.0737 20.6999 18.9C20.4298 18.395 20.1959 17.8714 19.9999 17.3333C19.8213 16.6823 19.7426 16.0079 19.7666 15.3333V8.29996C19.8462 7.31216 19.7248 6.31847 19.4097 5.37889C19.0946 4.43931 18.5923 3.57335 17.9332 2.8333C17.0861 2.12101 16.1015 1.59067 15.0406 1.27527C13.9797 0.959869 12.8652 0.866158 11.7666 0.999967C10.6414 0.999548 9.5209 1.14521 8.43323 1.4333C7.46472 1.65845 6.52524 1.99398 5.63323 2.4333C5.39795 2.53724 5.19188 2.69752 5.03323 2.89997C4.95178 3.14903 4.95178 3.41757 5.03323 3.66663V4.76663C5.03323 5.2333 5.03323 5.4333 5.49989 5.4333C5.62072 5.45945 5.74574 5.45945 5.86656 5.4333L6.63323 5.16663C7.31032 4.83429 8.01248 4.55565 8.73323 4.3333C9.51814 4.13656 10.324 4.03583 11.1332 4.0333C12.4218 3.89832 13.7124 4.26878 14.7332 5.06663C15.527 6.06368 15.898 7.33232 15.7666 8.59997V10.2333L13.2332 9.76663ZM15.8332 12.7666V13.6666C15.8358 14.3183 15.7574 14.9677 15.5999 15.6C15.4592 16.1308 15.1967 16.6216 14.8332 17.0333C14.2774 17.6866 13.5501 18.1715 12.7332 18.4333C12.0046 18.6896 11.2389 18.8247 10.4666 18.8333C10.0437 18.8648 9.61893 18.8101 9.21786 18.6726C8.81679 18.5351 8.44779 18.3176 8.13322 18.0333C7.84126 17.717 7.61914 17.3429 7.48131 16.9351C7.34347 16.5274 7.29302 16.0952 7.33323 15.6666C7.30568 15.1878 7.39085 14.7091 7.5819 14.2691C7.77294 13.8291 8.06453 13.4401 8.43323 13.1333C9.4047 12.4523 10.5843 12.1338 11.7666 12.2333H13.8332C14.5091 12.3744 15.1768 12.5525 15.8332 12.7666ZM59.8666 31C51.8979 34.3527 43.3451 36.0972 34.6999 36.1333C23.1284 36.1355 11.7555 33.1257 1.69989 27.4C0.899892 26.9 0.266558 27.7333 0.966558 28.3666C10.0176 36.5488 21.7988 41.0544 33.9999 41C43.6217 41.0237 53.0285 38.1552 60.9999 32.7666C62.1332 31.7333 61.0999 30.3666 59.8666 31Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.sec_hr}></div>

       

        {/* ____________________________contact_______________________________ */}

        {/* ____________________________footer________________________________ */}
        {/* ____________________________projects______________________________ */}
        <div className={styles.project_container}>
          <h2>SELECTED PROJECTS</h2>
          <div className={styles.project_holder}>
            {projects.map(({ slug, title }) => (
              <ul>
                <Link key={slug} href={`/projects/${slug}`}>
                  <a className={styles.project_title}>✱ {title}⟶</a>
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div className={styles.sec_hr}></div>

        {/* ____________________________contact_______________________________ */}

        <div className={styles.contact_container}></div>

      </div>
    </div>
  );
}
