Great! Integrating form data submission from a React app hosted on Vercel to Google Sheets involves a few steps. Here's a guide to help you get started:

### Step 1: Set Up Your React Form
First, create a form in your React app. Here's an example:

```jsx
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add code to send data to Google Sheets
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
```

### Step 2: Create Google Sheets and App Script
1. Open Google Sheets and create a new sheet.
2. Go to **Extensions** > **Apps Script**.
3. Delete any default code and replace it with the following script:

```javascript
var sheetName = 'Sheet1';
var scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    var sheet = doc.getSheetByName(sheetName);
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    var newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header];
    });
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow })).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': e })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

### Step 3: Deploy the App Script as a Web App
1. Save the script.
2. Click on the **Deploy** button.
3. Under **Deployment type**, select **Web app**.
4. Set the **Who has access to the app** to **Anyone, even anonymous**.
5. Click **Deploy**.

### Step 4: Send Data from React to Google Sheets
Add code to your React form's `handleSubmit` function to send the form data to the deployed script:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const formDataString = JSON.stringify(formData);
  const response = await fetch('YOUR_DEPLOYED_SCRIPT_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataString
  });
  const result = await response.json();
  console.log(result);
};
```

Replace `'YOUR_DEPLOYED_SCRIPT_URL'` with the URL provided after deploying the script.

### Step 5: Test Your Form
Now, test your form to ensure that the data is correctly sent to Google Sheets.

Would you like more details on any of these steps?
