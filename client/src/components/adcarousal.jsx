import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function AdCarousel() {
    return (
        <Container>
        <Carousel className="my-4">
            <Carousel.Item>
                { <img src="https://mooselog.com/cdn/shop/collections/image_fx__34__1_5360852c-a06c-4ea5-895d-fc2e913ed6b0.jpg?v=1741643664&width=1920" alt="Ad 1" className="d-block w-100" style={{height:'50%'}} /> }
                <div className="d-block w-100 bg-secondary text-white text-center py-5">
                    <h2>Boot Season is Here – 30% Off</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                { <img src="https://www.thefashionspot.com/wp-content/uploads/sites/11/2019/07/London-str-S19-108b-Marquee-landscape-cropped.jpg" alt="Ad 2" className="d-block w-100" style={{height:'100%'}} /> }
                <div className="d-block w-100 bg-dark text-white text-center py-5">
                    <h2>Heels That Turn Heads</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                { <img src="https://hips.hearstapps.com/hmg-prod/images/arch-support-sandals-2148140793-66748803806b3.jpg" alt="Ad 3" className="d-block w-100" style={{height:'100%'}}/> }
                <div className="d-block w-100 bg-light text-dark text-center py-5">
                    <h2>New Sandals Collection Just Landed</h2>
                </div>
            </Carousel.Item>
        </Carousel>
        </Container>
    
    );
}

export default AdCarousel;