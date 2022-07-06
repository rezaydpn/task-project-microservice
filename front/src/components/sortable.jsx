import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import axios from 'axios';
const API_URL = 'http://localhost:3000/';

export default function Sortable() {
  const [state, setState] = useState([]);

  const tableData = (row, index) => (
    <tr style={{ cursor: 'move' }} key={row._id}>
      <td
        style={{
          padding: '5px',
          border: '1px solid gray',
          marginBottom: '10px',
          display: 'block',
        }}
      >
        {row.title}
      </td>
    </tr>
  );

  const handleClick = async () => {
    let newData = [];
    state.map((item, index) => {
      newData.push({
        _id: item._id,
        order: index,
      });
    });
    await updateOrderCity(newData);
  };

  const updateOrderCity = async (data) => {
    try {
      let _res = await axios.put(API_URL + 'city/update-many', data);
      console.log(_res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(API_URL + 'city');
      setState(data.data);
      console.log(data.data)
    };
    fetchData().catch((err) => console.log('error', err));
  }, []);

  return (
    <>
      <table>
        <ReactSortable
          swap
          tag="tbody"
          list={state}
          setList={setState}
          animation={300}
        >
          {state.map(tableData)}
        </ReactSortable>
      </table>
      <button onClick={handleClick}>Save Order</button>
    </>
  );
}
