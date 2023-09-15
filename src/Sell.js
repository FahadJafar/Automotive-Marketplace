const Sell  = () => {
    return (
        <div className="Sell">
            
            <form>
            <div class="form-column">
                <h2>Name: </h2>
                <input type="text" required placeholder="Name of Car...."/>
                <h2>Price: </h2>
                <input type="text" required placeholder="Price of Car...."/>
                <h2>Engine: </h2>
                <input type="text" required placeholder="Engine size ex 1500cc...."/>
                <h2>Body: </h2>
                <input type="text" required placeholder="Sedan/HatchBack...."/><br></br>
              
</div>
<div class="form-column">         
                <h2>Fuel-Type: </h2>
                <input type="text" required placeholder="Petrol/Hybrid/Electric...."/>
                <h2>Transmission: </h2>
                <input type="text" required placeholder="Automatic/Manual...."/>
                <h2>Photo: </h2>
                <input type="file" required name='file' />
           </div>

            </form>
        </div>
      );
}
 
export default Sell;