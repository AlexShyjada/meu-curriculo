import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import {
  RootObject,
  iStateAndRequestContextProvider,
  iProfileInfo,
  iGeneralInformation,
  iTechnologys,
  iProfessionalExperiences,
  iEducation,
} from "./contextInterfaces";

interface iStateAndRequestContextProps {
  generalInformation: iGeneralInformation[];
  technologys: iTechnologys[];
  professionalExperiences: iProfessionalExperiences[];
  education: iEducation[];
}

export const StateAndRequestContext = createContext({} as iStateAndRequestContextProps);

export function StateAndRequestContextProvider(props: iStateAndRequestContextProvider) {
  const { children } = props;

  const [generalInformation, setGeneralInformation] = useState<iGeneralInformation[]>([]);
  const [technologys, setTechnologys] = useState<iTechnologys[]>([]);
  const [professionalExperiences, setProfessionalExperiences] = useState<iProfessionalExperiences[]>([]);
  const [education, setEducation] = useState<iEducation[]>([]);


  useEffect(() => {
    api
      .get("generalInformation")
      .then((response) => setGeneralInformation(response.data.generalInformation));
  }, []);

  useEffect(() => {
    api
      .get("technologys")
      .then((response) => setTechnologys(response.data.technologys));
  }, []);

  useEffect(() => {
    api
      .get("professionalExperiences")
      .then((response) => setProfessionalExperiences(response.data.professionalExperiences));
  }, []);

  useEffect(() => {
    api
      .get("academicEducation")
      .then((response) => setEducation(response.data.academicEducation));
  }, []);

  return (
    <StateAndRequestContext.Provider
      value={{
        generalInformation,
        technologys,
        professionalExperiences,
        education,
      }}
    >
      {children}
    </StateAndRequestContext.Provider>
  );
}
