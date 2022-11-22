import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { Post } from '../screens/post';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Post: undefined;
};

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};
