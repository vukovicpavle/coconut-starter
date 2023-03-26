import {styled} from 'nativewind';
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Styled = {
  FlatList: styled(FlatList),
  ScrollView: styled(ScrollView),
  Image: styled(Image),
  ImageBackground: styled(ImageBackground),
  Text: styled(Text),
  TextInput: styled(TextInput),
  TouchableOpacity: styled(TouchableOpacity),
  TouchableWithoutFeedback: styled(TouchableWithoutFeedback),
  View: styled(View),
  KeyboardAvoidingView: styled(KeyboardAvoidingView),
  SafeAreaView: styled(SafeAreaView),
  Animated: {
    FlatList: styled(Animated.FlatList),
    ScrollView: styled(Animated.ScrollView),
    Image: styled(Animated.Image),
    Text: styled(Animated.Text),
    View: styled(Animated.View),
  },
};

export default Styled;
