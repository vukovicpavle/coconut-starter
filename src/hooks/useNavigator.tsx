import {CommonActions, useNavigation} from '@react-navigation/native';

export default function useNavigator() {
  const {dispatch, canGoBack, setOptions, setParams} = useNavigation();

  function navigate(name: string, params?: any) {
    dispatch(CommonActions.navigate({name, params}));
  }

  function reset(name: string, params?: any) {
    dispatch(CommonActions.reset({index: 0, routes: [{name, params}]}));
  }

  function goBack() {
    dispatch(CommonActions.goBack());
  }

  return {navigate, reset, goBack, canGoBack, setOptions, setParams};
}
