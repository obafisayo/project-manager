import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ProjectT } from "../utils/types";
import { projectData as initialProjectData } from "../data/projectData";

interface CreateDataContextType {
    projectData: ProjectT[];
    setProjectData: Dispatch<SetStateAction<ProjectT[]>>;
}
const CreateDataContext = createContext<CreateDataContextType | undefined>(undefined)

interface CreateDataProps {
    children: React.ReactNode;
}
export const CreateDataProvider: React.FC<CreateDataProps> = ({ children }) => {
    const [projectData, setProjectData] = useState<ProjectT[]>(initialProjectData)
    const values = {
        projectData,
        setProjectData
    }
    return (
        <CreateDataContext.Provider value={values}>
            {children}
        </CreateDataContext.Provider>
    )
}

export const useCreateData = (): CreateDataContextType => {
    const context = useContext(CreateDataContext);
    if (!context) {
        throw new Error("useContext must be used within a CreateDataProvider");
    }
    return context;
};
