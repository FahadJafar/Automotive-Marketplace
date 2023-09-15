import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import img2 from "./Images/Corolla.jpeg";

const View = () => {
  const NAV=useNavigate();
  const { id } = useParams();
  let url = "http://localhost:8001/cars/" + id;
  const [car, setCar] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCar(data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [url]);
  const handleN = ()=>{
       NAV('/new');
  }
  return (
    <div className="View">
      <div className="Heading">
        <h2>{car.Title}</h2>
      </div>
      <div className="image-container">
        <img src={car.imagePath} class="img-view" alt="empty" />
      </div>

      <div className="list">
        <h2>Price: {car.Price} </h2>

        <h2>Vehicle Information</h2>
        <b>Engine: </b>
        {car.Engine}
        <br></br>
        <b>Body-Type: </b>
        {car.Body}
        <br></br>
        <b>Fuel: </b>
        {car.Fuel}
        <br></br>
        <b>Transmisson: </b>
        {car.Transmission}
        <br></br>
        <button>Seller Info </button><br></br>
        <button onClick={handleN}>Explore Cars</button>
      </div>
    </div>
  );
};

export default View;
