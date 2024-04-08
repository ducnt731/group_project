import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Cell, Pie } from 'recharts';
import "../../style/dashBoard.css"
import { fetchDataFaculty } from '../../service/userService';
import { useEffect, useState } from 'react';

const DashBoard = () => {

    const [listData, setListData] = useState([])

    const getDataPost = async () => {
        try {
            const res = await fetchDataFaculty()
            const data = res.data
            setListData(data)
            console.log(">>>> data", res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getDataPost()
    }, [])

    const data = [];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Dashboard</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Earning(Monthly)</h4>
                        <i className="card_icon fa-solid fa-money-bill-wave"></i>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Earning(Week)</h4>
                        <i className="card_icon fa-solid fa-money-bill-wave"></i>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Total tickets sold</h4>
                        <i className="card_icon fa-solid fa-ticket"></i>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Total number of canceled tickets</h4>
                        <i className="card_icon fa-solid fa-ticket"></i>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <div className='chart-card'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={listData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='chart-card'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={listData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                {/* <div className='chart-card'>

                </div> */}
            </div>
        </main>
    )
}

export default DashBoard