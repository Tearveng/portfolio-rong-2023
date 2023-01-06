import { useQuery } from "react-query";
import axios from "axios";
import avatar from "../assets/avatar.png";
import "react-notion/src/styles.css";
import { useLoaderData } from "react-router-dom";
import LoadingBarJsx from "../components/Navbar/LodingBar";

const fetchPageId = async (menu: string) => {
  const data = await axios
    .get(`https://notion-api.splitbee.io/v1/page/${menu}`)
    .then((res) => res);

  return data;
};

const getJSX = (item: any) => {
  let element = <>asdas</>;

  if (item.type === "paragraph") {
    element = <p key={item.id}>{item[item.type].rich_text[0].plain_text}</p>;
  } else if (item.type === "bulleted_list_item") {
    element = (
      <li key={item.id} className="ml-2">
        {item[item.type].rich_text[0].plain_text}
      </li>
    );
  }
  return element;
};

const showData = (data: unknown[]) => {
  const elements: JSX.Element[] = [];

  data.map((item) => {
    elements.push(getJSX(item));
  });

  console.log(elements);

  return elements;
};

const Home: React.FC = () => {
  const { data } = useLoaderData() as any;
  // const { data } = useQuery("home", () =>
  //   blockContent(import.meta.env.VITE_NOTION_HOME_PAGE)
  // );

  return data ? (
    <div className="flex flex-col justify-center items-center">
      {/* <LoadingBarJsx /> */}
      <div className="flex justify-center sm:mt-0">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between w-[600px]">
          <div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className="dark:text-gray-200 flex flex-col gap-1">
              {showData(data)}
            </div>
            <div className="flex gap-4 items-center dark:text-gray-200 mt-2">
              <p className="text-sm font-semibold">Social: </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </div>
          </div>
          <img src={avatar} alt="avatar" width={250} className="mt-6 sm:mt-0" />
        </div>
      </div>
      <div>
        <div className=" w-[400px] sm:w-[600px]">
          <p className="font-semibold">Skills : </p>
          <br />
          <div className="flex flex-col">
            <label className="mb-4">React Js : </label>
            <div className="w-[400px] sm:w-[600px] bg-gray-300 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-1.5 rounded-full w-[200px] sm:w-[300px]"></div>
            </div>
          </div>
          <br />
          <div className="flex flex-col">
            <label className="mb-4">Tailwind Css : </label>
            <div className="w-[400px] sm:w-[600px] bg-gray-300 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-1.5 rounded-full w-[200px] sm:w-[300px]"></div>
            </div>
          </div>

          <br />
          <div className="flex flex-col">
            <label className="mb-4">Node Js : </label>
            <div className="w-[400px] sm:w-[600px] bg-gray-300 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-1.5 rounded-full w-[200px] sm:w-[300px]"></div>
            </div>
          </div>

          <br />
          <div className="flex flex-col">
            <label className="mb-4">Express Js : </label>
            <div className="w-[400px] sm:w-[600px] bg-gray-300 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-1.5 rounded-full w-[200px] sm:w-[300px]"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className=" w-[400px] sm:w-[600px]">
          <p className="font-semibold">Works : </p>
          <br />
          <div className="flex flex-col">
            <label className="mb-4">
              <li className="ml-3">Spring Boot Framework :</li>
            </label>
            <div className="ml-12">
              <div className="bg-gray-300 rounded-xl px-6 py-2 w-full dark:bg-gray-700  hover:bg-gray-400 dark:hover:bg-gray-600">
                <p className="font-medium">Title: UBlog News</p>
                <p className="text-sm">
                  Description: Breaking News, Worlds News ...
                </p>
                <p className="text-sm">Date: 2019 - 2020</p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-col">
            <label className="mb-4">
              <li className="ml-3">Android Studio :</li>
            </label>
            <div className="ml-12">
              <div className="bg-gray-300 rounded-xl px-6 py-2 w-full dark:bg-gray-700  hover:bg-gray-400 dark:hover:bg-gray-600">
                <p className="font-medium">Title: CoinHub</p>
                <p className="text-sm">
                  Description: CoinMarket News , Worlds News with crypto
                  currency ...
                </p>
                <p className="text-sm">Date: 2020 - 2021</p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-col">
            <label className="mb-4">
              <li className="ml-3">Flutter Framework :</li>
            </label>
            <div className="ml-12">
              <div className="bg-gray-300 rounded-xl px-6 py-2 w-full dark:bg-gray-700  hover:bg-gray-400 dark:hover:bg-gray-600">
                <p className="font-medium">Title: Home Remote Devices</p>
                <p className="text-sm">
                  Description: Home controller on devices, Aight, Airconditioner
                  ... crypto currency ...
                </p>
                <p className="text-sm">Date: 2021 - 2022</p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <a href="#" className="underline text-gray-400">
              view more
            </a>
          </div>
        </div>
        <br />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Home;
