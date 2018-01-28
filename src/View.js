let target;

if (navigator.product === 'ReactNative') {
  import { View } from 'react-native';

  target = View;
} else {
  target = div;
}

export default target;