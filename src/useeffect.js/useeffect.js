import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;


export default function EffectUse() {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount (count - 1);
    };

    useEffect(() => {
        if (count >0) {
            alert(`Success`);
        }
    }, [count]);

    return (
        <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
            <Card hoverable style={{display: 'inline-block', width:325, margin:'0px'}} 
            cover={<img alt="gambar1" height="310px" src="https://res.cloudinary.com/dcyoxgegc/image/upload/v1632023743/album_aalljo.jpg" />}>
            <Meta title="Exo Album Obsession" description="IDR 700.000" />
            <div>
            <Button type="primary" shape="square" style={{margin:'15px 25px 0px 25px'}} onClick={countUp}>
                Buy
            </Button>
            </div>
            <div>
            <Button type="danger" shape="square" style={{margin:'15px 25px 0px 25px'}} onClick={countDown}>
                Delete
            </Button>
            </div>
            <div style={{margin:'10px', fontSize: '20px'}}>
            <Text>Total cart : {count}</Text>
            </div>
            </Card>
        </div>
    );
}