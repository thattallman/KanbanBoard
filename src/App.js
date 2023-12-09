import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import Body from "./Body";
import Navbar from "./Navbar";

const AppLayout = ()=>{
    const [control, setControl] = useState("name");
    const [sort, setSort] = useState("true");
    useEffect(() => {
        const storedControl = localStorage.getItem("control");
        const storedSort = localStorage.getItem("sort");
        if (storedControl) {
          setControl(storedControl);
        }
        if (storedSort) {
            setSort(storedSort);
          }
      }, []);
      useEffect(() => {
        localStorage.setItem("control", control);
      }, [control]);
      useEffect(() => {
        localStorage.setItem("sort", sort);
      }, [sort]);
      

    return(
    <>
    <Navbar  control = {control} setControl = {setControl} sort={sort} setSort={setSort} />
    <Body control = {control} sort={sort} />
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);




