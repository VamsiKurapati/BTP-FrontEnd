import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import axios from "axios";
import './App.css'; 

const App = () => {
  const [dataList, setDataList] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:5000/getdata")
      .then((resp) => {
        setDataList([resp.data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const fetchDataInterval = setInterval(fetchData, 10000);
    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <div>
      <h1 className="bordered-text">Solar Power Monitoring</h1>
      <DataTable dataList={dataList} />
    </div>
  );
};

export default App;