import { fetchSearchProductList } from '@/service/products';
import { ProductsResponse } from '@/types/apiResponse';
import { FilterProductType } from '@/types/products';
import React, { useState } from 'react';

interface ProductFilterProps {
    setProducts: (products: any) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ setProducts }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSearch = () => {
        setProducts(null);
        const filter: FilterProductType = { name, description, price };
        fetchSearchProductList(filter).then((apiResponse: ProductsResponse) => {
            setProducts(apiResponse?.content);
        });
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                className="border border-gray-300 rounded-md p-1 m-1"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
                className="border border-gray-300 rounded-md p-1 m-1"
            />
            <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Preço"
                className="border border-gray-300 rounded-md p-1 m-1"
            />
            <button onClick={handleSearch} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Pesquisar</button>
        </div>
    );
};

export default ProductFilter;
