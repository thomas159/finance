import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'
import H2 from '../Reusable/H2'
import H3 from '../Reusable/H3'
import Button from '../Reusable/Button'
import * as palette from '../../variables'

const Form = styled.form`
`

const Wrap = styled.div`
  border-radius: 5px 5px 0 0;
  padding: 20px;
  background: ${palette.green};
`

const Headers = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Cell = styled.li`
  display: flex;
  flex: 100%;
`

const OptionLabel = styled.div`

`

const OptionText = styled.div`

`

const Card = () => {
  const [amount, setamount] = useState(10000);
  const [term, setTerm] = useState(30);
  return (
    <Wrap>
      <H2>Your next loan</H2>
      <Headers>
      <H3>Choose the amount</H3>
      <H3>{amount}kc</H3>
      </Headers>
    

    <Form>
      <InputRange
        formatLabel={value => ``}
        maxValue={30000}
        minValue={0}
        value={amount}
        onChange={e => setamount(e)}
      />
      <Headers>
        <H3>Choose the amount</H3>
        <H3>{term} days</H3>
      </Headers>
      <InputRange
        formatLabel={value => ``}
        maxValue={30}
        minValue={0}
        value={term}
        onChange={e => setTerm(e)}
        onChangeComplete={e => console.log(e)} />
        <Button>Take a Loan</Button>
      </Form>
    <Options>
      <Cell>
        <OptionLabel>principal amount</OptionLabel>
        <OptionText></OptionText>
        <OptionLabel>interest amount</OptionLabel>
        <OptionText></OptionText>
        <OptionLabel> total amount</OptionLabel>
        <OptionText></OptionText>
        <OptionLabel>  due date</OptionLabel>
        <OptionText></OptionText>
  
    </Cell>
    </Options>
    </Wrap>
  ) 
}

export default Card
// export default class Card extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         value: 5,
//       };
//     }
  
//     render() {
//       return (
//         <Form >
//           <InputRange
//             maxValue={20}
//             minValue={0}
//             value={this.state.value}
//             onChange={value => this.setState({ value })}
//             onChangeComplete={value => console.log(value)} />
//         </Form>
//       );
//     }
//   }
  