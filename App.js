import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('0');
  const [operand, setOperand] = useState(null);
  const [negative, setNegative] = useState(false);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [commaStatus, setCommaStatus] = useState(false);

  useEffect(() => {
    if (negative && input > 0) {
      setInput('-' + input);
    } else if (+input < 0) {
      setInput(input.substring(1));
    }
  },[negative])

  function inputSign(sign) {
    if (!+input && input.length === 1) {
      setInput(sign);
    } else {
      setInput(input + sign);
    }
  }

  function doOperation() {
    switch (currentOperator) {
      case '+':
        setOperand(+operand + +input);
        break;

      case '-':
        setOperand(+operand - +input);
        break;
      
      case '*':
        setOperand(+operand * +input);
        break;
      
      case '/':
        setOperand(+operand / +input);
        break;

      default:
        break;
    }

    setCurrentOperator(null);
  }

  function initOperation(sign) {
    if (operand === null) {
      setOperand(+input);
    } else {
      doOperation();
    }
    setCurrentOperator(sign);
    setCommaStatus(false);
  }

  function showResult() {
    if (input && currentOperator) {
      doOperation();
    }
    setInput(operand);
  }

  function reset() {
    setCommaStatus(false);
    setOperand(null);
    setInput('0');
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text
          style={{color: '#fff', fontSize: 50, fontWeight: 'bold', }}
        >
          {input}
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
            onPress={() => setNegative(!negative)}
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
            onPress={() => initOperation('/')}
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
            onPress={() => inputSign('7')}
          >
            <Text
              style={styles.buttonText}
            >
              7
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('8')}
          >
            <Text
              style={styles.buttonText}
            >
              8
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('9')}
          >
            <Text
              style={styles.buttonText}
            >
              9
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => initOperation('*')}
          >
            <Text
              style={styles.buttonText}
            >
              X
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('4')}
          >
            <Text
              style={styles.buttonText}
            >
              4
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('5')}
          >
            <Text
              style={styles.buttonText}
            >
              5
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('6')}
          >
            <Text
              style={styles.buttonText}
            >
              6
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => initOperation('-')}
          >
            <Text
              style={styles.buttonText}
            >
              -
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('1')}
          >
            <Text
              style={styles.buttonText}
            >
              1
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('2')}
          >
            <Text
              style={styles.buttonText}
            >
              2
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => inputSign('3')}
          >
            <Text
              style={styles.buttonText}
            >
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => initOperation('+')}
          >
            <Text
              style={styles.buttonText}
            >
              +
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.buttonZero}
            onPress={() => inputSign('0')}
          >
            <Text
              style={styles.buttonText}
            >
              0
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (!commaStatus) {
                inputSign( !+input ? '0.' : '.' );
                setCommaStatus(true);
              }
            }}
          >
            <Text
              style={styles.buttonText}
            >
              ,
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => showResult()}
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
