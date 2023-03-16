import { createContext } from "react";
import { useTranslation } from "react-i18next";

export const exampleContext = createContext();

const ExampleContextProvider = ({ children }) => {
  const [t, i18n] = useTranslation();
  let values = {
    t,
    i18n,
  };

  return (
    <exampleContext.Provider value={values}>{children}</exampleContext.Provider>
  );
};

export default ExampleContextProvider;
