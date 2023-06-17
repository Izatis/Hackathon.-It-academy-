import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const exampleContext = createContext();

const ExampleContextProvider = ({ children }) => {
  const [t, i18next] = useTranslation();
  console.log(t);
  // Это состояние загрузки
  const [isLoading, setIsLoading] = useState(true);

  //  Скрытие пароля
  const [type, setType] = useState("password");
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
