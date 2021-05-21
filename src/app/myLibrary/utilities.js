export function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}

export function filterArrayBySearchTerm(myArray, searchTerm) {
  searchTerm = removeAccents(searchTerm).toUpperCase().trim();
  let res = [];
  for (let index = 0; index < myArray.length; index++) {
    let element = myArray[index];
    for (var key in element) {
      let value = removeAccents(element[key].toString().toUpperCase());
      if (value.includes(searchTerm)) {
        res.push(element);
        break;
      }
    }
  }
  return res;
}

export function convertDateTime(myDate) {
  // date to dd/mm/yyyy
  let date = new Date(myDate);
  console.log(date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const output = day + "/" + month + "/" + year;
  return output;
}

export function isDateEqual(a, b) {
  let day1 = new Date(a);
  let day2 = new Date(b);
  console.log(day1.getFullYear(), day1.getMonth(), day1.getDate());
  console.log(day2.getFullYear(), day2.getMonth(), day2.getDate());
  if (day1.getFullYear() !== day2.getFullYear()) return false;
  if (day1.getMonth() !== day2.getMonth()) return false;
  if (day1.getDate() !== day2.getDate()) return false;

  return true;
}
