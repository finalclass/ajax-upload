export default function ajaxUpload({
  files = [],
  url = '',
  data = {},
  method = 'POST',
  onError = ()=>undefined,
  onProgress = ()=>undefined,
  onSuccess = ()=>undefined,
  filesFieldName = 'files'
  }) {

  files = Array.isArray(files) ? files : [files];

  var xhr = new XMLHttpRequest();
  var formData = new FormData();

  files.forEach(function (file) {
    formData.append(filesFieldName + '[]', file, file.name);
  });
  Object.keys(data || {}).forEach(function (key) {
    formData.append(key, data[key])
  });

  xhr.open(method, url, true);
  if (xhr.upload) {
    xhr.upload.onprogress = onProgress;
  }

  xhr.onload = function () {
    ajaxing(-1);
    if (xhr.status >= 200 && xhr.status <= 400) {
      onSuccess(xhr.responseBody || JSON.parse(xhr.responseText), xhr);
    } else {
      onError(new Error(xhr.responseBody));
    }
  };

  xhr.send(formData);
}
