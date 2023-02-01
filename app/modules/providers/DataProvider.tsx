import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from "react";

interface IContext {
    activeStoryes: string[] | null;
    setActiveStoryes: Dispatch<SetStateAction<string[] | null>>;
}

export const DataContext = createContext<IContext>({} as IContext);

export const DataProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [activeStoryes, setActiveStoryes] = useState<string[] | null>(null);

    const value = useMemo(() => ({
        activeStoryes, setActiveStoryes
    }), [activeStoryes]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}