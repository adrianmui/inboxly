// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

export default styledBy;
