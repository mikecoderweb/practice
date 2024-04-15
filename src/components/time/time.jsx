import React from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
const format = 'HH:mm';
const Time = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default Time;