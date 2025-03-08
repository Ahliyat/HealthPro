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
          <p>
            HealthPro is a leading healthcare facility committed to providing
            exceptional medical care to patients in our community. Established
            in 1991, we have built a reputation for excellence in patient care,
            innovation, and compassion. Our team of skilled physicians, nurses,
            and healthcare professionals work together to offer comprehensive
            services that meet the diverse needs of our patients.
          </p>
          <p>
            Located in Lagos,Nigeria, our state-of-the-art hospital is equipped
            with the latest medical technology, ensuring that our patients
            receive the highest standard of care in a comfortable and supportive
            environment. From routine check-ups to advanced treatments, we
            strive to make every patient’s experience as positive as possible.
          </p>

          <p>
            At HealthPro, our mission is to provide accessible, affordable, and
            quality healthcare to everyone. We are dedicated to improving the
            health and well-being of our community through personalized care,
            prevention, and education.
          </p>
          <p>Our Vision: To be the healthcare provider of choice.</p>

          <p>
            Our Mission: To deliver high-quality, patient-centered healthcare
            services that enhance the health and quality of life of our patients
            and the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
