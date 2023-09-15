import { useEffect, useState } from "react";
import Detail from "./Detail";
import { useNavigate } from "react-router-dom";
const NewCars = () => {
  const Nav=useNavigate();
  const [data, setData] = useState(null);
  const [isPending,setisPending]=useState(true);
  useEffect(() => {
    fetch("http://localhost:8001/cars")
      .then((res) => {
        return res.json();
      })
      .then((dataa) => {
        console.log(dataa);
        setisPending(false);
        setData(dataa);
      })
      .catch((err)=>{
        console.log(err);
        setisPending(true);
      })
  }, []);
  const handleid = (i)=>{
    const id = i;
Nav('/view/'+id);
  }
  const handleb =()=>{
    alert("Email has been sent to you with the details !");
  }
  return (
    <div className="New">
      {isPending && <div className="Loading">Loading........</div>}
    {data && <Detail DATA={data} handleb={handleb} handleid={handleid}/>}
    </div>
  );
};

export default NewCars;
