import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Contact = ({ sClass }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageForm, setMessageForm] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      text: `
      Nathan ! Tu as reçu un nouveau lead !
Nom: ${form.name}
Email: ${form.email}
Message: ${form.message}`,
    };

    try {
      const result = await axios.post(
        "https://hooks.slack.com/services/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",
        JSON.stringify(data)
      );

      console.log(result);

      setMessageForm(true);
      setErrorForm(false);
      setMsgAlert(
        "J'ai bien reçu votre message, je vous recontacte au plus vite."
      );
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseMui = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessageForm(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className="container contact-box" id="subscription">
      <div className={`subscribe_form_info text-center ${sClass}`}>
        <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">
          Contact me
        </h2>
        <form
          method="post"
          className="subscribe-form d-flex flex-column"
          name="contact"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* <input
            type="hidden"
            name="form-name"
            value="subscription-enterprises"
          /> */}
          <TextField
            required
            name="name"
            id="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
            placeholder="Name"
          />
          <TextField
            required
            className="mt-4"
            name="email"
            id="email"
            type="mail"
            value={form.email}
            onChange={(e) => handleChange(e)}
            placeholder="E-mail"
          />
          <TextField
            className="mt-4"
            name="message"
            multiline
            rows={8}
            required
            id="message"
            value={form.message}
            onChange={(e) => handleChange(e)}
            placeholder="Message"
          />
          <button type="submit" className="btn_hover btn_send_custom mt_40">
            Send
          </button>
        </form>
      </div>
      <Snackbar
        open={messageForm}
        autoHideDuration={6000}
        onClose={handleCloseMui}
      >
        <Alert
          onClose={handleCloseMui}
          severity={!errorForm ? "success" : "error"}
        >
          {msgAlert}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Contact;
