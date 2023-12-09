import {useEffect,useState} from "react";
const useGetData = ()=>{
    useEffect(()=>{
        getData()

    },[])
    const [userData,setUserData] = useState({ tickets: [], users: [] });
    async function getData(){
        try{
            const data = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const json = await data.json();
            setUserData({
                tickets: json.tickets || [],
                users: json.users || [],
              });

        } catch(error){
            console.error("Error fetching data",error)
        }
    }

    return userData;
}
export default useGetData;