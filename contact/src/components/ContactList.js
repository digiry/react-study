import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { transitions } from '../lib/style-utils';
import ImmutablePropTypes from 'react-immutable-proptypes';


const Wrapper = styled.div`
  margin-top: 1rem;

  .contact-enter {
    animation: ${transitions.stretchOut} .15s linear;
    animation-fill-mode: forwards;
  }

  .contact-leave {
    animation: ${transitions.shrinkIn} .15s linear;
    animation-fill-mode: forwards;
  }
`;

class ContactList extends PureComponent {
  static propTypes = {
    contacts: ImmutablePropTypes.listOf(
      ImmutablePropTypes.mapContains({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        favorite: PropTypes.bool
      })
    ),
    search: PropTypes.string,
    onToggleFavorite: PropTypes.func,
    onOpenModify: PropTypes.func
  }

  render() {
    const { contacts, onOpenModify, search, onToggleFavorite } = this.props;
    const contactList = contacts
      .filter(
        c => c.get('name').indexOf(search) !== -1
      ).sort(
        (a,b) => {
          if (a.get('name') > b.get('name')) return 1;
          if (a.get('name') < b.get('name')) return -1;
          return 0;
        }
      ).map(
        contact => (
          <ContactItem
            key={contact.get('id')}
            contact={contact}
            onOpenModify={onOpenModify}
            onToggleFavorite={onToggleFavorite}
          />
        )
      );
    return (
      <Wrapper>
        <CSSTransitionGroup
          transitionName="contact"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {contactList}
        </CSSTransitionGroup>
      </Wrapper>
    );
  }
}

export default ContactList;