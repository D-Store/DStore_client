export default function (obj1: Object, obj2: Object) {
  const isSame = JSON.stringify(obj1) === JSON.stringify(obj2);

  if (isSame) {
    return true;
  } else {
    return false;
  }
}
