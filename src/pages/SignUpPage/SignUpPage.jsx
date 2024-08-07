import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';

import useModal from '../../hooks/useModal.jsx';

import * as S from './SignUpPage.style.jsx';

// 추후 유효성 검사 통과 여부에 따라 글씨 바뀌도록 설정 필요
export default function SignUpPage() {
    const { isOpen, open, close, Modal } = useModal();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        // 여기에 코드 추가
    };

    return (
        <main>
            <S.Header>
                <Icon id='logo' width='283.65px' height='39.93px' />
            </S.Header>
            <S.Wrapper>
                <S.Container>
                    <S.FormWrapper>
                        <S.TitleContainer>
                            <Icon 
                                id='back' 
                                width='35px' 
                                height='35px' 
                                onClick={open}
                            />
                            {/* 모달 버튼 개수, 아이콘 추가 수정 필요 */}
                            {isOpen && <Modal text='회원가입이 아직 진행 중이에요. 로그인 화면으로 돌아가시겠어요?' close={close} />}
                            <S.TitleText>회원 가입</S.TitleText> 
                            <S.Spacer />
                        </S.TitleContainer>
                        <S.FormContainer onSubmit={handleSubmit}>
                            <S.InputWrapper>
                                <S.InputContainer>
                                    <S.MainBoldText>이름</S.MainBoldText>
                                    <S.InputStyle 
                                        type='text'
                                        className='name' 
                                        placeholder='이름을 입력해 주세요'
                                    />
                                </S.InputContainer>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputContainer>
                                    <S.MainBoldText>이메일</S.MainBoldText>
                                    <S.InputStyle 
                                        type='text'
                                        className='email' 
                                        placeholder='이메일을 입력해 주세요'
                                    />
                                </S.InputContainer>
                                <Button
                                    width='150px'
                                    padding='15px'
                                    buttonStyle='gray'
                                >
                                    인증번호 전송
                                </Button>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputContainer>
                                    <S.MainBoldText>인증번호 입력</S.MainBoldText>
                                    <S.InputStyle 
                                        type='text'
                                        className='certification' 
                                        placeholder='인증번호를 입력해 주세요'
                                    />
                                </S.InputContainer>
                                <Button
                                    width='150px'
                                    padding='15px'
                                    buttonStyle='gray'
                                >
                                    인증번호 확인
                                </Button>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputContainer>
                                    <S.MainBoldText>비밀번호</S.MainBoldText>
                                    <S.InputStyle 
                                        type='text'
                                        className='pwd' 
                                        placeholder='비밀번호를 입력해 주세요'
                                    />
                                </S.InputContainer>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputContainer>
                                    <S.MainBoldText>비밀번호 확인</S.MainBoldText>
                                    <S.InputStyle 
                                        type='text'
                                        className='pwd-re' 
                                        placeholder='위의 비밀번호를 다시 입력해 주세요'
                                    />
                                </S.InputContainer>
                            </S.InputWrapper>
                            <br />
                            <Link to='/agree'>
                                <Button
                                    width='100%'
                                    padding='15px'
                                    buttonStyle='gray'
                                >
                                    가입 완료
                                </Button>
                            </Link>
                        </S.FormContainer>
                    </S.FormWrapper>
                    <Link to='/login'>
                        <Button
                            width='537px'
                            padding='20px'
                            borderRadius='0'
                            buttonStyle='light'
                            hasBorder='true'
                        >
                            계정이 있으신가요? 로그인
                        </Button>
                    </Link>
                </S.Container>       
            </S.Wrapper>          
        </main>
    );
}
