import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useCoin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    data: coin = 0,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-coin", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/coin/${user?.email}`);
      return data.coin;
    },
  });
  return [coin, isLoading, refetch];
};

export default useCoin;
