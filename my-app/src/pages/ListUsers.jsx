import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


function ListUsers() {

    const[userTable, setName] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setName(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return(
        <div>
            <div>
                {userTable.map(user => (
                    <Card key={user.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>{user.email}</Card.Text>
                            <Button variant="primary" style={{backgroundColor: "seagreen"}}>View Details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ListUsers;