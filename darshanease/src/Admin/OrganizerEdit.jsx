import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Anavbar from './Anavbar';


const OrganizerEdit = ({ match }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        // Add more fields as needed
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/organizer/organizer/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:7000/organizer/organizeredit/${id}`, user);
            alert('User updated successfully');
            navigate('/organizers');
            console.log("Updated successfully");
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };
    

    return (
        <div>
            <Anavbar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="mt-8 p-4 border rounded shadow-lg rounded-lg shadow-md" style={{
                    width: "35%",
                    background: "linear-gradient(to left, #009696, #4CAF57)" // Change these colors to your desired gradient
                }}>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Update User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4" style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <label className="block text-black-900 text-center" >User Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='User Name'
                                    value={user.name}
                                    onChange={handleChange}
                                    className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    style={{ width: "280px" }}
                                />
                            </div>
                        </div>

                        <div className="mb-4" style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <label className="block text-black-900 text-center" >Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    value={user.email}
                                    onChange={handleChange}
                                    className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    style={{ width: "280px" }}
                                />
                            </div>
                        </div>
                        <div className="mb-4" style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <label className="block text-black-900 text-center" >Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder='password'
                                    value={user.password}
                                    onChange={handleChange}
                                    className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    style={{ width: "280px" }}
                                />
                            </div>
                        </div>





                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button
                                type="submit"
                                className="bg-blue-900 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrganizerEdit;
