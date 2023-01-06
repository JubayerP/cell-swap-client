import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';


const MyProducts = () => {
    const { user } = useContext(AuthContext);


    const { data: myPhones, isLoading } = useQuery({
        queryKey: ['myPhones', user?.email],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/myPhones?email=${user?.email}`);
            const data = await res.data;
            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }
    console.log(myPhones);

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-800">My Products</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">No</th>
                                <th className="p-3">Product Name</th>
                                <th className="p-3">Advertise</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-400">Tuesday</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;