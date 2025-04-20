import './Gallery.css';
import people1 from '../images/people1.jpg';
import people2 from '../images/people2.jpg';
import people3 from '../images/people3.jpg';
import people4 from '../images/people4.jpg';
import people5 from '../images/people5.jpg';
import wed1 from '../images/wed1.jpg';
import Event2 from '../images/Event2.jpg';
import Event1 from '../images/Event1.jpg';
import Event from '../images/Event.jpg';
import design from '../images/design.jpg';
import Decoration from '../images/Decoration.jpg';

function Gallery() {
  return (
    <div>
      <div className="img">
        <div className="section">
          <div className="container">
            <h1>Gallery</h1>
            <p>Welcome to Our gallery.</p>
          </div>
        </div>
      </div>

      <div className="Gallery">
        <div className="gallery1">
          <div className="img-wrapper"><img src={people1} alt="people1" /></div>
          <div className="img-wrapper"><img src={people2} alt="people2" /></div>
          <div className="img-wrapper"><img src={people3} alt="people3" /></div>
          <div className="img-wrapper"><img src={people4} alt="people4" /></div>
        </div>

        <div className="gallery1">
          <div className="img-wrapper"><img src={people5} alt="people5" /></div>
          <div className="img-wrapper"><img src={wed1} alt="wedding" /></div>
          <div className="img-wrapper"><img src={Event} alt="event" /></div>
          <div className="img-wrapper"><img src={Event1} alt="event1" /></div>
        </div>

        <div className="gallery1">
          <div className="img-wrapper"><img src={Event2} alt="event2" /></div>
          <div className="img-wrapper"><img src={design} alt="design" /></div>
          <div className="img-wrapper"><img src={Decoration} alt="decoration" /></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
