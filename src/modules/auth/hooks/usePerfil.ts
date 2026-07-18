import { useAuth } from "../../../shared/hooks/useAuth";

export const usePerfil = () => {
  const { user } = useAuth();

  return {
    user,
  };
};
