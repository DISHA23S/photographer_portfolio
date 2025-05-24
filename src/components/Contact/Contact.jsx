// import React, { useState, useRef } from "react";
// import "./Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     appointmentDate: "",
//     inquiryType: "",
//   });

//   const dateInputRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-content">
//         <div className="contact-header">
//           <div className="contact-label">Contact Me</div>
//           <div className="contact-title">Get in Touch with Me</div>
//         </div>

//         <div className="contact-description">
//           Step into a world of timeless photography with me. Explore our range
//           of photography services, each crafted to tell your unique story
//           through captivating images. Whether it's the magic of portraits, the
//           emotion of events, or the allure of commercial photography, we're here
//           to bring your vision to life.
//         </div>

//         <div className="social-media-container">
//           <button className="social-button">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/0b242f0ff3ed52d4384da181f7e5530464a63d77?placeholderIfAbsent=true"
//               alt="Social Media"
//               className="social-icon"
//             />
//           </button>
//           <button className="social-button">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/ec2714fb35eced696f65afc05dc207517bf5df91?placeholderIfAbsent=true"
//               alt="Social Media"
//               className="social-icon"
//             />
//           </button>
//           <button className="social-button">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/5a96035c82473100177e71dc3ef2aac5f4099b6b?placeholderIfAbsent=true"
//               alt="Social Media"
//               className="social-icon"
//             />
//           </button>
//         </div>

//         <div className="scroll-message">Scroll Down To Book An Appointment</div>
//       </div>

//       <div className="contact-form-container">
//         <div className="contact-info-section">
//           <div className="contact-info-content">
//             <div className="section-title">Contact Information</div>
//             <div className="section-description">
//               Feel free to reach out to us through various channels. We are
//               available by phone, email, and social media for your convenience.
//             </div>
//           </div>
//           <div className="contact-links">
//             <div className="contact-link">
//               <div className="link-text">+91-0000000000</div>
//               <div className="link-icon">📞</div>
//             </div>
//             <div className="contact-link">
//               <div className="link-text">info@namephotography.com</div>
//               <div className="link-icon">✉️</div>
//             </div>
//           </div>
//         </div>

//         <div className="message-section">
//           <div className="message-content">
//             <div className="section-title">Book an Appoitnment</div>
//             <div className="section-description">
//               Have a specific inquiry or message for us? Please use the contact
//               form below, and we'll get back to you promptly.
//             </div>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="form-group">
//                 <label className="form-label" htmlFor="firstName">
//                   First Name
//                 </label>
//                 <div className="input-wrapper">
//                   <input
//                     id="firstName"
//                     type="text"
//                     name="firstName"
//                     placeholder="FIRST NAME"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="form-input"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label className="form-label" htmlFor="lastName">
//                   Last Name
//                 </label>
//                 <div className="input-wrapper">
//                   <input
//                     id="lastName"
//                     type="text"
//                     name="lastName"
//                     placeholder="LAST NAME"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="form-input"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label className="form-label" htmlFor="email">
//                   Email
//                 </label>
//                 <div className="input-wrapper">
//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     placeholder="EMAIL ADDRESS"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="form-input"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label className="form-label" htmlFor="phone">
//                   Phone Number
//                 </label>
//                 <div className="input-wrapper">
//                   <input
//                     id="phone"
//                     type="tel"
//                     name="phone"
//                     placeholder="PHONE NUMBER"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="form-input"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Inquiry Type */}
//             <div className="form-group full-width">
//               <label className="form-label" htmlFor="inquiryType">
//                 Type of Inquiry
//               </label>
//               <div className="input-wrapper">
//                 <select
//                   id="inquiryType"
//                   name="inquiryType"
//                   value={formData.inquiryType}
//                   onChange={handleInputChange}
//                   className="form-input"
//                   required
//                 >
//                   <option value="" disabled>
//                     Select inquiry type
//                   </option>
//                   <option value="Portrait Photography">
//                     Portrait Photography
//                   </option>
//                   <option value="Event Photography">Event Photography</option>
//                   <option value="Commercial Photography">
//                     Commercial Photography
//                   </option>
//                   <option value="Wedding Photography">Wedding Photography</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//             </div>

//             {/* Appointment Date with calendar button */}
//             <div className="form-group full-width">
//               <label className="form-label" htmlFor="appointmentDate">
//                 Appointment Date
//               </label>
//               <div className="input-wrapper date-input-wrapper">

