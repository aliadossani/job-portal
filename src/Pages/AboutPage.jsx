import "../styles/About.css";

function About() {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center"></div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>ALIA DOSSANI</h3>
              <div className="team-info">
                <p>IronHack Web-Dev</p>
                <a
                  className="github"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  className="linkedIn"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="src/assets/prabeshikaProfile.jpg"
                className="team-img"
                alt="pic"
              />

              <h3>PRABESHIKA KOIRALA</h3>

              <div className="team-info">
                <p>IronHack Web-Dev</p>
                <a
                  className="github"
                  href="https://github.com/Prabeshikak?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  className="linkedIn"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
