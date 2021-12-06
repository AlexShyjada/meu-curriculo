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
  profileInfo: iProfileInfo[];
  generalInformation: iGeneralInformation[];
  technologys: iTechnologys[];
  professionalExperiences: iProfessionalExperiences[];
  education: iEducation[];
  // githubeRepos: RootObject[];
}

export const StateAndRequestContext = createContext({} as iStateAndRequestContextProps);

export function StateAndRequestContextProvider(props: iStateAndRequestContextProvider) {
  const { children } = props;

  const [profileInfo, setProfileInfo] = useState<iProfileInfo[]>([]);
  const [generalInformation, setGeneralInformation] = useState<iGeneralInformation[]>([]);
  const [technologys, setTechnologys] = useState<iTechnologys[]>([]);
  const [professionalExperiences, setProfessionalExperiences] = useState<iProfessionalExperiences[]>([]);
  const [education, setEducation] = useState<iEducation[]>([]);
  // const [githubeRepos, setGithubeRepos] = useState<RootObject[]>([]);

  useEffect(() => {
    api
      .get("profileInfo")
      .then((response) => setProfileInfo(response.data.profileInfo));
  }, []);

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
      .get("education")
      .then((response) => setEducation(response.data.education));
  }, []);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/AlexShyjada/repos")
  //     .then((response) => response.json())
  //     .then((data) => setGithubeRepos(data));
  // }, []);

  return (
    <StateAndRequestContext.Provider
      value={{
        profileInfo,
        generalInformation,
        technologys,
        professionalExperiences,
        education,
        // githubeRepos,
      }}
    >
      {children}
    </StateAndRequestContext.Provider>
  );
}
