export const resolveErrorMessage = (errors = {}, field = '') => {
  return errors[field]?.message;
};
