import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';
import ContactModal from './components/ContactModal';
import Dimmed from './components/Dimmed';

import oc from 'open-color';

function generateRandomColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];

    // 0 부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}

class App extends Component {
  state = {
    view: 'favorite',
    modal: {
      visible: false,
      mode: null
    }
  }

  handleSelectView = (view) => this.setState({view})

  modalHandler = {
    show: (mode, payload) => {
      this.setState({
        modal: {
          mode,
          visible: true,
          ...payload
        }
      })
    },
    hide: () => {
      this.setState({
        modal: {
          ...this.state.modal,
          visible: false
        }
      })
    },
    change: null,
    action: {
      create: null,
      modify: null,
      remove: null
    }
  }

  handleFloatingButtonClick = () => {
    const { view } = this.state;
    if (view !== 'list')
      this.setState({view: 'list'});
    
    this.modalHandler.show(
      'create',
      {
        name: '',
        phone: '',
        color: generateRandomColor()
      }
    );
  }

  render() {
    // 레퍼런스 준비
    const { 
        handleSelectView,
        handleFloatingButtonClick,
        modalHandler
    } = this;

    const { 
        view,
        modal
    } = this.state;

    return (
        <div>
            <Header/>
            <ViewSelector onSelect={handleSelectView} selected={view}/>
            
            {/* view 값에 따라 다른 컨테이너를 보여준다 */}
            <Container visible={view==='favorite'}>즐겨찾기</Container>
            <Container visible={view==='list'}>리스트</Container>
            
            <ContactModal {...modal} onHide={modalHandler.hide}/>
            <Dimmed visible={modal.visible}/>
            <FloatingButton onClick={handleFloatingButtonClick}/>
        </div>
    );
  }
}

export default App;