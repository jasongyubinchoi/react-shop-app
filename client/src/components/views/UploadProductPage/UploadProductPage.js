import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

const lengths = [
  { key: 1, value: "Short" },
  { key: 2, value: "Medium" },
  { key: 3, value: "Long" },
  { key: 4, value: "Extra Long" },
];
const locations = [
  {
    key: 1,
    value: "Within 5 miles",
  },
  {
    key: 2,
    value: "Within 5 to 10 miles",
  },
  {
    key: 3,
    value: "Within 10 to 25 miles",
  },
];
const environments = [
  { key: 1, value: "Salon" },
  { key: 2, value: "Mobile" },
  { key: 3, value: "Salon Suite" },
  { key: 4, value: "Home-based" },
];
const ratings = [
  { key: 1, value: "⭐" },
  { key: 2, value: "⭐⭐" },
  { key: 3, value: "⭐⭐⭐" },
  { key: 4, value: "⭐⭐⭐⭐" },
  { key: 5, value: "⭐⭐⭐⭐⭐" },
];
const shapes = [
  { key: 1, value: "Coffin" },
  { key: 2, value: "Almond" },
  { key: 3, value: "Square" },
  { key: 4, value: "Stiletto" },
  {
    key: 5,
    value: "Ballerina",
  },
];

const types = [
  { key: 1, value: "Hard Gel" },
  { key: 2, value: "Acrylic" },
  { key: 3, value: "Polygel" },
  { key: 4, value: "Soft Gel" },
  {
    key: 5,
    value: "Dip Powder",
  },
  {
    key: 6,
    value: "Gel-X",
  },
];
const enhancementExtensions = [
  { key: 1, value: "Sculpting Forms" },
  { key: 2, value: "Tips" },
  { key: 3, value: "Cruved Tips" },
  { key: 4, value: "Dual" },
];
const services = [
  { key: 1, value: "Natural Nail Care" },
  { key: 2, value: "Pedicure" },
  { key: 3, value: "Artificial Nail Enhancements" },
];
const nailArts = [
  { key: 1, value: "Gel Polish" },
  { key: 2, value: "Regular Polish" },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [LengthValue, setLengthValue] = useState(1);
  const [LocationValue, setLocationValue] = useState(1);
  const [ServiceValue, setServiceValue] = useState(1);
  const [EnvironmenthValue, setEnvironmentValue] = useState(1);
  const [RatingValue, setRatingValue] = useState(1);
  const [ShapeValue, setShapeValue] = useState(1);
  const [TypeValue, setTypeValue] = useState(1);
  const [EnhancementExtensionValue, setEnhancementExtensionValue] = useState(1);
  const [NailArtValue, setNailArtValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onLengthsSelectChange = (event) => {
    setLengthValue(event.currentTarget.value);
  };

  const onLocationsSelectChange = (event) => {
    setLocationValue(event.currentTarget.value);
  };
  const onServicesSelectChange = (event) => {
    setServiceValue(event.currentTarget.value);
  };
  const onEnvironmentsSelectChange = (event) => {
    setEnvironmentValue(event.currentTarget.value);
  };
  const onRatingsSelectChange = (event) => {
    setRatingValue(event.currentTarget.value);
  };
  const onShapesSelectChange = (event) => {
    setShapeValue(event.currentTarget.value);
  };
  const onTypesSelectChange = (event) => {
    setTypeValue(event.currentTarget.value);
  };
  const oneEhancementExtensionsSelectChange = (event) => {
    setEnhancementExtensionValue(event.currentTarget.value);
  };
  const onNailArtsSelectChange = (event) => {
    setNailArtValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !LengthValue ||
      !Images
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      lengths: LengthValue,
      locations: LocationValue,
      services: ServiceValue,
      environments: EnvironmenthValue,
      ratings: RatingValue,
      shapes: ShapeValue,
      types: TypeValue,
      enhancementExtensions: EnhancementExtensionValue,
      nailArts: NailArtValue,
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Nail Technician Information</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Name</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <Input onChange={onPriceChange} value={PriceValue} type="number" />
        <br />
        <br />
        <label>Lengths </label>
        <select onChange={onLengthsSelectChange} value={LengthValue}>
          {lengths.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <label> Locations </label>
        <select onChange={onLocationsSelectChange} value={LocationValue}>
          {locations.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>

        <label> Services </label>
        <select onChange={onServicesSelectChange} value={ServiceValue}>
          {services.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label> Environments </label>
        <select onChange={onEnvironmentsSelectChange} value={EnvironmenthValue}>
          {environments.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <label> Ratings </label>
        <select onChange={onRatingsSelectChange} value={RatingValue}>
          {ratings.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <label> Shapes </label>
        <select onChange={onShapesSelectChange} value={ShapeValue}>
          {shapes.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>Type </label>
        <select onChange={onTypesSelectChange} value={TypeValue}>
          {types.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <label> EnhancementExtensions </label>
        <select
          onChange={oneEhancementExtensionsSelectChange}
          value={EnhancementExtensionValue}
        >
          {enhancementExtensions.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <label> NailArts </label>
        <select onChange={onNailArtsSelectChange} value={NailArtValue}>
          {nailArts.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
