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

**Copy from `docs/DesignPartnerForm.gs`** (recommended), or use the code below.  
**Important:** Do **not** copy the word `javascript` — that is only a markdown label. Paste only the code starting with `function myFunction`.

```javascript
function myFunction() {
  // Not used. The web app runs doPost() when the form submits.
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'No request body' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
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
    ).setMimeType(ContentService.MimeType.JSON);
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

---

## Troubleshooting (data not recording)

1. **Script must be bound to the sheet**  
   Open the **Google Sheet** where you want rows to appear, then use **Extensions → Apps Script**. If you created the script from a different place, the “active” spreadsheet may be wrong. Create a new sheet, add the header row, then **Extensions → Apps Script** and paste the script there. Redeploy and use the **new** web app URL in Vercel.

2. **Use the correct web app URL**  
   The URL must be the **deployed** web app URL and must end with **`/exec`**. Do **not** use the **/dev** URL from the editor. Copy the URL from **Deploy → Manage deployments** (the “Web app” URL).

3. **Environment variable on Vercel**  
   In Vercel: Project → **Settings → Environment Variables**. Set `GOOGLE_SHEETS_WEB_APP_URL` to that full **/exec** URL. After changing it, **redeploy** the project (Deployments → ⋮ on latest → Redeploy).

4. **Redeploy the Apps Script after editing**  
   In Apps Script: **Deploy → Manage deployments** → pencil icon on the deployment → **Version: New version** → Deploy. The URL stays the same; no need to change Vercel.

5. **See what Google returned**  
   If the form shows “Failed to save submission”, the error text now includes what the API got from Google (e.g. “Google returned 404” or “Script error: …”). Use that to see if the URL is wrong (404), access is denied (403), or the script threw an error.

6. **Check Vercel function logs**  
   After submitting the form, open Vercel → Project → **Logs** (or **Functions** → select `submit-design-partner`). Look for errors (e.g. 502, “Google Apps Script error”). That will show whether the failure is in the API or in the script.

7. **Test the script manually**  
   In Apps Script, run this once (Run → Run function → `testAppend`). It adds a test row so you can confirm the sheet and script work:
   ```javascript
   function testAppend() {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     sheet.appendRow([new Date(), 'Test', 'User', 'Test Co', 'test@test.com', 'Pre-revenue', '', 'Test message']);
   }
   ```
   If that fails, the script isn’t bound to the right sheet or permissions are wrong.
