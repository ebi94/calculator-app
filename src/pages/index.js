import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input  from "../components/input"
import Keypad from "../components/keypad"
import Output from "../components/output"

const IndexPage = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  let count;
  let varPlusMinusSign;
  const onClick = data => {
    if(data === '='){
      calculate();
    }else if(data === 'c') {
      reset();
    }else if(data === 'plusminus'){
      plusMinusSign();
    }else{
      if (data === '*' || data === '/' || data === '+' || data === '-' || data === '%') {
        const lastStr = value.slice(-1)
        if (lastStr === '*' || lastStr === '/' || lastStr === '+' || lastStr === '-') {
          setValue(value + '');
        }else{
          setValue(value + data);
        }
      } else {
        setValue(value + data);
      }
    }
  };

  const reset = () => {
    setValue('');
    setResult('');
  }
  const calculate = () => {
    const checkResult = value;
    const checkResultPercent = checkResult.replace("%", "/100");
    try {
      // eslint-disable-next-line no-eval
      count = eval(checkResultPercent);
      setResult(count);
    } catch (e) {
      setResult('Error !');
    }
  };

  const plusMinusSign = () => {
    const data = Number(varPlusMinusSign)

    if (data > 0) {
      const changeSign = value.replace(varPlusMinusSign, `(-${varPlusMinusSign})`);
      setValue(changeSign);
    } else {
      const changeSign = value.replace(`(-${varPlusMinusSign})`, varPlusMinusSign);
      setValue(changeSign);
    }
  };

  React.useEffect(() => {
    if(value){
      const change = value.split('+').join(',').split('/').join(',').split('*').join(',').split('(-').join('-').split(')').join('');
      const array = change.split(/(?:,| )+/);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      varPlusMinusSign = array[array.length - 1];
    }
  })
  
  return (
    <Layout>
      <SEO title="Calculator - App" />
      {/* {tempValue} */}
      <Input value={value}/>
      <Output value={result}/>
      <Keypad dataOnClick={data => onClick(data)}/>
    </Layout>
    );
  };

export default IndexPage
