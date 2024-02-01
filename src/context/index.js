import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const exampleContext = createContext();

const ExampleContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("password");
  
  const [t, i18next] = useTranslation();

  const passwordHide = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  let values = {
    t,
    i18next,
    isLoading,
    setIsLoading,
    type,
    passwordHide
  };

  return (
    <exampleContext.Provider value={values}>{children}</exampleContext.Provider>
  );
};

export default ExampleContextProvider;
