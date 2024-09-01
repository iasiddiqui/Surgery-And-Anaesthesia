import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import Slide from './components/slider/Slider';

import "./home.css";
import { Slider } from "@mui/material";

const Home = () => {
  console.log("hi");
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="top-bar">
          <p>
            <span>HYBRID EVENT:</span> You can participate in person at{" "}
            <span>Madrid, Spain or Virtually</span> from your home or work.
          </p>
        </div>

        <div className="header-content">
          <div className="logo">
            <img src="https://surgery-conferences.magnusgroup.org//uploads/logo/5th-edition-of-global-conference-on-surgery-and-anesthesia-8952.png"></img>
          </div>

          <div className="conference-info">
            <p>5th Edition of International Conference on</p>
            <h2>
              <div className="title-line">Surgery and</div>
              <div className="title-line">Anaesthesia</div>
            </h2>
          </div>

          <div className="center">
            <img src="https://surgery-conferences.magnusgroup.org/assets-front/images/CPD-Accredited-20--GCSA.png"></img>
          </div>

          <div className="location-contact">
            <p>
              Rafaelhoteles Atocha
              <br />
              C. de Méndez Álvaro, 30, 28045
              <br />
              Madrid, Spain
            </p>
            <p>
              <strong>Phone:</strong> +1 (702) 988 2320
            </p>
            <p>
              <strong>Whatsapp:</strong> 1 (640) 666 9566
            </p>
            <p>
              <strong>Email:</strong> surgery@magnusconference.com
            </p>
          </div>

          <div className="lower">
            <p>September 05 -07, 2024 | Madrid, Spain</p>
          </div>
        </div>

        {/* navbar */}
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Scientific Committee</a>
            </li>
            <li className="dropdown">
              <a href="#">Speakers</a>
              <ul className="dropdown-content">
                <li>
                  <a href="#">GCSA 2024</a>
                </li>
                <li>
                  <a href="#">GCSA 2023</a>
                </li>
                <li>
                  <a href="#">GCSA 2022</a>
                </li>
                <li>
                  <a href="#">GCSA 2021</a>
                </li>
                <li>
                  <a href="#">GCSA 2020</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Program</a>
              <ul className="dropdown-content">
                <li>
                  <a href="#">Final Program</a>
                </li>
                <li>
                  <a href="#">Scientific Session</a>
                </li>
                <li>
                  <a href="#">Scientific Program</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Information</a>
              <ul className="dropdown-content">
                <li>
                  <a href="#">Venue</a>
                </li>
                <li>
                  <a href="#">Accommodation</a>
                </li>
                <li>
                  <a href="#">Guidlines</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Implant Dates</a>
                </li>
                <li>
                  <a href="#">Conference Brochure</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">About</a>
              <ul className="dropdown-content">
                <li>
                  <a href="#">Past Events</a>
                </li>
                <li>
                  <a href="#">About Organizer</a>
                </li>
                <li>
                  <a href="#">Testimonials/ Review</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Submit Abstract</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>

        <div className="alerts">
          <p>
            <NotificationsActiveIcon /> Register Now and Join Meeting!!{" "}
            <NotificationsActiveIcon /> Final Program: Live Now!!!
          </p>
        </div>
      </header>

      {/* Main Section */}
      {/* <Slider/> */}
      <main className="main-content">
        <img
          src="https://plus.unsplash.com/premium_photo-1661715812379-23d652805042?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Conference Group"
        />
        <h2>
        5th Edition of Global Conference on Surgery and Anaesthesia

        </h2>
        <div className="main-buttons">
          <button>Submit Abstract</button>
          <button>Conference Brochure</button>
          <button>Quick Register</button>
          <button>Speakers</button>
        </div>
      </main>

      {/* About Section */}
      <section className="about-section">
        <h2>About GCSA 2024 | Hybrid Event</h2>
        <p>Magnus Group joyfully invites you to the <strong> "5th Edition of Global Conference on Surgery and Anaesthesia (GCSA 2024)."</strong> Scheduled as a <strong>Hybrid Event</strong> from <strong>September 05-07, 2024</strong>, participants can engage in-person at <strong>Madrid, Spain, or virtually</strong> from anywhere. Join us for a dynamic blend of physical and virtual experiences, uniting global experts in surgery and anaesthesia for enriching discussions and insights. Save the date and be part of this innovative congress shaping the future of healthcare.
        </p>
        <p>
          The focal point of the global congress will revolve around the theme <strong>“Surgical Innovations Addressing Healthcare Challenges: A Focus on Technology”</strong>
        </p>
        <p>
          The field of surgery is in a constant state of evolution, with ongoing research and technological advancements enhancing the safety, effectiveness, and recovery times of surgical operations. The collaboration between humans and technology has reached unprecedented levels, thanks to the application of artificial intelligence, surgical robots, 3D printing, and innovative imaging approaches across various treatments. The future of surgery holds even more potential beyond these current innovations.
        </p>
        <p>
         Our annual global summit on surgery and anaesthesia serves as an exceptional platform for the convergence of surgeons, healthcare professionals, anaesthesiologists, researchers, scientists, academicians, nurses, trainees, policymakers, industry personnel, and consultants. This three-day congress provides a significant space for scientific exchange between clinicians and fundamental scientists operating in the intricate realm of anaesthesia and surgery.
        </p>
        <p>
          Encompassing cutting-edge topics in these fields, the conference delves into new treatment options, offering participants the chance to be part of one of the most pivotal worldwide events in the realm of surgery and anaesthesia. Attendees will not only have the opportunity to network with fellow professionals, scientists, professors, and students but also to explore new possibilities and enhance their expertise. The event serves as an excellent forum for research participants to interact, sharing experiences and findings across all facets of anaesthesia and surgery.
        </p>
        <p>
          Looking ahead, the upcoming conferences in 2024 on Surgery and Anaesthesia promise to be enlightening experiences, focusing on international collaboration and the latest advancements in the field. Whether you are a seasoned professional or a student, participation in these conferences is an invaluable investment in staying abreast of the forefront of surgical and anaesthetic practices.
        </p>
        <p>
          Upcoming Conferences: Surgery Conferences 2024 | Anaesthesia Conferences 2024 | International Surgery Conferences | Surgery and Anaesthesia Conferences
        </p>
      </section>

      {/* Scientific Sessions Section */}
      <div className="container">
        <section className="sessions-section">
          <h2>Scientific Sessions</h2>
          <div className="sessions-grid">
            <div className="session-item"> Thoracic Surgery</div>
            <div className="session-item">Pediatric Surgery</div>
            <div className="session-item">Orthopedic Surgery</div>
            <div className="session-item">Surgical Techniques</div>
            <div className="session-item">General Anesthesia</div>
            <div className="session-item">Minimally Invasive Surgery</div>
            <div className="session-item">Gastroenterological Surgery</div>
            <div className="session-item">Neuro Surgery, Brain and Spine</div>
            <div className="session-item">
            Oral and Maxillofacial Surgery
            </div>
            <div className="session-item">
            General Surgery and its Specialties
            </div>
            <div className="session-item">
            Otolaryngology - Head and Neck Surgery
            </div>
            <div className="session-item">
            Outpatient Surgery and Imaging
            </div>
            <div className="session-item">Coloproctology and Colorectal Surgery</div>
            <div className="session-item">
            Laparoscopic and Endoscopic Surgery
            </div>
            <div className="session-item">
            Dermatologic & Cosmetic Surgery
            </div>
            <div className="session-item">
            Obestetrics and Gynaecological Surgery

            </div>
          </div>
          <div className="sessions-buttons">
            <button>Submit Abstract</button>
            <button>View All Scientific Sessions</button>
          </div>
        </section>

        <section className="signup-section">
          <h2>SIGN UP FOR UPDATES</h2>
          <form className="signup-form">
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
            <label>Captcha Code:</label>
            <img src="captcha-image.jpg" alt="Captcha" />
            <input type="text" placeholder="Enter Code" />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </section>
      </div>

      {/* Social Media Links */}
      <aside className="social-media">
        <a href="#" className="whatsapp-link">
          <WhatsAppIcon />
        </a>
        <a href="#" className="facebook-link">
          <FacebookIcon />
        </a>
        <a href="#" className="twitter-link">
          <TwitterIcon />
        </a>
        <a href="#" className="youtube-link">
          <YouTubeIcon />
        </a>
      </aside>
    </div>
  );
};

export default Home;
