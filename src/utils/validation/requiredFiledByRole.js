export const requiredFiledByRole = (roles, role) => {
  return roles?.includes(role) || roles?.includes('Admin') ? true : false;
};
