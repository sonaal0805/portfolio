import emailjs from "emailjs-com"
import { useEffect, useRef, useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import './Contact.scss'
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"


const Contact = ()=>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const [sendingEmail, setSendingEmail] = useState(false)
    const [formData, setFormData]= useState({
      from_name:'',
      from_email:'',
      subject:'',
      message:''
    })

    const form_ref = useRef()
    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => clearTimeout(timer);

    }, [])



    const handleFormInput = (e)=>{
      let name = e.target.name
      let value = e.target.value
      setFormData({...formData, [name]: value})

    }
    const reset = (notification_message)=>{

        setFormData({
          from_name:'',
          from_email:'',
          subject:'',
          message:''
        })

        showNotification({
              id: 'load-data',
              title: notification_message,
              autoClose: true,
              disallowClose: false,
              color: 'teal',
              icon: <IconCheck size={16} />,
          });

    }

    const sendEmail = async(e) => {
      console.log('sending email...')
      e.preventDefault()

      setSendingEmail(true)
      await emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_JS_SERVICE_ID, 
          process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
          form_ref.current,
          process.env.REACT_APP_EMAIL_JS_USER_ID,
          )
        .then(
          reset('Message sent!')
          ,
          reset('Failed to send the message. Please try agian!')
        
        )
       setSendingEmail(false)
  }

    return(
      <>
     
        <div className="container contact-page">
          <div className = 'text-zone'>
            <h1>
              <AnimatedLetters
              strArray={"Contact me".split("")}
              idx = {15}
              letterClass = {letterClass}
              />
            </h1>
             <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
            <div className="contact-form">
              <form ref={form_ref} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input 
                    placeholder="Name" 
                    type="text" 
                    name="from_name" 
                    value={formData.from_name} 
                    onChange={handleFormInput}
                    required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleFormInput}                    
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormInput}
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormInput}
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className={sendingEmail? "disabled-button":"flat-button"} disabled = {sendingEmail} value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>

          <div className = 'info-map'>
            Sonal Chandra
            <br/>
            The Chinese University of Hong Kong, Sha Tin, Hong Kong <br/>
            <span>sonalchandra@link.cuhk.edu.hk</span>

          </div>

          <div className = 'map-wrap'>

            <MapContainer center= {[22.420975,114.204947]} zoom = {13}>

              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[22.420975,114.204947]}>
                <Popup>I live here, come over for a cup of coffee!</Popup>
              </Marker>

            </MapContainer>

          </div>
        </div>
        <Loader type = "pacman"/>

       </>
    )

}

export default Contact