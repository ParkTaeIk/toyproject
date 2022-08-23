import './Login.css';

function Signup() {
    return(
        <main className='main'>
                <div class="login-form">
                <input class="text" placeholder="이름을 입력해주세요."></input><br/>
                <input class="text" placeholder="아이디를 입력해주세요."></input><br/>
                <input class="text" placeholder="비밀번호를 입력해주세요."></input><br/>
                <input class="text" placeholder="연락처를 입력해주세요."></input><br/>
                <input class="text" placeholder="주소를 입력해주세요."></input>
                <button class='btn'>가입하기</button>
                </div>
            </main>
    )
}

export default Signup;