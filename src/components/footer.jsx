function Foot() {
  return (
    <container-fluid className=" ">
      <footer className="border border-primary border-5 d-flex justify-content-center">
        <div className=" mb-5">
          <p className="mb-2 text-center mt-3">
            <b>Pour récuperer vos panier</b>
          </p>
          <p className="mb-2 text-center">
            <b>Veiller nous laisser votre mail</b>
          </p>
          <input type="email" placeholder="Entrer votre mail" className="mb-5" />
        </div>
      </footer>
    </container-fluid>
  );
}

export default Foot;
