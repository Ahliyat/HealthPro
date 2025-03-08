import React from 'react'
import styles from "./sendUsAMessage.module.css";
import Button from '../button/Button';
const SendUsAMessage = () => {
  return (
    <section className={styles.messageContainer}>
      <h1>Send us a message</h1>
      <form className={styles.inputContainer}>
        <div className={styles.inputSet}>
            <input type="text" placeholder= "First Name" />
            <input type="text" placeholder= "Last Name" />
        </div>
        <div className={styles.inputSet}>
        <input type="tel" placeholder= "Mobile Number" />
        <input type="email" placeholder= "Email" />
        </div>
        <input className={styles.messageInput} type="text" placeholder= "Message" />
      </form>
    <Button className={styles.sendBtn}>Send</Button>
    </section>
  )
}

export default SendUsAMessage

