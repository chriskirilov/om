/**
 * OM Design Partner form → Google Sheet
 * Paste this entire file into Apps Script (Extensions → Apps Script).
 * Deploy as Web app (Execute as: Me, Who has access: Anyone).
 */

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
    )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
