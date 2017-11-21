import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';

export default (search) => {
  let query = {};

  if (!isEmpty(search)) {
    query = queryString.parse(search);
  }

  return query;
};
