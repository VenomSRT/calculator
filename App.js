import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0);

  function inputDigit(digit) {
    if (!Number(result)) {
      setResult(digit);
    } else {
      setResult(result + digit);
    }
  }

  function reset() {
    setResult("0");
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text
          style={{color: '#fff', fontSize: 50, fontWeight: 'bold', }}
        >
          {result}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => reset()}
          >
            <Text
              style={styles.buttonText}
            >
              AC
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => toggle()}
          >
            <Text
              style={styles.buttonText}
            >
              +/-
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => percent()}
          >
            <Text
              style={styles.buttonText}
            >
              %
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => division()}
          >
            <Text
              style={styles.buttonText}
            >
              /
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => devide()}
          >
            <Text
              style={styles.buttonText}
            >
              mc
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => devide()}
          >
            <Text
              style={styles.buttonText}
            >
              mr
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => devide()}
          >
            <Text
              style={styles.buttonText}
            >
              m-
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => devide()}
          >
            <Text
              style={styles.buttonText}
            >
              m+
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("7")}
          >
            <Text
              style={styles.buttonText}
            >
              7
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("8")}
          >
            <Text
              style={styles.buttonText}
            >
              8
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("9")}
          >
            <Text
              style={styles.buttonText}
            >
              9
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => multiply()}
          >
            <Text
              style={styles.buttonText}
            >
              X
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("4")}
          >
            <Text
              style={styles.buttonText}
            >
              4
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("5")}
          >
            <Text
              style={styles.buttonText}
            >
              5
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("6")}
          >
            <Text
              style={styles.buttonText}
            >
              6
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => subtract()}
          >
            <Text
              style={styles.buttonText}
            >
              -
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("1")}
          >
            <Text
              style={styles.buttonText}
            >
              1
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("2")}
          >
            <Text
              style={styles.buttonText}
            >
              2
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputDigit("3")}
          >
            <Text
              style={styles.buttonText}
            >
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => add()}
          >
            <Text
              style={styles.buttonText}
            >
              +
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.buttonZero}
            onPress={() => inputDigit("0")}
          >
            <Text
              style={styles.buttonText}
            >
              0
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => addComma(",")}
          >
            <Text
              style={styles.buttonText}
            >
              ,
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => equal()}
          >
            <Text
              style={styles.buttonText}
            >
              =
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  display: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    width: 300,
  },

  button: {
    width: 70,
    height: 70,
    marginTop: 5,
    borderRadius: 70,
    backgroundColor: '#333',
  },

  buttonZero: {
    width: 145,
    height: 70,
    marginTop: 5,
    borderRadius: 70,
    backgroundColor: '#333',
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    lineHeight: 70,
  }
});
