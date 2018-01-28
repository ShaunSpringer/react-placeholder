let target;

if (navigator.product === 'ReactNative') {
  const rn = require('react-native');
  target = rn.View;
} else {
  target = div;
}

export default target;