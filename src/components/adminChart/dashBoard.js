import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Cell, Pie } from 'recharts';
import "../../style/dashBoard.css"
import { fetchData, fetchDataFaculty } from '../../service/userService';
import { useEffect, useState } from 'react';

const DashBoard = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

    const [listData, setListData] = useState([])
    const [perData, setPerData] = useState([])

    const getDataPost = async () => {
        try {
            let res = await fetchDataFaculty()
            let res2 = await fetchData()
            console.log(res2)
            if (res !== null && res2 !== null) {
                setListData(res)
                setPerData(res2);
                console.log("xnxx=>",perData)
            } else {
                console.error('No data received')
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getDataPost()
    }, [])

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Dashboard</h3>
            </div>

            {/* <div className='main-cards'>
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
            </div> */}

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
                            <XAxis dataKey="faculty.faculty_name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="totalPosts" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='chart-card'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                            <Pie
                                data={perData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="percentage"
                            >
                            {perData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </main>
    )
}

export default DashBoard