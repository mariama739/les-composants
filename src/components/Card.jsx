// import exampleImage from ""; // Importez l'image
import Image1 from '../assets/cacti-1846147_960_720.jpg';
import Image2 from '../assets/istockphoto-1499045643-1024x1024.jpg';
import Image3 from '../assets/plant-8234767_1280.webp';

import { FaStar } from "react-icons/fa";

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

        <div className="shoppinglist col-12 col-md-8 ">
          <div className="container-fluid border border-success border-5 ">
            <div className="row p-4">
              <div className="col-md-4">
                <div className="card" /*style="width: 18rem;"*/>
                  <img src={Image1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Saint Louis</h5>
                    <p className="card-text text-primary">
                      <FaStar />
                    </p>
                    <p className="text-warning">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <button className="text-center">Ajouter</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={Image2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Kolda</h5>
                    <p className="card-text text-primary">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <p className="text-warning">
                      <FaStar />
                      <FaStar />
                    </p>
                    <button className="text-center">Ajouter</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" /*style="width: 18rem;"*/>
                  <img src={Image3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Matam</h5>
                    <p className="card-text text-primary">
                      <FaStar />
                      <FaStar />
                    </p>
                    <p className="text-warning">
                      <FaStar />
                      <FaStar />
                    </p>
                    <button className="text-center">Ajouter</button>
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
