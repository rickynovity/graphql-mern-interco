import React from "react";
import ButtonGroupLayout from "./ButtonGroupLayout";
import HistoryRow from "./HistoryRow";
import AvaBlur from "./ui/AvaBlur";
import { useQuery } from "@apollo/client";
import {
  GET_AUTHENTICATED_USER,
  GET_FORMATIONS_BY_USER,
} from "../graphql/queries/user.query";
import AvaQueryResult from "./AvaQueryResult";

const History = () => {
  const { data: authUser } = useQuery(GET_AUTHENTICATED_USER);
  const {
    loading,
    error,
    data: formationsData,
  } = useQuery(GET_FORMATIONS_BY_USER, {
    variables: {
      userId: authUser?.authUser?._id,
    },
  });

  const formations = formationsData?.user?.formations || [];

  return (
    <div className="space-y-5 mb-20">
      <>
        <ButtonGroupLayout title="History" />
        <AvaQueryResult
          loading={loading}
          error={error}
          data={formationsData}
          className="overflow-x-auto rounded-lg border border-gray-200"
        >
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm table-fixed dark:text-slate-100 text-gray-900">
            <thead className="ltr:text-left rtl:text-right text-left">
              <tr>
                <th className="whitespace-nowrap w-10 px-4 py-2 font-medium">
                  Title
                </th>
                <th className="whitespace-nowrap w-6 px-4 py-2 font-medium">
                  Objectives
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  Category
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  Progress
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  Start date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  End date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-200">
              {formations.map((formation) => (
                <HistoryRow key={formation._id} formation={formation} />
              ))}
            </tbody>
          </table>
        </AvaQueryResult>
      </>
      <AvaBlur />
    </div>
  );
};

export default History;
