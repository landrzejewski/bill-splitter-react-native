import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const EditText = props => {
  return (
    <View style={styles.editText}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
};

const App = () => {
  const [data, setData] = useState({
    amount: '0',
    persons: '1',
    tip: '10',
  });
  const [finalValue, setFinalValue] = useState('');

  const calculate = () => {
    const {amount, persons, tip} = data;
    const result = (+amount + amount * (+tip / 100)) / persons;
    setFinalValue(result.toFixed(2));
  };

  const onValueChange = (key, value) =>
    setData(currentData => ({
      ...currentData,
      [key]: value,
    }));

  return (
    <SafeAreaView style={styles.container}>
      <EditText
        label="Kwota:"
        value={data.amount}
        onChange={value => onValueChange('amount', value)}
      />
      <EditText
        label="Liczba osób:"
        value={data.persons}
        onChange={value => onValueChange('persons', value)}
      />
      <EditText
        label="Wielkość napiwku [%]:"
        value={data.tip}
        onChange={value => onValueChange('tip', value)}
      />
      <Button title="Oblicz" onPress={calculate} />

      {finalValue ? (
        <Text style={styles.finalValue}>
          Do zapłaty na osobę: {finalValue} zł{' '}
        </Text>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2b3b50',
  },
  editText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    color: 'white',
    fontSize: 24,
    width: 250,
    textAlign: 'right',
  },
  input: {
    fontSize: 24,
    backgroundColor: '#b0c6e3',
    color: 'black',
    borderWidth: 1,
    borderColor: '#4d719f',
    width: 100,
    marginLeft: 16,
    paddingHorizontal: 8,
  },
  finalValue: {
    color: '#b0c6e3',
    fontSize: 24,
    marginTop: 32,
    textAlign: 'center',
  },
});

export default App;
