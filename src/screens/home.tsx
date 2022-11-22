import { type FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigatoins';

export const Home: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        color="#2e2e2e"
        title="GO TO POST SCREEN"
        onPress={() => navigation.navigate('Post')}
      />
    </View>
  );
};
