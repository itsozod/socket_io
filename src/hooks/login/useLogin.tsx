import useSWRMutation from "swr/mutation";

export const useLogin = (
  url: string,
  signIn: (FormData: object) => Promise<object>
) => {
  const { data, error, trigger, isMutating } = useSWRMutation(url, signIn);
  return { data, error, isLoading: isMutating, SignIN: trigger };
};
