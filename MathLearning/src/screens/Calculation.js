import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../styles/appColors';
import tw from 'twrnc';
import InputStyles from '../styles/inputStyles';
import fontFamilyStyles from '../styles/fontFamilyStyles';
import PlusIcon from '../assets/images/plus_round.svg';
import MinusIcon from '../assets/images/minus_round.svg';
import RefreshIcon from '../assets/images/refresh.svg';
import WrongIcon from '../assets/images/wrong.svg';
import CorrectIcon from '../assets/images/correct.svg';

const Calculation = () => {
  const [maxOperand, setMaxOperand] = useState(9);
  const [operandOne, setOperandOne] = useState(0);
  const [operandTwo, setOperandTwo] = useState(0);
  const [operation, setOperation] = useState('plus');
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    resetValues();
  }, []);

  const verifyAnswerHandler = () => {
    // console.log('Verify clicked...', answer);
    let isCorrect = false;
    if (operation === 'plus') {
      let sum = operandOne + operandTwo;
      // console.log('sum ===> ', sum);
      if (sum.toString() == answer.trim()) {
        isCorrect = true;
      }
    } else if (operation === 'minus') {
      let sub = operandOne - operandTwo;
      // console.log('sub ===> ', sub);
      if (sub.toString() == answer.trim()) {
        isCorrect = true;
      }
    }
    // console.log('isCorrect ===> ', isCorrect);
    setShowResult(true);
    setIsAnswerCorrect(isCorrect);
  };

  const showAnswerIcon = () => {
    if (showResult) {
      return isAnswerCorrect ? (
        <CorrectIcon height={40} width={40} />
      ) : (
        <WrongIcon height={40} width={40} />
      );
    }
    return <></>;
  };

  const chooseOperation = type => {
    // console.log('chooseOperation...', type);
    if (type === 'minus') {
      swapOperands(operandOne, operandTwo);
    }
    setOperation(type);
    setShowResult(false);
    setAnswer('');
  };

  const resetValues = () => {
    setAnswer('');
    setShowResult(false);
    setIsAnswerCorrect(false);

    let op1 = generateRandomNumber(maxOperand);
    let op2 = generateRandomNumber(maxOperand);

    let isOperandSwaped = false;
    if (operation === 'minus') {
      isOperandSwaped = swapOperands(op1, op2);
    }

    if (!isOperandSwaped) {
      setOperandOne(op1);
      setOperandTwo(op2);
    }
  };

  const swapOperands = (op1, op2) => {
    // let op1 = parseInt(operand1);
    // let op2 = parseInt(operand2);
    // console.log('swapOperands is called...', op1 + '  -  ' + op2);
    if (op1 < op2) {
      // console.log('in if condition....');
      let temp = op1;
      op1 = op2;
      op2 = temp;
      setOperandOne(op1);
      setOperandTwo(op2);
      return true;
    }
    return false;
  };

  const generateRandomNumber = uptoNumber => {
    return Math.floor(Math.random() * uptoNumber + 1);
  };

  const showOperationIcon = () => {
    if (operation === 'plus') {
      return <PlusIcon height={40} width={40} />;
    } else if (operation === 'minus') {
      return <MinusIcon height={40} width={40} />;
    }
  };

  // useEffect(() => {
  //   console.log('operation changed....', operation);
  //   if (operation == 'reset') {
  //     setOperandOne(generateRandomNumber(maxOperand));
  //     setOperandTwo(generateRandomNumber(maxOperand));
  //   }
  // }, [operation]);

  return (
    <View style={tw`h-full bg-[${AppColors.pageBackgroundColor}]`}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={tw`p-4 mb-30`}>
          <Text
            style={[
              tw`grow text-lg text-[${AppColors.textColor_838383}]`,
              fontFamilyStyles.rh_medium_500,
            ]}>
            Choose operation
          </Text>
          <View style={tw`flex-row my-4 justify-between`}>
            <TouchableOpacity
              style={tw`flex-row bg-[${AppColors.box_purple_C2D3F5}] rounded-[40px] h-20 w-20 items-center justify-center`}
              onPress={() => chooseOperation('plus')}>
              <View style={tw`items-center`}>
                <PlusIcon height={24} width={24} />
                <Text
                  style={[
                    tw`text-black text-sm`,
                    fontFamilyStyles.rh_semibold_600,
                  ]}>
                  plus
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-row bg-[${AppColors.box_purple_C2D3F5}] rounded-[40px] ml-4 h-20 w-20 items-center justify-center`}
              onPress={() => chooseOperation('minus')}>
              <View style={tw`items-center`}>
                <MinusIcon height={24} width={24} />
                <Text
                  style={[
                    tw`text-black text-sm`,
                    fontFamilyStyles.rh_semibold_600,
                  ]}>
                  minus
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-row bg-[${AppColors.box_purple_C2D3F5}] rounded-[40px] ml-4 h-20 w-20 items-center justify-center`}
              onPress={resetValues}>
              <View style={tw`items-center`}>
                <RefreshIcon height={24} width={24} />
                <Text
                  style={[
                    tw`text-black text-sm`,
                    fontFamilyStyles.rh_semibold_600,
                  ]}>
                  reset
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw`bg-[${AppColors.line_C2D3F580}] h-[1px]`} />
          <View style={tw`flex-row mt-5`}>
            <View style={tw`flex-1 items-end justify-center`}>
              {showOperationIcon()}
            </View>
            <View style={tw`flex-1 mr-20`}>
              <View
                style={tw`flex-row bg-[${AppColors.box_purple_C2D3F5}] rounded-md h-16 w-16 items-center justify-center`}
                onPress={() => chooseOperation('plus')}>
                <Text
                  style={[
                    tw`text-black text-[30px]`,
                    fontFamilyStyles.rh_extrabold_800,
                  ]}>
                  {operandOne}
                </Text>
              </View>
              <View
                style={tw`flex-row bg-[${AppColors.box_purple_C2D3F5}] rounded-md mt-3 h-16 w-16 items-center justify-center`}
                onPress={() => chooseOperation('plus')}>
                <Text
                  style={[
                    tw`text-black text-[30px]`,
                    fontFamilyStyles.rh_extrabold_800,
                  ]}>
                  {operandTwo}
                </Text>
              </View>
            </View>
          </View>
          <View style={tw`items-center my-2 mt-3`}>
            <View style={tw`bg-[${AppColors.box_gray_CDCFD4}] w-45 h-[2px]`} />
          </View>
          <View style={tw`flex-row justify-between my-2`}>
            <View></View>
            <View style={tw`flex-row`}>
              <TextInput
                style={[
                  InputStyles.formInputStyle,
                  fontFamilyStyles.rh_extrabold_800,
                  tw`w-30 h-18 text-[24px] items-center text-center ml-15 text-[${AppColors.box_green_149D38}]`,
                ]}
                value={answer}
                maxLength={8}
                // onChangeText={text => setAnswer(text)}
                keyboardType={'numeric'}
                onChangeText={text => {
                  setShowResult(false);
                  const validated = text.match(/^(\d*\.{0,1}\d{0,2}$)/);
                  if (validated) {
                    setAnswer(text.toString().trim());
                  }
                }}
                onSubmitEditing={() => verifyAnswerHandler()}
              />
            </View>

            <View style={tw`items-center justify-center ml-2 w-15`}>
              {showAnswerIcon()}
            </View>
          </View>

          <TouchableOpacity
            style={tw`bg-[${AppColors.primary}] rounded-md h-12.5 mt-3 justify-center mb-4`}
            onPress={verifyAnswerHandler}>
            <Text
              style={[
                tw`text-white text-[15px] text-center`,
                fontFamilyStyles.rh_bold_700,
              ]}>
              Verify Answer
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Calculation;
