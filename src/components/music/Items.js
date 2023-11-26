import Item from './Item';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';



const Items = () => {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        
    ]

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {productsArr.map((item, index) => (
                <Col key={index} style={{ margin: '100px' }}>
                    <Card>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>Price: Rs: {item.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
};

export default Items;