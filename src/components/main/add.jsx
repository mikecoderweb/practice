// // AddUser.jsx
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { Modal, Button } from 'antd';
// import { useAddMutation } from '../../redux/slice/user';

// const AddUser = () => {
//   const [open, setOpen] = useState(false);
//   const addUserMutation = useAddMutation();

//   const [inputValue, setInputValue] = useState({
//     username: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//   });

//   const handleSubmit = async () => {
//     try {
//       const { data } = await addUserMutation.mutateAsync(inputValue);
//       toast.success(`User ${data.first_name} ${data.last_name} added successfully`);
//       setInputValue({
//         username: '',
//         first_name: '',
//         last_name: '',
//         email: '',
//         phone: '',
//       });
//       setOpen(false);
//     } catch (error) {
//       toast.error(`Failed to add user: ${error.message}`);
//     }
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={() => setOpen(true)}>
//         Add User
//       </Button>
//       <Modal
//         title="Add User"
//         visible={open}
//         onCancel={() => setOpen(false)}
//         footer={[
//           <Button key="cancel" onClick={() => setOpen(false)}>
//             Cancel
//           </Button>,
//           <Button key="submit" type="primary" onClick={handleSubmit}>
//             Add
//           </Button>,
//         ]}
//       >
//           <div className="flex flex-col gap-3">
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={inputValue.username}
//               onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })}
//               className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5"
//             />
//           </div>
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               value={inputValue.first_name}
//               onChange={(e) => setInputValue({ ...inputValue, first_name: e.target.value })}
//               className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5"
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               value={inputValue.last_name}
//               onChange={(e) => setInputValue({ ...inputValue, last_name: e.target.value })}
//               className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5"
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={inputValue.email}
//               onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
//               className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5"
//             />
//           </div>
//           <div>
//             <label>Phone:</label>
//             <input
//               type="text"
//               value={inputValue.phone}
//               onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })}
//               className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5"
//             />
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default AddUser;

import React, { useState } from "react";
import { toast } from "react-toastify";
import {  Button, Modal } from "antd";
import { useCreateTable2Mutation } from "../../redux/slice/user";

const AddCategories = () => {
  const [open, setOpen] = useState(false);
  const [createCategoria, { isLoading: isCreating }] = useCreateTable2Mutation();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", inputValue.username);
      formData.append("password", inputValue.password);
      formData.append("first_name", inputValue.first_name);
      formData.append("last_name", inputValue.last_name);
      formData.append("email", inputValue.email);
      formData.append("phone", inputValue.phone);
  
      const response = await createCategoria(formData).unwrap();
      toast.success(`Category ${response.username} added successfully`);
      setInputValue({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      });
      setOpen(false);
    } catch (error) {
      if (error.data && error.data.username && error.data.username.includes("A user with that username already exists.")) {
        toast.error("Username already exists. Please choose a different username.");
      } else {
        toast.error(`Failed to add category: ${error.message}`);
      }
    }
  };
  
  

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        + Odam qo'shish
      </Button>
      <Modal
        title="Add Category"
        visible={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={isCreating} onClick={handleSubmit}>
            Add
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-3">
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={inputValue.username}
              onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={inputValue.password}
              onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={inputValue.first_name}
              onChange={(e) => setInputValue({ ...inputValue, first_name: e.target.value })}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={inputValue.last_name}
              onChange={(e) => setInputValue({ ...inputValue, last_name: e.target.value })}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={inputValue.email}
              onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              value={inputValue.phone}
              onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCategories;