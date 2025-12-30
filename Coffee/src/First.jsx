import "./First.css";
import { motion } from "framer-motion";
import bgimage from "./assets/background.jpeg";
import blackcoffie from "./assets/black coffie glass.png";
import whitecoffie from "./assets/white coffie glass.png";
import map from "./assets/map.png";
import appstore from "./assets/appstore.jpeg";
import playstore from "./assets/playstore.jpeg";
import social from "./assets/social media apps.png";
import payment from "./assets/Payment Method.jpeg";

export const First = () => {
  return (
    <div className="container-1">
      <div className="Firstview"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* CODERS COFFIE */}
        <motion.div
          initial={{ y: -50 }} // starts upar se
          whileInView={{ y: 0 }} // target position
          transition={{
            type: "spring", // spring animation
            stiffness: 200, // jitna tight/fast spring
            damping: 8, // jitna smooth/bounce
            mass: 1,
            duration: 1.5,
          }}
          className="coderscoffie"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h2 style={{ color: "#B93925" }}>CODERS</h2>
            <h2 style={{ color: "white", marginLeft: "10px" }}>COFFEE</h2>
          </div>
          <div style={{ fontSize: "30px", cursor: "pointer", color: "black" }}>
            🟰
          </div>
        </motion.div>

        {/* Blvck Tumbler */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.5,
            delay: 0.5,
            duration: 1.9,
          }}
          className="blavktumbler"
        >
          <h1 style={{ margin: 0 }}>Blvck</h1>
          <h1 style={{ margin: 0 }}>Tumbler</h1>
        </motion.div>

        {/* left text box */}
        <div className="firstlefttextbox"></div>

        {/* left box text */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: "0.9",
            type: "spring",
            stiffness: 150,
            damping: 12,
            mass: 1,
            duration: 1.2,
          }}
          className="leftboxtext"
        >
          <h3>Black Lifestyle Lovers,</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, omnis? Maxime, expedita, explicabo quam doloribus alias
            consectetur debitis, id omnis magni quisquam a veniam placeat!.
          </p>
        </motion.div>

        {/* right side ka box */}
        <motion.div
          initial={{ y: 50, opacity: 0 }} // starts niche se
          whileInView={{ y: 0, opacity: 1 }} // moves to original position
          transition={{
            type: "spring",
            delay: 0.8, // seconds
            stiffness: 150,
            damping: 10,
            mass: 1,
            duration: 1.2,
          }}
          className="firstrighttextbox"
        >
        </motion.div>

        {/* right box text */}
        <motion.div
          initial={{ x: -200, opacity: -20 }}
          whileInView={{ x: 0, opacity: 2 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 150,
            damping: 10,
            mass: 1,
            duration: 1.2,
          }}
          className="rightboxtext"
        >
          <h2>Blvck Tumbler</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. mollitia
            qui! Consequatur voluptatibus ab aspernatur facilis quos?
          </p>
        </motion.div>

        {/* background ka large text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 2 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 2,
            duration: 1.8,
          }}
          className="largetext"
        >
          <h1>Blvck</h1>
          <h1>Timbler</h1>
        </motion.div>

        {/* big middle coffee cup image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
            mass: 1,
            duration: 1.2,
          }}
          className="coffiecup"
        ></motion.div>

        {/* cup k piche ka yellow circle */}
        <motion.div
          initial={{ y: 200, opacity: -10 }}
          whileInView={{ y: 0, opacity: 2 }}
          transition={{
            type: "spring",
            delay: 0.8,
            stiffness: 150,
            damping: 10,
            mass: 1,
            duration: 1.8,
          }}
          className="orangecircle"
        ></motion.div>
      </div>

      {/* next view page */}
      <div className="second">
        <div className="top">
          <div className="heading1">
            <motion.h1
              initial={{ y: 120, opacity: 0 }} // thoda niche + invisible
              whileInView={{ y: 0, opacity: 1 }} // apni jagah + visible
              transition={{
                type: "spring",
                stiffness: 120, // spring ki tightness
                damping: 13, // bounce smooth karega
                duration: 1, // time control
                delay: 0.1, // thoda late aayega
              }}
            >
              Fresh and <span style={{ color: "#F19509" }}>Tasty coffee</span>
            </motion.h1>

            <motion.p
              initial={{ scale: 0.5, opacity: 0 }} // chhota aur invisible start
              whileInView={{ scale: 1, opacity: 1 }} // apne size me aa jaye
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                duration: 1.2,
                delay: 0.4, // heading ke baad aaye
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              reprehenderit eum <br /> ducimus, distinctio cum eaque totam
              voluptatem ex dolorem fuga.
            </motion.p>
          </div>

          <div className="bottom">
            {/* coffee image 1  */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 2,
                delay: 0.8,
              }}
              className="card"
            >
              <motion.img
                initial={{
                  scale: 1,
                  filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                }}
                whileHover={{
                  scale: 1.2,
                  filter: "drop-shadow(0px 0px 15px rgba(0, 0, 0, 1))",
                }}
                animate={{
                  scale: 1,
                  filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                }}
                transition={{ duration: 0.3 }}
                src={blackcoffie}
                alt="Coffee 1"
              />
              <h2>Black Coffee</h2>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>

            {/* coffee Image 2 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 2,
                delay: 1,
              }}
              className="card"
            >
              <motion.img
                initial={{
                  scale: 1,
                  filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                }}
                whileHover={{
                  scale: 1.2,
                  filter: "drop-shadow(0px 0px 15px rgba(0, 0, 0, 1))",
                }}
                animate={{
                  scale: 1,
                  filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                }}
                transition={{ duration: 0.3 }}
                src={whitecoffie}
                alt="Coffee 2"
              />
              <h2>Hot Coffee</h2>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>

            {/* Coffee Image 3 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 2,
                delay: 1.2,
              }}
              className="card"
            >
              <motion.img
                initial={{
                  scale: 1,
                  filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                }}
                whileHover={{
                  scale: 1.2,
                  filter: "drop-shadow(0px 0px 15px rgba(0, 0, 0, 1))",
                }}
                animate={{
                  scale: 1,
                  filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                }}
                transition={{ duration: 0.3 }}
                src={blackcoffie}
                alt="Coffee 3"
              />
              <h2>Cold Coffee</h2>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* form or map page */}
      <div className="formmap">
        <div className="form">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 8,
              mass: 1,
              delay: 0.2,
              duration: 0.4,
            }}
          >
            Buy our products from anywhere
          </motion.h1>
          <br />

          <form>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 8,
                mass: 1,
                delay: 0.4,
                duration: 0.6,
              }}
              className="input-row"
            >
              <input type="text" id="name" placeholder="Name" />
              <input type="email" id="email" placeholder="Email" />
            </motion.div>

            <br />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 8,
                mass: 1,
                delay: 0.6,
                duration: 0.6,
              }}
              className="input-row"
            >
              <input type="text" id="country" placeholder="Country" />
              <input type="text" id="zipcode" placeholder="Zipcode" />
            </motion.div>

            <br />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 8,
                mass: 1,
                delay: 0.8,
                duration: 0.6,
              }}
              className="btn-wrap"
            >
              <button type="submit">Submit</button>
            </motion.div>
          </form>
        </div>

        {/* map */}
        <motion.div className="map">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }} // chhoti aur transparent se start
            whileInView={{ scale: 1, opacity: 1 }} // original size & visible jab viewport me aaye
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            src={map}
            alt="map"
          />
        </motion.div>
      </div>

      {/* keyboard image  */}
      <div className="keyboard">
        <div>
          <motion.h1
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.5,
              duration: 1.8,
            }}
          >
            Download the app
          </motion.h1>
          <motion.p
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.8,
              duration: 1.8,
            }}
          >
            Lorem ipsum dolor sit amet <br /> consedolor sit amet consectetur
            adipisicing elit.
          </motion.p>
        </div>

        <div className="box">
          <motion.div
          initial={{x:350 ,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{
            delay:0.5,
            duration:1.5
          }}
          className="appstore">
            <img src={appstore} alt="" />
          </motion.div>

          <motion.div
          initial={{x:170 ,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{
            delay:1,
            duration:1.5
          }}
          className="playstore">
            <img src={playstore} alt="" />
          </motion.div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="info">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              // type: "spring",
              delay: 0.2,
              duration: 0.6,
            }}
            className="leftf"
          >
            <h1>CODERS CAFE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              praesentium fugiat earum quaerat dolores numquam placeat debitis
              cum explicabo dolorem, quis libero vel accusamus labore dolore
              aspernatur asperiores repellat quo necessitatibus architecto
              dolorum quam! Eius.
            </p>
            <h4>☎ +1 (123) 456-7890</h4>
            <h4>📍 Noida, Uttar Pradesh</h4>
          </motion.div>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              // type: "spring",
              delay: 0.5,
              duration: 0.6,
            }}
            className="middlef"
          >
            <h1>Quick Links</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="rightf"
          >
            <h1>Follow Us</h1>
            <div>
              <img src={social} alt="" />
              <h1>Payment Methods</h1>
              <img style={{ marginLeft: "25px" }} src={payment} alt="" />
            </div>
          </motion.div>
        </div>
        <br />
        <hr />
        <br />
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          © 2024 Coders Cafe Choudhary pvt. ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};
