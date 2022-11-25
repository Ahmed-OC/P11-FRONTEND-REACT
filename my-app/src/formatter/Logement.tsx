import { logement, logementHomeFormatted } from "type/logement.type";


export const formatLogementForHome = (
  logement: logement
): logementHomeFormatted => {
  return { id : logement.id , title: logement.title, cover: logement.cover };
};