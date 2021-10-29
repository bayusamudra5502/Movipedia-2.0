import axios from "axios";
import { API_LOCATION, API_TOKEN, IMAGE_PATH } from "./config";

export interface IRecord {
  image: string;
  id: number;
  title: string;
  release: string;
  vote: {
    average: number;
    count: number;
  };
  overview: string;
  isAdult: boolean;
}

interface IResponse {
  backdrop_path: string;
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  adult: boolean;
}

export async function getData(
  query: string,
  page: number = 1
): Promise<IRecord[]> {
  const {
    data: { results },
  }: { data: { results: Array<IResponse> } } = await axios.get(
    `${API_LOCATION}/search/movie`,
    {
      params: {
        api_key: API_TOKEN,
        query,
        page,
      },
    }
  );

  return results.map((record) => {
    return {
      image: record.backdrop_path
        ? `${IMAGE_PATH}${record.backdrop_path}`
        : "https://source.unsplash.com/M5DRKOFiv-o",
      id: record.id,
      title: record.title,
      release: record.release_date,
      vote: {
        average: record.vote_average,
        count: record.vote_count,
      },
      overview: record.overview,
      isAdult: record.adult,
    };
  });
}

export async function getPopular(): Promise<IRecord[]> {
  const {
    data: { results },
  }: { data: { results: Array<IResponse> } } = await axios.get(
    `${API_LOCATION}/movie/popular`,
    {
      params: {
        api_key: API_TOKEN,
      },
    }
  );

  return results.map((record) => ({
    image: record.backdrop_path
      ? `${IMAGE_PATH}${record.backdrop_path}`
      : "https://source.unsplash.com/M5DRKOFiv-o",
    id: record.id,
    title: record.title,
    release: record.release_date,
    vote: {
      average: record.vote_average,
      count: record.vote_count,
    },
    overview: record.overview,
    isAdult: record.adult,
  }));
}
