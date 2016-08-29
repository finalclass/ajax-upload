function ajaxUpload({
  files = [],
  url = '',
  data = {},
  method = 'POST',
  onError = ()=>undefined,
  onProgress = ()=>undefined,
  onSuccess = ()=>undefined,
  filesFieldName = 'files',
  arrayKey = '[]'
  }) {

  var xhr = new XMLHttpRequest();
  var formData = new FormData();

  for (let i = 0; i < files.length; i += 1) {
    let file = files[i];
    formData.append(`${filesFieldName}${arrayKey}`, file, file.name);
  }

  Object.keys(data || {}).forEach(function (key) {
    formData.append(key, data[key])
  });

  xhr.open(method, url, true);
  if (xhr.upload) {
    xhr.upload.onprogress = onProgress;
  }

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      onSuccess(xhr.responseBody || JSON.parse(xhr.responseText), xhr);
    } else {
      onError(new Error(xhr.responseBody));
    }
  };

  xhr.send(formData);
}
