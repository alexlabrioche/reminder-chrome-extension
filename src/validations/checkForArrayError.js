import { isEmpty, isUndefined } from "lodash";

export default ({ errors, index, fieldArray, field }) => {
  return !isEmpty(errors) && !isEmpty(errors[fieldArray][index])
    ? !isUndefined(errors[fieldArray][index][field])
      ? errors[fieldArray][index][field].message
      : null
    : null;
};
