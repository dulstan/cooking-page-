import React, { useEffect, useState } from "react";
import CustomPromptModal from "./ContactFormModal";
import "./contactForm.css";
function ContactFormWithPrompt() {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [formChanged, setFormChanged] = useState(false);
  const [showCustomPrompt, setShowCustomPrompt] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, ""); // \D matchar icke-siffror
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setFormChanged(true);
  };

  useEffect(() => {
    const unloadHandler = (e) => {
      if (formChanged) {
        e.preventDefault();
        e.returnValue =
          "Du har osparad data. Är du säker på att du vill lämna sidan?";
      }
    };

    window.addEventListener("beforeunload", unloadHandler);

    return () => {
      window.removeEventListener("beforeunload", unloadHandler);
    };
  }, [formChanged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setShowCustomPrompt(true);
    } else {
      setFormChanged(false);
      sessionStorage.removeItem("formData");
    }
  };

  const handleCustomPromptConfirm = () => {
    setFormChanged(false);
    setShowCustomPrompt(false);
  };

  const handleCustomPromptCancel = () => {
    setShowCustomPrompt(false);
  };

  // Load stored form data on component mount
  useEffect(() => {
    const storedFormData = JSON.parse(sessionStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  // Save form data to sessionStorage whenever it changes
  useEffect(() => {
    if (formChanged) {
      sessionStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formChanged, formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name *</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <p>Email *</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <p>Mobile Number *</p>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          inputMode="numeric"
        />
        <p>Message </p>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button className="accessible-button" type="submit">
          Skicka
        </button>
      </form>

      <CustomPromptModal
        isOpen={showCustomPrompt}
        message="Fyll i alla fält innan du skickar formuläret."
        onCancel={handleCustomPromptCancel}
        onConfirm={handleCustomPromptConfirm}
      />
    </div>
  );
}

export default ContactFormWithPrompt;
