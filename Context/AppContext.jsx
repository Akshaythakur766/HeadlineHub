import { createContext, useState } from "react";

export const UserContext = createContext();

const AppContext = ({ children }) => { 
    const [isCategory, setCategory] = useState(false);

    return (
        <UserContext.Provider value={{ isCategory, setCategory }}>
            {children}
        </UserContext.Provider>
    );
};

export default AppContext;
