import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useRegister = () => {
  const { data, error, isLoading } = useSWR(
    "https://d00f63aca8474f91.mokky.dev/register",
    fetcher
  );
  return { registerData: data, error, isLoading };
};
