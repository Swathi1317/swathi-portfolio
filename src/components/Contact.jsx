function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p>Let's connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Get in touch</h3>

          <p>
            If you would like to connect with me, discuss a project,
            or have an opportunity to share, feel free to reach out.
          </p>

          <div className="contact-details">

            <a href="tel:+916369652118">
              📱 <span>+91 63696 52118</span>
            </a>

            <a href="mailto:swathithiru944@gmail.com">
              📧 <span>swathithiru944@gmail.com</span>
            </a>

            <a
              href="https://wa.me/916369652118"
              target="_blank"
              rel="noreferrer"
            >
              💬 <span>WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/in/swathi-t-927704357/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Swathi1317"
              target="_blank"
              rel="noreferrer"
            >
              💻 <span>GitHub</span>
            </a>

          </div>
        </div>


        <form
          className="contact-form"
          action="https://formspree.io/f/mljdpqjy"
          method="POST"
        >

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="send-button">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;