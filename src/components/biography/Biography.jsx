import React from "react";
import styles from "./biography.module.css";
import bioImg from "../../assets/bio_image.jpg";
import Button from "../button/Button";
const Biography = () => {
  return (
    <section className={styles.bioContainer}>
      <div className={styles.leftBioContainer}>
        <img className={styles.bioImg} src={bioImg} alt="bio img" />
      </div>
      <div className={styles.rightBioContainer}>
        <div className={styles.bioText}>
          <h6>Biography</h6>
          <h1>Who We Are</h1>
          <p><b>Name</b>: HealthPro</p>
          <p><b>Location</b>: Lagos,Nigeria</p>
          <p>
            <b>Established</b>: 1991
          </p>
          <p>
            <b>Founder</b>: Orenuga Ahliyat Precious{" "}
          </p>
          <p>
            <b>Mission Statement</b>: To deliver high-quality, patient-centered
            healthcare services that enhance the health and quality of life of
            our patients and the communities we serve.
          </p>
          <p>
           <b> Contact Information</b>: 29,Motara street, Ejigbo, Lagos,Nigeria,
            07789309875, ahliyahorenuga@gmail.com
          </p>
        </div>
        <Button type="button" className={styles.bioBtn}>
      See more
          </Button>
      </div>
    </section>
  );
};

export default Biography;
