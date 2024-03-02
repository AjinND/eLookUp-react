import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faMagnifyingGlass, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark" style={{ height: "28rem" }} interval={400000}>
      <Carousel.Item style={{ height: "28rem" }}>
        <img className="d-block w-100" src='/search_background.png' alt="First slide" style={{objectFit: 'fit', height: '100%'}} />
        <Carousel.Caption>
          <h4>Looking For Someone?</h4>
          <Button href="/search" variant="secondary" size="lg">
            Find People <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "28rem" }}>
        <img className="d-block w-100" src="/register_background.png" alt="Second slide" style={{objectFit: 'fit', height: '100%'}} />
        <Carousel.Caption>
          <h4>Haven't been a part yet?</h4>
          <Button href="/signup" variant="secondary" size="lg">
            Sign Up <FontAwesomeIcon icon={faUserPlus} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "28rem" }}>
        <img className="d-block w-100" src="/about_background.png" alt="Third slide" style={{objectFit: 'fit', height: '100%'}} />
        <Carousel.Caption>
          <h4>Know About Us</h4>
          <Button href="/about" variant="secondary" size="lg">
            About Us <FontAwesomeIcon icon={faCircleInfo} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
