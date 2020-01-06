export default function parseApiErrorsToFormik(errors) {
  let result = {};

  for (let key in errors) {
    result[key] = errors[key][0];
  }
  
  return result;
}