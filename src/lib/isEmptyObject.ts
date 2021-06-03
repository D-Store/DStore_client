function isEmptyObject(obj: Object) {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

export default isEmptyObject;
