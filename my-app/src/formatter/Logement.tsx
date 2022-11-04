import { logement, logementHomeFormatted } from "type/logement.type";


export const formatLogementForHome = (
  logement: logement
): logementHomeFormatted => {
  return { title: logement.title, cover: logement.cover };
};