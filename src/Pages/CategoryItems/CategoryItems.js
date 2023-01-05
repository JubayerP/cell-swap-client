import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryItems = () => {
    const phones = useLoaderData();
    return (
        <div>
            <div>
                {
                    phones.map(phone => )
                }
            </div>
        </div>
    );
};

export default CategoryItems;