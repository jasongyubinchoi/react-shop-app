import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import 'antd/dist/antd.css'
import RadioBox from "./Sections/RadioBox";
import CheckBox from "./Sections/CheckBox";
import {filterData} from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState("");

  const [Filters, setFilters] = useState({
    lengths: [],
    locations: [],
    services: [],
    environments: [],
    ratings: [],
    shapes: [],
    types: [],
    enhancementExtensions: [],
    nailArts: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      searchTerm: SearchTerms,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={
            <a href={`/product/${product._id}`}>
              {" "}
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };
  const handleRadio = (value,category) => {
    const data = filterData[category];
    let array = [];

    for (let key in data) {
      if (data[key].id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    console.log("array", array);
    return array;
  };
  const handleFilters = (filters, category, filterType) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (filterType === "RadioBox") {
      let priceValues = handleRadio(filters,category);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        {/* <h2>  Let's Travel Anywhere  <Icon type="rocket" />  </h2> */}
      </div>

      {/* Filter  */}
      <Row gutter = {[16,16]}>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {filterData["services"]} title = "Service" filterType = "radioBox"
          handleFilters = {filters => handleFilters(filters, "services")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {filterData["locations"]} title = "Location" filterType = "radioBox"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {filterData["environments"]} title = "Environment" filterType = "radioBox"
          handleFilters = {filters => handleFilters(filters, "environments")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <CheckBox 
        list = {filterData["lengths"]} title = "Length" 
            handleFilters = {filters => handleFilters(filters, "lengths")}
        />
      </Col>
      </Row>
      <br/>
      <br/>

      <Row gutter = {[16,16]}>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {filterData["shapes"]} title = "Shape" filterType = "radioBox"
          handleFilters = {filters => handleFilters(filters, "shapes")}
          />
      </Col>
      <Col lg={5} xs={10}  >
        <RadioBox
        list = {filterData["types"]} title = "Types" filterType = "radioBox"
          handleFilters = {filters => handleFilters(filters, "types")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox filterType = "radioBox"
        list = {filterData["enhancementExtensions"]} title = "Enhancement Extension"
          handleFilters = {filters => handleFilters(filters, "enhancementExtensions")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox filterType = "radioBox"
        list = {filterData["ratings"]} title = "Rating"
          handleFilters = {filters => handleFilters(filters, "ratings")}
          />
      </Col>
      </Row>
      <br/>
      <br/>
      <Row gutter = {[16,16]}>
      
      
      <Col lg={5} xs={10} >
        <RadioBox filterType = "radioBox"
        list = {filterData["nailArts"]} title = "Nail Art"
          handleFilters = {filters => handleFilters(filters, "nailArts")}
          />
      </Col>
      </Row>

      {/* Search  */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div>

      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;

// phase1 search box and filter open