import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';


function PlayListModal({ visible, isCloseModal }) {
    const [ inputs, setInputs ] = useState("");
    const [ isButton, setIsButton ] = useState(false);
    const [ animate, setAnimate ] = useState(false); // 현재 애니메이션 상태
    const [ localVisible, setLocalVisibal ] = useState(visible); // 상태가 true->false로 전환되는걸 감지하는 state
    
    const onChange = e => {
        const { value } = e.target;
        setInputs(value);
        buttonChange();
    };

    const buttonChange = () => {
        setIsButton(true);
    }

    const playListRegister = () => {
        console.log("value: ", inputs);
      
        fetch(``, {
            method: "POST",
            headers : {
                "Content-type" : "application/json",
                "Authorization" : "token"
            },
            body : JSON.stringify({
                name : inputs
            })
        })
        .then(res => res.json())
        .then(res => console.log("res:: " ,res))
        .catch(err => console.log("err : ", err));
        setInputs("");
        isCloseModal();
    }

    useEffect(() => {
        if(inputs.length === 0) {
            setIsButton(false);
        }else if(inputs.length > 0)  {
            setIsButton(true);
        }
    },[inputs]);

    useEffect(() => {
        // true -> false 시점 조건
        if(localVisible && ! visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisibal(visible); //바뀔때마다 localVisible을 동기화
    }, [localVisible, visible]);

    if(!localVisible && !animate) return null;

    return (
        <PlayModal disappear={!visible}>
            <Modal disappear={!visible}>
                <p>새 플레이리스트</p>
                <div className="inputBox">
                    <input 
                        type="text" 
                        name="playlistName" 
                        value={inputs}
                        placeholder="플레이 리스트 이름을 입력해주세요."
                        onChange={onChange}    
                    />
                </div>
                <div className="buttonBox">
                    <div className="buttonWrap">
                        <button type="button" className="cancleBtn" onClick={isCloseModal}>
                            <span>취소</span>
                        </button>
                    </div>
                    <div className="buttonWrap">
                        <RegisterBtn type="button" isButton={isButton} onClick={playListRegister} >
                            <span>확인</span>
                        </RegisterBtn>
                    </div>
                </div>
            </Modal>
        </PlayModal>
    );
};

export default PlayListModal;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const PlayModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0,0,0,0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;  /* 애니메이션 끝나고 유지시켜주기 */

    ${props => props.disappear && css`
        animation-name: ${fadeOut};
    `}

`;

const Modal = styled.div`
    position: relative;
    padding: 35px 0;
    background: ${props => props.theme.color.darkwhite};
    border-radius: 4px;
    p {
        margin: 0 45px 12px;
        font-size: 15px;
        font-weight: bold;
        line-height: 1.4;
        text-align: center;
    }
    .inputBox {
        width: 270px;
        margin: 0 45px 12px;
        input {
            width: 100%;
            padding: 15px 10px;
            background-color: #ededed;
            box-shadow: 0 0 4px 0 #0c96ff;
            border-radius: 6px;
            border: none;
            font-size: 14px;
            &:focus {
            outline: 0;
            -webkit-box-shadow: 0 0 4px 0 #0c96ff;
            box-shadow: 0 0 4px 0 #0c96ff;
            }
        }
    }
    .buttonBox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        .buttonWrap {
            width: 85px;
            height: 39px;
            margin: 0 7px;
            border: 1px solid #d7d7d7;
            border-radius: 4px;
            button {
                height: 100%;
                width: 100%;
                padding: 0 15px;
                span {
                    font-size: 15px;
                    line-height: 1.4;
                    
                }
            }
        }
    }
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${props => props.disappear && css`
        animation-name: ${slideDown};
    `}
`;

const RegisterBtn = styled.button`
    background: ${(props) => props.isButton ? "#ff0050" : "#e9e9e9"};
    border: 1px solid ${(props) => props.isButton ? "#ff0050" : "#e9e9e9"};
    color: ${props => props.theme.color.darkwhite};
    & > span {
        font-size: 15px;
        line-height: 1.4;
    }
`;