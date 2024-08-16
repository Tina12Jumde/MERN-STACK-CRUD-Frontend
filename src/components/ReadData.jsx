//  import axios from 'axios';
//  import React, { useEffect, useState } from 'react';
//  import { deleteData } from './DeleteData.js';

// const ReadData = (props) => {
//   const [fetchedData, setFetchedData] = useState(null);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [editData, setEditData] = useState({}); // Initialize as an empty object

//   const fetchDataFromDatabase = async () => {
//     try {
//       let result = await axios.get('http://localhost:8885/fetchData');
//       setFetchedData(result.data.database);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const callFetchDataFunction = () => {
//     if (props.isload) {
//       fetchDataFromDatabase();
//     }
//   };

//   useEffect(() => {
//     fetchDataFromDatabase();
//   }, [props.isload]);

//   const DisplayDataRow = (data) => {
//     return (
//       <tr key={data._id}>
//         <td>{data.name}</td>
//         <td>{data.phone}</td>
//         <td>{data.email}</td>
//         <td>{data.city}</td>
//         <td>{data.pincode}</td>
//         <td>{data.address}</td>
//         <td>{data.dob}</td>
//         <td>{data.age}</td>
//         <td>
//           <button
//             className='btn btn-danger me-2'
//             onClick={() => {
//               deleteData(data.name, data._id);
//               callFetchDataFunction();
//             }}
//           >
//             Delete
//           </button>
//           <button
//             className='btn btn-primary'
//             onClick={() => {
//               setOpenEdit(true);
//               setEditData(data);
//             }}
//           >
//             Edit
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   const EditPopUp = () => {
//     if (!editData) return null; // Ensure editData is defined before rendering

//     return (
//       <div style={{ width: '450px' }} className='bg-dark position-absolute start-50 top-50 translate-middle text-light p-5'>
//         <h1>Edit Form</h1>
//         <div className='row flex-column gap-2 p-5'>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='text'
//               name='name'
//               value={editData.name || ''}
//               onChange={handleEditChange}
//               placeholder='Name'
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='number'
//               name='phone'
//               value={editData.phone || ''}
//               onChange={handleEditChange}
//               placeholder='Phone'
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='email'
//               name='email'
//               value={editData.email || ''}
//               onChange={handleEditChange}
//               placeholder='Email'
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='text'
//               name='address'
//               value={editData.address || ''}
//               onChange={handleEditChange}
//               placeholder='Address'
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='number'
//               name='pincode'
//               value={editData.pincode || ''}
//               onChange={handleEditChange}
//               placeholder='Pincode'
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='text'
//               name='city'
//               value={editData.city || ''}
//               onChange={handleEditChange}
//               placeholder='City'
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='date'
//               name='dob'
//               value={editData.dob || ''}
//               onChange={handleEditChange}
//             />
//           </div>
//           <div className='col'>
//             <input
//               className='form-control'
//               type='number'
//               name='age'
//               value={editData.age || ''}
//               onChange={handleEditChange}
//               placeholder='Age'
//             />
//           </div>
//           <div className='col d-flex gap-3'>
//             <button type='button' className='btn btn-success' onClick={() => setOpenEdit(false)}>
//               Save
//             </button>
//             <button type='button' className='btn btn-danger' onClick={() => setOpenEdit(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div style={{ maxHeight: '300px', overflowY: 'scroll' }} className='container'>
//         {fetchedData ? (
//           <table className='table table-border'>
//             <thead>
//               <tr className='table-dark'>
//                 <th>Name</th>
//                 <th>Phone</th>
//                 <th>Email</th>
//                 <th>City</th>
//                 <th>Pincode</th>
//                 <th>Address</th>
//                 <th>Dob</th>
//                 <th>Age</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>{fetchedData.map(DisplayDataRow)}</tbody>
//           </table>
//         ) : (
//           <h1>Unable to Get Data From Backend</h1>
//         )}
//       </div>

//       {openEdit && <EditPopUp />}
//     </>
//   );
// };

// export default ReadData;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import  {deleteData}  from "./DeleteData.js";

// const ReadData = (props) => {
//   let [FetchedData, SetFetchedData] = useState(null);

//   let [isEdit, setisEdit] = useState(false);

//   let [propsdata, setpropsData] = useState();

//   //let [updateData, setUpdateData] = useState();

//   let fetchDataFromDatabase = async () => {
//     try {
//       let result = await axios({
//         method: "get",
//         url: "http://localhost:8885/fetchData",
//       });

//       console.log(result.data.database);

//       SetFetchedData(result.data.database);
//     } catch (err) {
//       console.log("Unable to fetch data from database");
//     }
//   };

//   /*let callFetchDataFunction = () => {

//    alert("im from read data !")

//       if (props.isload) {
//           fetchDataFromDatabase();
//       }
//    }

//   useEffect(() => {
//        callFetchDataFunction();
//    }, [props.isload])*/

//   useEffect(() => {
//     fetchDataFromDatabase();
//   }, [props.isload]);

//   let DisplayDataRow = (props) => {
//     //let rawData = props;

//     return (
//       <tr className="" key={props._id}>
//         <td>{props.name}</td>
//         <td>{props.phone}</td>
//         <td>{props.email}</td>
//         <td>{props.city}</td>
//         <td>{props.pincode}</td>
//         <td>{props.address}</td>
//         <td>{props.dob}</td>
//         <td>{props.age}</td>
//         <td>
//           <button
//             className="btn btn-danger me-2"
//             onClick={() => {
//               deleteData(props.name, props._id);
//               // callFetchDataFunction()
//             }}
//           >
//             Delete
//           </button>
//           {/*<button
//             className="btn btn-primary"
//             onClick={() => {
//               SetOpenEdit(true);
//               setEditData(rawData);
//               setUpdateData(editData);
//             }}
//           >
//             Edit
//           </button>*/}

//           <button
//             className="btn btn-primary"
//             onClick={() => {
//               setisEdit(true);
//               setpropsData(props);
//             }}
//           >
//             Edit
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   let handleChange = (e) => {
//     let { name, value } = e.target;

//     setpropsData((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const handleSave = async () => {
//     await axios({
//       method: "PUT",
//       url: "http://localhost:8885/updateData",
//       data: propsdata,
//     });
//     console.log(propsdata);
//     setisEdit(false);
//   };

//   return (
//     <>
//       <div
//         style={{ maxHeight: "300px", maxWidth: "1200px" }}
//         className="container  overflow-scroll "
//       >
//         {FetchedData ? (
//           <table
//             style={{ maxHeight: "200px" }}
//             className="table table-border  "
//           >
//             <thead className="">
//               <tr className="table-dark">
//                 <th>name</th>
//                 <th>phone</th>
//                 <th>email</th>
//                 <th>city</th>
//                 <th>pincode</th>
//                 <th>address</th>
//                 <th>dob</th>
//                 <th>age</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>{FetchedData.map(DisplayDataRow)}</tbody>
//           </table>
//         ) : (
//           <h1>Unable to get data !</h1>
//         )}
//       </div>

//       {isEdit ? (
//         <div className="m-2 bg-dark p-2 w-50 position-absolute start-50 top-50 z-3 translate-middle-x bg-light text-center  text-dark  shadow-lg">
//           <h2 className="text-center text-light">Edit Form</h2>
//           <div className="p-3 gap-2 m-2">
//             <div className="row gap-2">
//               <div className="col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter Name"
//                   type="text"
//                   name="name"
//                   value={propsdata.name}
//                 />
//               </div>
//               <div className="col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter Phone"
//                   type="tel"
//                   name="phone"
//                   value={propsdata.phone}
//                 />
//               </div>
//               <div className=" col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter E-mail"
//                   type="email"
//                   name="email"
//                   value={propsdata.email}
//                 />
//               </div>

//               <div className="  col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter City"
//                   type="text"
//                   name="city"
//                   value={propsdata.city}
//                 />
//               </div>
//               <div className="  col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter Address"
//                   type="text"
//                   name="address"
//                   value={propsdata.address}
//                 />
//               </div>
//               <div className=" col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter pincode"
//                   type="number"
//                   name="pincode"
//                   value={propsdata.pincode}
//                 />
//               </div>

//               <div className="col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control"
//                   type="date"
//                   name="dob"
//                   value={propsdata.dob}
//                 />
//               </div>
//               <div className="col-12">
//                 <input
//                   required
//                   onChange={handleChange}
//                   className="form-control "
//                   id="birthDate"
//                   placeholder="Enter Age"
//                   type="number"
//                   value={propsdata.age}
//                   name="age"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="d-flex justify-content-center m-2 gap-3">
//             <button className="btn btn-success" onClick={handleSave}>
//               save
//             </button>
//             <button
//               className="btn btn-danger"
//               onClick={() => {
//                 setisEdit(false);
//               }}
//             >
//               cancel
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };
// export default ReadData;


import axios from "axios";
import React, { useEffect, useState } from "react";
import  {deleteData}  from "./DeleteData.js";

const ReadData = (props) => {
  let [FetchedData, SetFetchedData] = useState(null);

  let [isEdit, setisEdit] = useState(false);

  let [propsdata, setpropsData] = useState();

  //let [updateData, setUpdateData] = useState();

  let fetchDataFromDatabase = async () => {
    try {
      let result = await axios({
        method: "get",
        url: "http://localhost:8885/fetchData",
      });

      console.log(result.data.database);

      SetFetchedData(result.data.database);
    } catch (err) {
      console.log("Unable to fetch data from database");
    }
  };

  /*let callFetchDataFunction = () => {

   alert("im from read data !")

      if (props.isload) {
          fetchDataFromDatabase();
      }
   }

  useEffect(() => {
       callFetchDataFunction();
   }, [props.isload])*/

  useEffect(() => {
    fetchDataFromDatabase();
  }, [props.isload]);

  let DisplayDataRow = (props) => {
    //let rawData = props;

    return (
      <tr className="" key={props._id}>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.city}</td>
        <td>{props.pincode}</td>
        <td>{props.address}</td>
        <td>{props.dob}</td>
        <td>{props.age}</td>
        <td>
          <button
            className="btn btn-danger me-2"
            onClick={() => {
              deleteData(props.name, props._id);
              // callFetchDataFunction()
            }}
          >
            Delete
          </button>
          {/*<button
            className="btn btn-primary"
            onClick={() => {
              SetOpenEdit(true);
              setEditData(rawData);
              setUpdateData(editData);
            }}
          >
            Edit
          </button>*/}

          <button
            className="btn btn-primary"
            onClick={() => {
              setisEdit(true);
              setpropsData(props);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  };

  let handleChange = (e) => {
    let { name, value } = e.target;

    setpropsData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSave = async () => {
    await axios({
      method: "PUT",
      url: "http://localhost:8885/updateData",
      data: propsdata,
    });
    console.log(propsdata);
    setisEdit(false);
  };

  return (
    <>
      <div
        style={{ maxHeight: "300px", maxWidth: "1200px" }}
        className="container  overflow-scroll "
      >
        {FetchedData ? (
          <table
            style={{ maxHeight: "200px" }}
            className="table table-border  "
          >
            <thead className="">
              <tr className="table-dark">
                <th>name</th>
                <th>phone</th>
                <th>email</th>
                <th>city</th>
                <th>pincode</th>
                <th>address</th>
                <th>dob</th>
                <th>age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>{FetchedData.map(DisplayDataRow)}</tbody>
          </table>
        ) : (
          <h1>Unable to get data !</h1>
        )}
      </div>

      {isEdit ? (
        <div className="m-2 bg-dark p-2 w-50 position-absolute start-50 top-50 z-3 translate-middle-x bg-light text-center  text-dark  shadow-lg">
          <h2 className="text-center text-light">Edit Form</h2>
          <div className="p-3 gap-2 m-2">
            <div className="row gap-2">
              <div className="col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Name"
                  type="text"
                  name="name"
                  value={propsdata.name}
                />
              </div>
              <div className="col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Phone"
                  type="tel"
                  name="phone"
                  value={propsdata.phone}
                />
              </div>
              <div className=" col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter E-mail"
                  type="email"
                  name="email"
                  value={propsdata.email}
                />
              </div>

              <div className="  col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter City"
                  type="text"
                  name="city"
                  value={propsdata.city}
                />
              </div>
              <div className="  col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Address"
                  type="text"
                  name="address"
                  value={propsdata.address}
                />
              </div>
              <div className=" col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter pincode"
                  type="number"
                  name="pincode"
                  value={propsdata.pincode}
                />
              </div>

              <div className="col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control"
                  type="date"
                  name="dob"
                  value={propsdata.dob}
                />
              </div>
              <div className="col-12">
                <input
                  required
                  onChange={handleChange}
                  className="form-control "
                  id="birthDate"
                  placeholder="Enter Age"
                  type="number"
                  value={propsdata.age}
                  name="age"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center m-2 gap-3">
            <button className="btn btn-success" onClick={handleSave}>
              save
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                setisEdit(false);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ReadData;