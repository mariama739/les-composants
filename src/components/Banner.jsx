import { FaLeaf } from "react-icons/fa";

function Banner() {
  return (
    <container-fluid className=" ">
      <nav className="navbar navbar-expand-lg border border-danger border-5">
        <div className="collapse navbar-collapse d-flex justify-content-end me-5">
          <ul>
            <FaLeaf className="fs-4 text-success me-3" />
            <b className="fs-4">La maison jungle</b>
          </ul>
        </div>
      </nav>
      <div className="col-12 col-md-2 diminuer border border-warning border-5 d-flex position-relative top-50 start-50">
        <select className="form-select" aria-label="Default select example">
          <option selected>choisir</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="p-1">
          <button className="text-center">classeur</button>
        </div>
      </div>
    </container-fluid>
  );
}

export default Banner;
