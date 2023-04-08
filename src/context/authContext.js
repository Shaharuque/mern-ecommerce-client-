import axios from "axios";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// To use Context API, you first create a context object using the createContext() method
const AuthContext = createContext();

//state update ar jnno
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios(so for req we dont need to write authorization:token again ana again)
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const getAuthData = localStorage.getItem("auth");
    if (getAuthData) {
      const parseData = JSON.parse(getAuthData);
      setAuth({
        ...auth, //for array immutability maintain asdefaultly array mutable
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);
  // children=>AuthProvider diye joto gula component wraphobey sobai auth,setAuth ar access pabey
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// create a custom hook
//By using the useContext() hook, you can access the data from the context object without having to pass it down manually through props.
const useAuth = () => useContext(AuthContext);

// now we can usethis useAuth in any component
export { useAuth, AuthProvider };
