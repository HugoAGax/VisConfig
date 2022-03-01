class FileSave {
  download (content, fileName, contentType) {
    let a = document.createElement("a");
    let file = new Blob([content], {
      type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}

export default FileSave;
// download(jsonData, 'json.txt', 'text/plain');