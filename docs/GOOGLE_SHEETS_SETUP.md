# Design partner form → Google Sheets

Form submissions are sent to your Vercel API, which forwards them to a **Google Apps Script** web app that appends a row to a Google Sheet.

## 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet (e.g. "OM Design partner applications").
2. In the first row, add these **headers** (exactly):

   | Timestamp | First name | Last name | Company | Email | Stage | GTM tools | Message |

3. Leave the sheet open; you’ll link the script to it next.

## 2. Add the Apps Script

1. In the sheet: **Extensions** → **Apps Script**.
2. Delete the default `function myFunction() { }` and paste in the **entire contents** of **`docs/DesignPartnerForm.gs`** from this repo (or copy the code below).
3. Save (Ctrl/Cmd + S) and give the project a name (e.g. "Design partner form handler").

**Copy from `docs/DesignPartnerForm.gs`**, or use this:

```javascript
function myFunction() {
  // Not used. The web app runs doPost() when the form submits.
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var row = [
      new Date(),
      data.first_name || '',
      data.last_name || '',
      data.company || '',
      data.email || '',
      data.stage || '',
      data.gtm_tools || '',
      data.message || ''
    ];
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: err.toString() })
    )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy as web app

1. In Apps Script: **Deploy** → **New deployment**.
2. Click the gear next to "Select type" → **Web app**.
3. Set:
   - **Description:** e.g. "Design partner form"
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**, authorize the app when prompted, then copy the **Web app URL** (looks like `https://script.google.com/macros/s/.../exec`).

## 4. Configure Vercel

1. In [Vercel](https://vercel.com): your project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `GOOGLE_SHEETS_WEB_APP_URL`
   - **Value:** the Web app URL you copied (e.g. `https://script.google.com/macros/s/xxxx/exec`)
3. Redeploy the project so the new variable is used.

After this, each form submission will add a new row in your sheet with timestamp and all form fields. You can use the sheet for review and later for automated emails (e.g. with Zapier, Make, or Google Workspace).

**Note:** The form submits to `/api/submit-design-partner`, which is only available when deployed on Vercel (or when you run `vercel dev` locally). It will not work with plain `npm run dev` unless you add a proxy.