//                 <input
//                   id="appointmentDate"
//                   type="date"
//                   name="appointmentDate"
//                   value={formData.appointmentDate}
//                   onChange={handleInputChange}
//                   className="form-input"
//                   required
//                   min={new Date().toISOString().split("T")[0]}
//                   style={{ flexGrow: 1 }}
//                   ref={dateInputRef}
//                 />
//                 <button
//                   type="button"
//                   className="calendar-button"
//                   onClick={() =>
//                     dateInputRef.current?.showPicker?.() ||
//                     dateInputRef.current?.focus()
//                   }
//                   aria-label="Open calendar"
//                 >
//                   📅
//                 </button>
//               </div>
//             </div>

//             <div className="form-group full-width">
//               <label className="form-label" htmlFor="message">
//                 Your Message
//               </label>
//               <div className="input-wrapper">
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="MESSAGE"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="form-textarea"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="submit-section">
//               <button type="submit" className="submit-button">
//                 Send Message ➤
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    appointmentDate: "",
    inquiryType: "",
  });

  const dateInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data. You can replace this with actual submission logic.
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    // Optionally clear form after submit
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      appointmentDate: "",
      inquiryType: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-header">
          <div className="contact-label">Contact Me</div>
          <div className="contact-title">Get in Touch with Me</div>
        </div>

        <div className="contact-description">
          Step into a world of timeless photography with me. Explore our range
          of photography services, each crafted to tell your unique story
          through captivating images. Whether it's the magic of portraits, the
          emotion of events, or the allure of commercial photography, we're
          here to bring your vision to life.
        </div>

        <div className="social-media-container">
          <button className="social-button" aria-label="Facebook">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/0b242f0ff3ed52d4384da181f7e5530464a63d77?placeholderIfAbsent=true"
              alt="Facebook"
              className="social-icon"
            />
          </button>
          <button className="social-button" aria-label="Instagram">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/ec2714fb35eced696f65afc05dc207517bf5df91?placeholderIfAbsent=true"
              alt="Instagram"
              className="social-icon"
            />
          </button>
          <button className="social-button" aria-label="Twitter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/5a96035c82473100177e71dc3ef2aac5f4099b6b?placeholderIfAbsent=true"
              alt="Twitter"
              className="social-icon"
            />
          </button>
        </div>

        <div className="scroll-message">Scroll Down To Book An Appointment</div>
      </div>

      <div className="contact-form-container">
        <div className="contact-info-section">
          <div className="contact-info-content">
            <div className="section-title">Contact Information</div>
            <div className="section-description">
              Feel free to reach out to us through various channels. We are
              available by phone, email, and social media for your convenience.
            </div>
          </div>
          <div className="contact-links">
            <div className="contact-link">
              <div className="link-text">+91-0000000000</div>
              <div className="link-icon" aria-hidden="true">📞</div>
            </div>
            <div className="contact-link">
              <div className="link-text">info@namephotography.com</div>
              <div className="link-icon" aria-hidden="true">✉️</div>
            </div>
          </div>
        </div>

        <div className="message-section">
          <div className="message-content">
            <div className="section-title">Book an Appointment</div>
            <div className="section-description">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we'll get back to you promptly.
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <div className="input-wrapper">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="FIRST NAME"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    autoComplete="given-name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <div className="input-wrapper">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="LAST NAME"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone Number
                </label>
                <div className="input-wrapper">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    autoComplete="tel"
                  />
                </div>
              </div>
            </div>

            {/* Inquiry Type */}
            <div className="form-group full-width">
              <label className="form-label" htmlFor="inquiryType">
                Type of Inquiry
              </label>
              <div className="input-wrapper">
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  aria-required="true"
                >
                  <option value="" disabled>
                    Select inquiry type
                  </option>
                  <option value="Portrait Photography">
                    Portrait Photography
                  </option>
                  <option value="Event Photography">Event Photography</option>
                  <option value="Commercial Photography">
                    Commercial Photography
                  </option>
                  <option value="Wedding Photography">Wedding Photography</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Appointment Date with calendar button */}
            <div className="form-group full-width">
              <label className="form-label" htmlFor="appointmentDate">
                Appointment Date
              </label>
              <div className="input-wrapper date-input-wrapper">
                <input
                  id="appointmentDate"
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  style={{ flexGrow: 1 }}
                  ref={dateInputRef}
                  aria-describedby="appointmentDateHelp"
                />
                <button
                  type="button"
                  className="calendar-button"
                  onClick={() =>
                    dateInputRef.current?.showPicker?.() ||
                    dateInputRef.current?.focus()
                  }
                  aria-label="Open calendar"
                >
                  📅
                </button>
              </div>
              <small id="appointmentDateHelp" className="form-hint">
                Select your preferred appointment date.
              </small>
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="message">
                Your Message
              </label>
              <div className="input-wrapper">
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  rows={4}
                />
              </div>
            </div>

            <div className="submit-section">
              <button type="submit" className="submit-button">
                Send Message ➤
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
