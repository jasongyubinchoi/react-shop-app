import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';
import { Icon, Col, Card, Row } from "antd";
const { Panel } = Collapse;


function RadioBox(props) {
    const renderRadioBox = () => (
        props.list && props.list.map((value) => (
            <Radio key = {value.id} value = {`${value.id}`}>{value.name}</Radio>
        ))
    )
    const [Value, setValue] = useState('0')
    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                    <Panel header = {props.title} key="1" >
                        <Radio.Group onChange = {handleChange} value ={Value}>
                            {renderRadioBox()} 
                        </Radio.Group>   
                    </Panel>
               </Collapse> 
        </div>
    )
}

export default RadioBox