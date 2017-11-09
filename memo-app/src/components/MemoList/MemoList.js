import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import { media } from "lib/style-utils";
import ImmutablePropTypes from 'react-immutable-proptypes';

import Memo from './Memo';

const Wrapper = styled.div`
  display: block;
  margin-top: 0.5rem;
  font-size: 0px;

  ${media.mobile`
    margin-top: 0.25rem;
  `}
`;

const MemoList = ({memos, onOpen}) => {
  const memoList = memos.map(
    memo => (
      <Memo
        key={memo.get('id')}
        memo={memo}
        onOpen={onOpen}
      />
    )
  );

  return (
    <Wrapper>
      {memoList}
    </Wrapper>
  );
};

MemoList.propTypes = {
  memos: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.body
    })
  ),
  onOpen: PropTypes.func
}

export default MemoList;