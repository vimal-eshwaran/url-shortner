import { createContext, useState, useContext } from "react";

//creating context
const NameContext = createContext();

const NameProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ email:"",token:localStorage.getItem('token')||null});
 
  

  return (
    //provider
    <NameContext.Provider 
      value={{ currentUser, setCurrentUser}}
    >
      {children}
    </NameContext.Provider>
  );
};

 
  
  export { NameContext, NameProvider };
