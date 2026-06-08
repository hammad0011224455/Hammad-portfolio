import { motion } from "framer-motion";
import syedImage from "../assets/syed.png";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* Background Image */}
      <div className="hero-bg-image">
        <img src={syedImage} alt="Syed Hammad" />
      </div>

      <div className="container">

        <div className="row hero-row">

          {/* LEFT SIDE */}
          <div className="col-lg-6 d-flex align-items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <h1 className="hero-title">
                Build
                <br />

                <span className="outline-text">
                  Shopify
                </span>

                <br />

                Success
              </h1>

            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 d-flex align-items-center justify-content-end">

            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <span className="hero-tag">
                SHOPIFY DEVELOPER • REACT • UK
              </span>

              <h2 className="hero-right-title">
                Build.
                <br />
                Automate.
                <br />
                Scale.
              </h2>

              <p className="hero-description">
                Currently working as a Shopify Developer in the UK,
                managing a Shopify store with over 7000 active products.

                I build custom Shopify solutions, React applications,
                and Python automation tools that help businesses scale.
              </p>

              <div className="hero-buttons">

                <a href="#projects" className="btn-main">
                  View Projects
                </a>

                <a href="#contact" className="btn-outline-custom">
                  Hire Me
                </a>

              </div>

            </motion.div>

          </div>

        </div>

        {/* Stats */}

        <div className="row stats-row">

          <div className="col-md-4">
            <div className="stat-box">
              <h3>7000+</h3>
              <p>Products Managed</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stat-box">
              <h3>20+</h3>
              <p>Projects Delivered</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stat-box">
              <h3>100+</h3>
              <p>Hours Saved Through Automation</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;