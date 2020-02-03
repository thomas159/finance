import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'

const Form = styled.form`
  padding: 20px;
`
const Wrap = styled.div`
  border-radius: 5px 5px 0 0;
  padding: 20px;
`

const Card = () => {
  const [amount, setamount] = useState( 5 );
  const [term, setTerm] = useState( 5 );
  return (
    <Wrap>
    <Form>
        {console.log(amount)}
    <InputRange
        maxValue={20}
        minValue={0}
        value={amount}
        onChange={e => setamount(e)}
        onChangeComplete={e => console.log(e)} />

    <InputRange
        maxValue={20}
        minValue={0}
        value={term}
        onChange={e => setTerm(e)}
        onChangeComplete={e => console.log(e)} />
        </Form>
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
  