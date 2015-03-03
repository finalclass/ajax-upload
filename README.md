Ajax Uploader
=============

Ajax file uploader (ES6)

function ajaxUpload({
  files = [],
  url = '',
  data = {},
  method = 'POST',
  onError = ()=>undefined,
  onProgress = ()=>undefined,
  onSuccess = ()=>undefined,
  filesFieldName = 'files'
  }) {
  ...
}
