import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';

import {useState} from 'react';

type TextFieldProps = {
  label: string;
  onChange: (value: string) => void;
  secureTextEntry?: boolean | undefined;
  placeholder: string;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  onChange,
  secureTextEntry,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => onChange(e)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? secureTextEntry : undefined}
      />
    </View>
  );
};

export {TextField};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: '#000000',
    fontSize: 18,
    bottom: -18,
    left: 0,
  },

  input: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: 'gray',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    paddingStart: 20,
  },
});
