import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Input from './Input';


const ThumbnailWrapper = styled.div`
    /* 레이아웃 */
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;

    /* 색상 */
    background: white;
`;

const Form = styled.div`
    /* 레이아웃 */
    padding: 1rem;

    /* 색상 */
    background: ${oc.gray[0]};
    `;

    const ButtonsWrapper = styled.div`
    /* 레이아웃 */
    display: flex;
`;


class ContactModal extends Component {

    static propTypes = { 
        visible: PropTypes.bool, 
        // 모달의 모드
        mode: PropTypes.oneOf(['create', 'modify']), 
        // 모달에 들어갈 데이터 값
        name: PropTypes.string, 
        phone: PropTypes.string, 
        color: PropTypes.string, 
        onHide: PropTypes.func, 
        onAction: PropTypes.func, // 추가 혹은 수정
        onRemove: PropTypes.func // 나중에 구현할 삭제
    }

    render() {
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input 
                        name="name"
                        placeholder="이름"
                    />
                    <Input 
                        name="phone"
                        placeholder="전화번호"
                    />
                </Form>
                <ButtonsWrapper>안녕하세요 버튼들</ButtonsWrapper>
            </Modal>
        );
    }
}

export default ContactModal;