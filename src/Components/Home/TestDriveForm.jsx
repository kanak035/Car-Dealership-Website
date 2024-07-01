import React from 'react';
import './TestDriveForm.scss';

const TestDriveForm = () => {
  return (
    <div className="formContainer">
      <h2>Test Drive Form</h2>
      <form>
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" />
        </label>
        <label>
          Preferred Date:
          <input type="date" name="date" />
        </label>
        <label>
          Preferred Time:
          <input type="time" name="time" />
        </label>
        <label>
          Address:
          <textarea name="address"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestDriveForm;
