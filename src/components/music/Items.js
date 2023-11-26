import React from 'react';
import { useContext } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import CartContext from '../../store/cart-context';



const Items = () => {
    const productsArr = [
        {   
            id: "1",
            name: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        
        {
            id: "2",
            name: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        
        {
            id: "3",
            name: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        
        {
            id: "4",
            name: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        
    ]

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (index) => {    
        cartCtx.addItem({
            id: productsArr[index].id,
            name: productsArr[index].name,
            price: productsArr[index].price
        });
    };

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {productsArr.map((item, index) => (
                <Col key={index} style={{ margin: '100px' }}>
                    <Card>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Price Rs: {item.price}</Card.Text>
                            <Button onClick={() => addToCartHandler(index)} variant="primary">ADD</Button>                        
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
};

export default Items;