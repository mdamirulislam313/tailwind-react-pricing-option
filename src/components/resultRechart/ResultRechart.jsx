import { Fullscreen } from 'lucide-react';
import React from 'react';
import {  Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ResultData = [
  {
    "id": 1,
    "name": "Aminul Haque",
    "physics": 78,
    "chemistry": 82,
    "math": 91
  },
  {
    "id": 2,
    "name": "Farhana Akter",
    "physics": 65,
    "chemistry": 74,
    "math": 80
  },
  {
    "id": 3,
    "name": "Sazzad Hossain",
    "physics": 89,
    "chemistry": 90,
    "math": 94
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "physics": 55,
    "chemistry": 60,
    "math": 58
  },
  {
    "id": 5,
    "name": "Imran Kabir",
    "physics": 72,
    "chemistry": 68,
    "math": 75
  },
  {
    "id": 6,
    "name": "Sharmin Sultana",
    "physics": 95,
    "chemistry": 92,
    "math": 98
  },
  {
    "id": 7,
    "name": "Tanvir Ahmed",
    "physics": 81,
    "chemistry": 77,
    "math": 84
  },
  {
    "id": 8,
    "name": "Rokeya Begum",
    "physics": 60,
    "chemistry": 65,
    "math": 70
  },
  {
    "id": 9,
    "name": "Mahmudul Hasan",
    "physics": 87,
    "chemistry": 85,
    "math": 90
  },
  {
    "id": 10,
    "name": "Sumaiya Rahman",
    "physics": 74,
    "chemistry": 79,
    "math": 83
  }
]



const ResultRechart = () => {
    return (
        <div>
            <LineChart width={400} height={400} data={ResultData}>
            <XAxis dataKey={`name`}></XAxis>
            <YAxis></YAxis>
            <Tooltip labelClassName='text-black'></Tooltip>
           
            <Line dataKey={`physics`} stroke='red'></Line>
            <Line dataKey="math"></Line>
            <Line dataKey={`chemistry`} stroke='blue'></Line>
            </LineChart>
        </div>
    );
};

export default ResultRechart;