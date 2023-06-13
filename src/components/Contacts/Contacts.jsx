import React from 'react';
import './contacts.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contacts = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth c-container">

          {/* left side */}
          <div className="flexColStart c-left">
          <span className='orangeText'>Our Contact Us</span>
          <span className='primaryText'>Easy to contact us</span>
          <span className='secondaryText'>We always ready help by providing the best services for you.
            <br /> We believe a good place to live can make your life better</span>

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
              <div className="mode">
                  
                  <div className="flexStart">
                    <div className="icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Call</span>
                      <span className='secondaryText'>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>

                </div>

                <div className="flexColStart row"></div>
                <div className="mode">
                  
                  <div className="flexStart">
                    <div className="icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Message</span>
                      <span className='secondaryText'>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>

                </div>

              </div>

              <div className="flexStart row">
              <div className="mode">
                  
                  <div className="flexStart">
                    <div className="icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Video Call</span>
                      <span className='secondaryText'>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Video Call Now</div>

                </div>

                <div className="flexColStart row"></div>
                <div className="mode">
                  
                  <div className="flexStart">
                    <div className="icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Chat</span>
                      <span className='secondaryText'>021 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>

                </div>

              </div>


            </div>
             </div>

          {/* right side */}
          <div className="flexCenter c-right">
            <div className="flexCenter image-container">
              <img src="../../../images/contact.jpg" alt="contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts
