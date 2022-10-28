type logement = {
    name: string,
    id: number
}
type logementHomeFormatted = {
    name: string
}
export const formatLogementForHome = (logement: logement): logementHomeFormatted => {
    return {name:"OU"}
}