import {

    useEffect,
 
    useState
 
 } from "react";
 
 import {
 
    getStorage
 
 } from "../utils/localStorage";
 
 export default function
 useHistory() {
 
    const [
 
       history,
 
       setHistory
 
    ] = useState([]);
 
    useEffect(() => {
 
       const storedHistory =
          getStorage(
 
             "history",
 
             []
          );
 
       setHistory(
          storedHistory
       );
 
    }, []);
 
    return {
 
       history
    };
 }