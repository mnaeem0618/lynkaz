import parse from "html-react-parser";

export function cmsFileUrl(src, folder = "images") {
  return `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}uploads/${folder}/${src}`;
}
export function doParseHTML(string) {
  return parse(string);
}

export function getFileExtension(file_name) {
  let fileName = file_name;
  let extension = fileName.split(".").pop();
  return extension;
}
export function doObjToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (let [keyv, value] of Object.entries(obj[key])) {
        formData.append(key + "[]", JSON.stringify(value));
      }
    } else {
      if (typeof obj[key] == "object") {
        formData.append(key, JSON.stringify(obj[key]));
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
}
