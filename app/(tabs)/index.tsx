import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Board from '../../components/board/Board';
import { Header } from '../../components/board/Header';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#8B0076','#4B0082']}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Header />
      <Board />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
