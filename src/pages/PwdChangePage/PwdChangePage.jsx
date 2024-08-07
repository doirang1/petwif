import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';

import useModal from '../../hooks/useModal.jsx';

import * as S from './PwdChangePage.style.jsx';


export default function PwdChangePage() {
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
                        <S.TitleText>비밀번호 변경하기</S.TitleText> 
                    </S.TitleContainer>
                    <S.FormContainer onSubmit={handleSubmit}>
                        <S.InputWrapper>
                        <S.InputContainer>
                            <S.MainBoldText>비밀번호</S.MainBoldText>
                            <S.InputStyle 
                                type='text'
                                className='pwd' 
                                placeholder='비밀번호를 입력해 주세요'/>
                            {/* 텍스트 바뀌도록 할 것 */}
                            <S.WarningText>* 비밀번호는 몇 자 이상으로 만들어야 해요.</S.WarningText>
                        </S.InputContainer>
                        </S.InputWrapper>
                    <S.InputWrapper>
                        <S.InputContainer>
                            <S.MainBoldText>비밀번호 확인</S.MainBoldText>
                            <S.InputStyle 
                                type='text'
                                className='pwd-re' 
                                placeholder='위의 비밀번호를 다시 입력해 주세요'/>
                            <S.WarningText>* 입력한 비밀번호가 잘못되었어요.</S.WarningText>
                        </S.InputContainer>
                    </S.InputWrapper>
                    <Button
                        width='447px'
                        padding='15px'
                        buttonStyle='gray'
                        onClick={open}>
                        비밀번호 변경하기
                        {/* 모달 버튼 클릭시 로그인 화면으로 이동하도록 해야 함 */}
                        {isOpen && <Modal text='비밀번호가 변경되었어요. 변경된 비밀번호로 다시 로그인해 주세요.' close={close} />}
                    </Button>
                    </S.FormContainer>
                    <S.StyledHr />
                    <S.UnderlinedText to='/signup'>새 계정 만들기</S.UnderlinedText>
                    </S.FormWrapper>
                </S.Container>     
            </S.Wrapper>          
        </main>
    );
}