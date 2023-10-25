import React from "react";
import { SubmitHandler } from "react-hook-form";

export const usePostForm = (url: string, extraData = {}) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onSubmit: SubmitHandler<any> = React.useCallback(
    async (data) => {
      setLoading(true);
      setSuccess(false);
      setError(false);

      const searchParams = new URLSearchParams({
        ...data,
        ...extraData,
      } as any);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },

          body: searchParams.toString(),
        });

        const data = await response.json();

        setLoading(false);

        if (data.Status === 400) {
          setError(true);
          return;
        }

        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },
    [url, extraData],
  );

  return {
    error,
    success,
    loading,
    onSubmit,
  };
};
