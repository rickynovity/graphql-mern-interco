import { useQuery } from "@apollo/client";
import {
  GET_AUTHENTICATED_USER,
  GET_CATEGORIES,
  GET_LANGUAGES,
  GET_STACK_NAME,
  GET_TRAINERS,
} from "../graphql/queries";

const useFetchData = () => {
  const { data: authUser } = useQuery(GET_AUTHENTICATED_USER);
  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES);
  const {
    loading: trainersLoading,
    error: trainersError,
    data: trainersData,
  } = useQuery(GET_TRAINERS);
  const {
    loading: tagNamesLoading,
    error: tagNamesError,
    data: tagNamesData,
  } = useQuery(GET_STACK_NAME);
  const {
    loading: languagesLoading,
    error: languagesError,
    data: languagesData,
  } = useQuery(GET_LANGUAGES);

  const loading =
    categoriesLoading || trainersLoading || tagNamesLoading || languagesLoading;
  const error =
    categoriesError || trainersError || tagNamesError || languagesError;

  return {
    authUser,
    categoriesData,
    trainersData,
    tagNamesData,
    languagesData,
    loading,
    error,
  };
};

export default useFetchData;
