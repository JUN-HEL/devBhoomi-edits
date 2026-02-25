// src/components/TopInfoBar/TopInfoBar.jsx
import "./TopInfoBar.css";

const TopInfoBar = () => {
    return (
        <div className="topinfo">
            <div className="topinfo-container">
                <a className="topinfo-item" href="mailto:amankukreti95@gmail.com">
                    <span className="topinfo-ico" aria-hidden="true">  <img className="wa-img" src="/icons/mail.png" alt="Mail" />
                    </span>
                    <span className="topinfo-text">amankukreti95@gmail.com</span>
                </a>

                <span className="topinfo-sep">|</span>

                <a className="topinfo-item" href="tel:+918218749995">
                    <span className="topinfo-ico" aria-hidden="true">📞</span>
                    <span className="topinfo-text">+91 8218749995</span>
                </a>

                <span className="topinfo-sep">|</span>

                <a
                    className="topinfo-item topinfo-wa"
                    href="https://wa.me/918218749995"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="topinfo-ico" aria-hidden="true">                <img className="wa-img" src="/icons/whatsApp.png" alt="WhatsApp" />
                    </span>
                    <span className="topinfo-text">WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default TopInfoBar;