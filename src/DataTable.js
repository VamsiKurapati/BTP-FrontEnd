import React from 'react';
import pic1 from './icons8-thermometer-up.gif'
import pic2 from './icons8-speed.gif'
import pic3 from './icons8-voltmeter-55.png'
import pic4 from './icons8-voltmeter-48.png'

const DataCard = ({ data, index }) => {
  return (
    <>
    <h3>Data Set {index + 1}</h3>

    <div className="data-card" key={index}>
      <div className="grid-container">
        <div className="data-box1">
          <center>
          <img src= {pic1} alt="Temperature"  /></center>
          <div className="data-item">
            <strong>Temperature:</strong> {data["sensor_value"]} °C
          </div>
        </div>
        <div className="data-box">
          <center><img src = {pic2} alt="Intensity" />
          <div className="data-item">
            <strong>Intensity:</strong> {data.Intensity}
          </div></center>
        </div>
        <div className="data-box">
        <center><img src= {pic3} alt="Voltage R1" />
          <div className="data-item">
            <strong>Voltage 1:</strong> {data["Voltage R1"]} V
          </div></center>
        </div>
        <div className="data-box">
        <center><img src= {pic3} alt="Voltage R2" />
          <div className="data-item">
            <strong>Voltage 2:</strong> {data["Voltage R2"]} V
          </div></center>
        </div>
        <div className="data-box">
        <center><img src= {pic4} alt="Voltage C1" />
          <div className="data-item">
            <strong>Voltage 3:</strong> {data["Voltage C1"]} V
          </div></center>
        </div>
        <div className="data-box">
        <center><img src= {pic4} alt="Voltage C2" />
          <div className="data-item">
            <strong>Voltage 4:</strong> {data["Voltage C2"]}  V
          </div></center>
        </div>
      </div>
    </div>
    </>
  );
};

const DataTable = ({ dataList }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <DataCard data={data} index={index} />
      ))}
    </div>
  );
};

export default DataTable;
