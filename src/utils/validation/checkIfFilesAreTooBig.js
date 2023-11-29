// validation file size
export function checkIfFilesAreTooBig(file) {
  let valid = true;
  if (file) {
    const size = file.size / Math.pow(1024, 5);
    if (size > 5) {
      valid = false;
    }
  }
  return valid;
}
