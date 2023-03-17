import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const ButtonMain: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export {ButtonMain};

const styles = StyleSheet.create({
  button: {
    width: 180,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#000000',

    // paddingRight: 100,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
  },
});
