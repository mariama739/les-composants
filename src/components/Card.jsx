// import exampleImage from ""; // Importez l'image
function Moncarte() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="hauteur col-12 col-md-3 bg-success border border-warning border-5 text-white ">
          <p className="d-flex justify-content-end">Mes Commande</p>
          <h3>Panier</h3>
          <ul className="ms-3 pt-2 fs-5 ">
            <li>1 Sac 25$</li>
            <li>1 Cahier 5$</li>
          </ul>
          <h4 className="pt-2 ">TOTAL: 30$</h4>
          <button type="button" className="btn-white fw-bold mt-3 p-1 border-0">
            Vider le panier
          </button>
        </div>

        {/* <div className="row">
          <div className="col-12">
            <div className="col-12 col-md-2 diminuer border border-warning border-5 d-flex">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>choisir</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="p-1">
                <button className="text-center">classeur</button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="shoppinglist col-12 col-md-8">
          <div className="container-fluid border border-success border-5 ">
            <div className="row">
              <div className="col-md-4">
                <div className="card" /*style="width: 18rem;"*/>
                  <img
                    src="component/src/components/images/cacti-1846147_960_720.jpg  "
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" /*style="width: 18rem;"*/>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" /*style="width: 18rem;"*/>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moncarte;
