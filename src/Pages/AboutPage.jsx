import "../styles/About.css";
import AliaImage from "../assets/AliaDossani.jpeg";
import PrabeshikaImage from "../assets/prabeshikaProfile.jpg";

function About() {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="aboutProject">About the app</h2>
            <p className="portal">
              The Job Genie is an online platform designed to connect job seekers with employers, facilitating the job search and recruitment process. The employers can post job listings and manage the hiring process. The portal serves as a centralized hub for job-related activities, providing a convenient and efficient way for both job seekers and employers to find the right match for their needs.
            </p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src={AliaImage}
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
                src={PrabeshikaImage}
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
