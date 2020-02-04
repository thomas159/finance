import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'
import H2 from '../Reusable/H2'
import H3 from '../Reusable/H3'
import Button from '../Reusable/Button'
import * as palette from '../../variables'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Wrap = styled.div`
  displayy: flex;
  height: 100%;
  border-radius: 5px 5px 0 0;
  background: ${palette.green};
  flex-direction: column;
`

const Headers = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #fff;
  padding: 20px;
`

const Cell = styled.li`
  display: flex;
  flex: 100%;
  border-bottom: 1px solid #000;
  padding: 5px 0;
`

const OptionLabel = styled.div`
  display: flex;
  flex: 50%;
  align-items: center;
  text-transform: capitalize;
`

const OptionText = styled.div`
  display: flex;
  flex: 50%;
  justify-content: flex-end;
  align-items: center;
`

function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy.toDateString()
}

const Card = () => {
  const [amount, setamount] = useState(10000);
  const [term, setTerm] = useState(30);
  const date = new Date();
  const newDate = addDays(date, term);
  const calcInterest = Math.round(amount * 0.07 * term * 0.2)
  const totalAmount = Math.round(calcInterest + amount)
  return (
    <Wrap>
      <H2>Your next loan</H2>
      <Form>
        <Headers>
          <H3 textAlign={'left'}>Choose the amount</H3>
          <H3 textAlign={'right'}>{amount}Kč</H3>
        </Headers>
        <InputRange
          formatLabel={value => ``}
          maxValue={30000}
          minValue={0}
          value={amount}
          onChange={e => setamount(e)}
        />
        <Headers>
          <H3 textAlign={'left'}>Choose the term</H3>
          <H3 textAlign={'right'}>{term} days</H3>
        </Headers>
        <InputRange
          formatLabel={value => ``}
          maxValue={30}
          minValue={0}
          value={term}
          onChange={e => setTerm(e)}
          onChangeComplete={e => console.log(e)} 
        />
        <Button>Take a Loan</Button>
      </Form>
      <Options>
        <Cell>
          <OptionLabel>principal amount</OptionLabel>
          <OptionText>{amount}Kč</OptionText>
        </Cell>
        <Cell>
          <OptionLabel>interest amount</OptionLabel>
          <OptionText>{calcInterest}Kč</OptionText>
        </Cell>
        <Cell>
          <OptionLabel> total amount</OptionLabel>
          <OptionText>{totalAmount}Kč</OptionText>
        </Cell>
        <Cell>
          <OptionLabel>  due date</OptionLabel>
          <OptionText>{newDate}</OptionText>
        </Cell>
      </Options>
    </Wrap>
  ) 
}

export default Card
