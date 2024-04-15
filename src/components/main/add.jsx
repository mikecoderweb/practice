import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateTable2Mutation } from "../../redux";

const UserAddCom = () => {
  const [createUser] = useCreateTable2Mutation();

  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const adData = async () => {
    try {
      await createUser(userInfo).unwrap();
      toast.success("User successfully added");
      setModal(false);
      setUserInfo({
        first_name: "",
      });
    } catch (error) {
      toast.error(
        `Error adding user: ${error.data?.error || "Please try again"}`
      );
    }
  };

  return (
    <div>
      <button onClick={() => setModal(true)}>+Добавить пациента</button>
      {modal && (
        <div className="fixed top-0 left-[600px] right-0 bottom-0 p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Добавить пациента
              </h3>
              <button
                onClick={() => setModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <span className="sr-only">Close modal</span>X
              </button>
            </div>
            <p className="text-xs">
              Выберите день и время в будущем, когда вы хотите встретить
              пациента
            </p>
            <div className="p-8 md:p-10">
              <div className="grid gap-8 mb-10 grid-cols-2">
                <div className="col-span-2 text-start">
                  <label
                    htmlFor="website-admin"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Имя
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <svg
                        className="w-4 h-4  text-gray-500  dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Имя...."
                    />
                  </div>
                </div>
                <div className="flex gap-5 text-start">
                  <div className="col-span-1">
                    <label htmlFor="date">Дата </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={userInfo.date}
                      onChange={handleInputChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Дата"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="time">Время</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={userInfo.time}
                      onChange={handleInputChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Время"
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start">
                  <label htmlFor="diagnosis">Диагноз</label>
                  <input
                    type="text"
                    id="diagnosis"
                    name="diagnosis"
                    value={userInfo.diagnosis}
                    onChange={handleInputChange}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Диагноз"
                    required
                  />
                </div>
                <div className="col-span-2 text-start">
                  <label htmlFor="treatment">Лечение</label>
                  <input
                    type="text"
                    id="treatment"
                    name="treatment"
                    value={userInfo.treatment}
                    onChange={handleInputChange}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Лечение"
                    required
                  />
                </div>
                <div className="col-span-2 text-start">
                  <label htmlFor="amount">Сумма</label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={userInfo.amount}
                    onChange={handleInputChange}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Сумма"
                    required
                  />
                </div>
              </div>
              <button
                onClick={adData}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddCom;
