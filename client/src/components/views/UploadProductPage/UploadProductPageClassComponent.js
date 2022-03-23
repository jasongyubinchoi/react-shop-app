import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

const lengths = [
    {key: 1,
    value: "Short"
    },
    {key:2,
    value:"Medium"},
    {key: 3,
    value: "Long"
    },
    {key:4,
    value:"Extra Long"}
]
const locations = [
    {
        key : 1,
        value: "Within 5 miles"

    },
    {
        key : 2,
        value: "Within 5 to 10 miles"

    },
    {
        key : 3,
        value: "Within 10 to 25 miles"

    }
] 
const environments = [
    {key: 1,
    value: "Salon"
    },
    {key:2,
    value:"Mobile"},
    {key: 3,
    value: "Salon Suite"
    },
    {key:4,
    value:"Home-based"}
]
const ratings = [
    {key: 1,
    value: "⭐"
    },
    {key:2,
    value:"⭐⭐"},
    {key: 3,
    value: "⭐⭐⭐"
    },
    {key:4,
    value:"⭐⭐⭐⭐"},
    {key:5,
    value:"⭐⭐⭐⭐⭐"}
]
const shapes = [
    {key: 1,
    value: "Coffin"
    },
    {key:2,
    value:"Almond"},
    {key: 3,
    value: "Square"
    },
    {key:4,
    value:"Stiletto"},
    {
        key:5,
        value:"Ballerina"
    }
]

const types = [
    {key: 1,
    value: "Hard Gel"
    },
    {key:2,
    value:"Acrylic"},
    {key: 3,
    value: "Polygel"
    },
    {key:4,
    value:"Soft Gel"},
    {
    key:5,
    value:"Dip Powder"
    },
    {
    key:6,
    value:"Gel-X"
        }
]
const enhancementExtensions = [
    {key: 1,
    value: "Sculpting Forms"
    },
    {key:2,
    value:"Tips"},
    {key: 3,
    value: "Cruved Tips"
    },
    {key:4,
    value:"Dual"}
]
const services = [
    {key: 1,
    value: "Natural Nail Care"
    },
    {key:2,
    value:"Pedicure"},
    {key: 3,
    value: "Artificial Nail Enhancements"
    }
]
const nailArts = [
    {key: 1,
    value: "Gel Polish"
    },
    {key:2,
    value:"Regular Polish"}
]

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        continents: 1,
        lengths: 1,
        locations: 1,
        environments: 1,
        ratings: 1,
        shapes: 1,
        types: 1,
        enhancementExtensions: 1,
        services: 1,
        nailarts: 1,
        images: [],
        price: 0
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeContinents = (event) => {
        this.setState({ continents: event.currentTarget.value })
    }
    handleChangeLengths = (event) => {
        this.setState({ lengths: event.currentTarget.value })
    }
    handleChangeLocations = (event) => {
        this.setState({ locations: event.currentTarget.value })
    }
    handleChangeEnvironments = (event) => {
        this.setState({ environments: event.currentTarget.value })
    }
    handleChangeRatings = (event) => {
        this.setState({ ratings: event.currentTarget.value })
    }
    handleChangeShapes = (event) => {
        this.setState({ shapes: event.currentTarget.value })
    }
    handleChangeTypes = (event) => {
        this.setState({ types: event.currentTarget.value })
    }
    handleChangeEnhancementExtensions = (event) => {
        this.setState({ enhancementExtensions: event.currentTarget.value })
    }
    handleChangeServices = (event) => {
        this.setState({ services: event.currentTarget.value })
    }
    handleChangeNailArts = (event) => {
        this.setState({ nailArts: event.currentTarget.value })
    }
    


    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.continents || !this.state.images
            || !this.state.price) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            continents: this.state.continents,
            price: this.state.price,
            lengths: this.state.lengths,
            locations: this.state.locations,
            environments: this.state.environments,
            ratings: this.state.ratings,
            shapes: this.state.shapes,
            types: this.state.types,
            enhancementExtension: this.state.enhancementExtension,
            services: this.state.services,
            nailarts: this.state.nailarts
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Travel Product</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Title</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Price($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <select onChange={this.handleChangeContinents}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeLengths}>
                    {lengths.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeLocations}>
                    {locations.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeEnvironments}>
                    {environments.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeRatings}>
                    {ratings.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeShapes}>
                    {shapes.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeTypes}>
                    {types.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeEnhancementExtensions}>
                    {enhancementExtensions.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeServices}>
                    {services.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeNailArts}>
                    {nailArts.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
