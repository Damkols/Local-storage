import React from "react";

const useStorage = (key, i) => {
  const [data, setData] = React.useState(() => {
    try {
      const localData = window.localStorage.getItem(key);
      return localData ? JSON.parse(localData) : i;
    } catch (error) {
      console.log(error);
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useStorage;
