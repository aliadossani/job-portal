import "../styles/About.css";

function About() {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="aboutProject">About the app</h2>
            <p className="portal">
              A job portal is an online platform designed to connect job seekers
              with potential employers. It serves as an intermediary that
              facilitates the exchange of information between employers offering
              job opportunities and individuals seeking employment.
            </p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="src/assets/AliaDossani.jpeg"
                className="team-img"
                alt="pic"
              />
              <h3>ALIA DOSSANI</h3>
              <div className="team-info">
                <p>IronHack Web-Dev</p>
                <a
                  className="github"
                  href="https://github.com/aliadossani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  className="linkedIn"
                  href="https://www.linkedin.com/in/alia-dossani-9a2479185/"
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
                  href="https://www.linkedin.com/in/prabeshikakoirala/"
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
