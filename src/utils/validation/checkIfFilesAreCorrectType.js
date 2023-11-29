// validation file type
export function checkIfFilesAreCorrectType(file) {
  let valid = true;
  if (file) {
    if (!['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type)) {
      valid = false;
    }
  }
  return valid;
}
