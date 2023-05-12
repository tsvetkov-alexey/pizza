import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string;
        title: string;
        price: number;
    }>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(
                    'https://6419f3b2c152063412d0094e.mockapi.io/items/' + id,
                );
                setPizza(data);
            } catch (error) {
                alert('Ошибка при получении пиццы');
                navigate('/');
            }
        }

        fetchPizza();
    }, []);

    if (!pizza) {
        return <h2>Загрузка...</h2>;
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, maxime sed
                quaerat quod nobis doloremque quis sunt ipsum soluta quae.
            </p>
            <h4>{pizza.price} Р</h4>
        </div>
    );
};

export default FullPizza;
