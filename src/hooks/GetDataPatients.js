import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetDataPatients() {
  const api = axios.create({
    baseURL: 'https://retoolapi.dev/AqetsK/',
  });
  api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const [dataPatients, setDataPatients] = useState([]);
  useEffect(() => {
    api.get('/data')
      .then(res => {
        // console.log(res.data, 'res.data')
        setDataPatients(res.data)
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }, [api]);
  
  return { dataPatients };
}