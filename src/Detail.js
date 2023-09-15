
const Detail = (props) => {

    const data=props.DATA;
    const H=props.handleid;
    return ( 
        <div className="Detail">
             {data &&
        data.map((i) => (
          <div className="ID" key={i.id}>

            <div className="card">
              <div className="card-inner">
             
                <img
                  src={i.imagePath}
                  
                  className="card-img-top"
                  alt="Card mage"
                />
                
                
                <div className="card-body">
                  <br></br>
                  <h5 className="card-title">{i.Title}</h5>

                  <h5 className="card-title">{"PKR " + i.Price}</h5>

                  <p className="card-text">
                    <b>Body Type: </b>{i.Body}
                    <br></br>
                    <b>Engine: </b>{i.Engine}
                    <br></br>
                    <b>Fuel: </b>{i.Fuel}
                    <br></br>
                    <b>Transmission: </b>{i.Transmission}
                    <br></br>
                  </p>
                  <button onClick={props.handleb}>Buy Now</button>
                  <button onClick={()=>H(i.id)}>Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
     );
}
 
export default Detail;