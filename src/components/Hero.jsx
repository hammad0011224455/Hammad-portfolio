import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="container">

        <div className="row align-items-center hero-row">

          {/* LEFT SIDE */}
          <div className="col-lg-4">

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build
              <br />

              <span className="outline-text">
                Shopify
              </span>

              <br />

              Success
            </motion.h1>

          </div>

          {/* CENTER IMAGE */}
          <div className="col-lg-4">

            <motion.div
              className="hero-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/syed.png"
                alt="Syed Hammad"
              />
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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

                I build custom Shopify solutions, React applications
                and Python automation tools that help businesses scale.
              </p>

              <div className="hero-buttons">

                <a
                  href="#projects"
                  className="btn-main"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="btn-outline-custom"
                >
                  Hire Me
                </a>

              </div>

            </motion.div>

          </div>

        </div>

        {/* STATS */}

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