"use strict";

function ajaxUpload(_ref) {
  var _ref$files = _ref.files;
  var files = _ref$files === undefined ? [] : _ref$files;
  var _ref$url = _ref.url;
  var url = _ref$url === undefined ? "" : _ref$url;
  var _ref$data = _ref.data;
  var data = _ref$data === undefined ? {} : _ref$data;
  var _ref$method = _ref.method;
  var method = _ref$method === undefined ? "POST" : _ref$method;
  var _ref$onError = _ref.onError;
  var onError = _ref$onError === undefined ? function () {
    return undefined;
  } : _ref$onError;
  var _ref$onProgress = _ref.onProgress;
  var onProgress = _ref$onProgress === undefined ? function () {
    return undefined;
  } : _ref$onProgress;
  var _ref$onSuccess = _ref.onSuccess;
  var onSuccess = _ref$onSuccess === undefined ? function () {
    return undefined;
  } : _ref$onSuccess;
  var _ref$filesFieldName = _ref.filesFieldName;
  var filesFieldName = _ref$filesFieldName === undefined ? "files" : _ref$filesFieldName;
  var _ref$arrayKey = _ref.arrayKey;
  var arrayKey = _ref$arrayKey === undefined ? "[]" : _ref$arrayKey;

  var xhr = new XMLHttpRequest();
  var formData = new FormData();

  for (var i = 0; i < files.length; i += 1) {
    var file = files[i];
    formData.append("" + filesFieldName + "" + arrayKey, file, file.name);
  }

  Object.keys(data || {}).forEach(function (key) {
    formData.append(key, data[key]);
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
//# sourceMappingURL=index.js.map