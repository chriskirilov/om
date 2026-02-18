/**
 * OM Design Partner form → Google Sheet
 * Paste this entire file into Apps Script (Extensions → Apps Script).
 * Deploy as Web app (Execute as: Me, Who has access: Anyone).
 */

function myFunction() {
  // Not used. The web app runs doGet/doPost.
}

function doGet(e) {
  // Opening the URL in a browser sends GET; return a simple message so the app loads (and stays authorized).
  return ContentService.createTextOutput(JSON.stringify({ ok: true, message: 'Form submissions use POST.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Support both form-encoded (e.parameter.data) and JSON body (e.postData.contents)
    var jsonStr = null;
    if (e && e.parameter && e.parameter.data) {
      jsonStr = e.parameter.data;
    } else if (e && e.postData && e.postData.contents) {
      jsonStr = e.postData.contents;
    }
    if (!jsonStr) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'No request body' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(jsonStr);

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
