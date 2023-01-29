import React from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'
import { createRoot } from 'react-dom/client';

import {
    DatePicker,
    DatePickerProvider,
    useDatePickGetter,
    useDatePickReset,
} from '@bcad1591/react-date-picker';

const container = document.getElementById('root');
const root = createRoot(container);

function Picker() {

    const { pickedDates } = useDatePickGetter();

    const resetFunc = useDatePickReset();

    return (
        <div>
            <DatePicker disablePreviousDays />
            <hr />
            <div>{pickedDates.firstPickedDate?.toString()}</div>
            <div>{pickedDates.secondPickedDate?.toString()}</div>
            <button type="button" onClick={resetFunc}>
                Reset
            </button>
        </div>
    );
}

root.render(
    <DatePickerProvider>
        <App />
    </DatePickerProvider>,
);

export default Picker
