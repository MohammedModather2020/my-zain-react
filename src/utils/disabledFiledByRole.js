export const disabledFiledByRole = (roles, role) => {
  return roles?.includes(role) || roles?.includes('Adminkk') ? false : true;
};
