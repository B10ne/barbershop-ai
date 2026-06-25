export const formatTimestamp = (

    date
 
 ) => {
 
    return new Date(date)
 
    .toLocaleString();
 };
 
 export const getCurrentTimestamp =
 () => {
 
    return new Date()
 
    .toISOString();
 };