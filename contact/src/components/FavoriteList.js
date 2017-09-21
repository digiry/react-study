import React from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';


const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const FavoriteList = ({contacts}) => {
  const favoriteList = contacts
    .filter(
      contact => contact.get('favorite')
    ).map(
      contact => (
        <FavoriteItem 
          key={contact.get('id')}
          contact={contact}
        />
      )
    );

  return (
    <Wrapper>
      {favoriteList}
    </Wrapper>
  )
}

FavoriteList.propTypes = {
  contacts: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      color: PropTypes.string,
      favorite: PropTypes.bool
    })
  )
};

export default FavoriteList;