import React from "react";
import {
  Card,
  Stack,
  Button,
  Text,
  TextContainer,
  Icon,
} from "@shopify/polaris";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImg from "../../assets/bg.jpg";
import "@shopify/polaris/build/esm/styles.css";
import "./ProductSlider.css";
import { ChevronLeftMinor, ChevronRightMinor } from "@shopify/polaris-icons";

function FeaturedProductSlider() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: bgImg,
      price: "19.99",
      description: "Product description",
    },
    {
      id: 2,
      title: "Product 2",
      image: bgImg,
      price: "24.99",
      description: "Product description",
    },
    {
      id: 3,
      title: "Product 3",
      image: bgImg,
      price: "29.99",
      description: "Product description",
    },
    {
      id: 4,
      title: "Product 4",
      image: bgImg,
      price: "34.99",
      description: "Product description",
    },
    {
      id: 5,
      title: "Product 5",
      image: bgImg,
      price: "39.99",
      description: "Product description",
    },
    {
      id: 6,
      title: "Product 6",
      image: bgImg,
      price: "44.99",
      description: "Product description",
    },
    {
      id: 7,
      title: "Product 7",
      image: bgImg,
      price: "49.99",
      description: "Product description",
    },
  ];

  const sliderRef = React.useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <div className="prevButton">
          <div className="innerPrevButton" onClick={previous}>
            <Icon source={ChevronLeftMinor} color="white" />
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="mainCard">
              <Card>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "140px" }}
                />
                <TextContainer spacing="tight">
                  <div style={{ marginTop: "5px" }}>
                    <Text variant="headingSm" as="h6" fontWeight="semibold">
                      {product.title}
                    </Text>
                  </div>
                  <div style={{ color: "#84B394" }}>
                    <Text variant="headingXs" as="p" fontWeight="regular">
                      {product.description}
                    </Text>
                  </div>
                  <div style={{ color: "#989AFB", marginBottom: "5px" }}>
                    <Text variant="headingSm" as="h6">
                      ${product.price}
                    </Text>
                  </div>
                </TextContainer>
                <div className="cartButton">
                  <Button fullWidth outline={false}>
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
        <div className="nextButton">
          <div className="innerNextButton" onClick={next}>
            <Icon source={ChevronRightMinor} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProductSlider;
