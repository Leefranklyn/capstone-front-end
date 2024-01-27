/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PropsqrContext = createContext(null);

export function PropsqrProvider({ children }) {

    const [info, setInfo] = useState(null)


    return <PropsqrContext.Provider value={{ info, setInfo }}
    >{children}</PropsqrContext.Provider>;
}