import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postLoginForm } from "../api";
import Spinner from "../Spinner.gif";
import { Line, SocialLoginBtns, SocialLoginInfo } from "./Join.js";
import NaverLogin from "./NaverLogin.js";
import GoogleLogin from "./GoogleLogin.js";

function LoginForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const status = await postLoginForm(data);
      if (status === 200) {
        navigate("/accountbook/calendar");
      } else {
        throw new Error("에러가 발생했습니다.");
      }
    } catch (error) {
      alert(error.message);
      window.location.reload();
      return;
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} name="loginForm">
        <div className="title-div">
          <p className="title">로그인</p>
          <p className="title-info">서비스 이용을 위해 로그인이 필요합니다.</p>
        </div>
        <div className="username input-div">
          <label htmlFor="username" />
          아이디
          <input
            id="username"
            type="text"
            name="username"
            placeholder="아이디를 입력하세요."
            autoComplete="off"
          />
        </div>
        <div className="password input-div">
          <label htmlFor="password" />
          비밀번호
          <input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        <button disabled={isSubmitting || isSubmitted} value="login">
          {isSubmitting || isSubmitted ? (
            <img src={Spinner} className="spinner" alt="로딩중..." />
          ) : (
            <p>로그인하기</p>
          )}
        </button>
      </form>
      <Link to="/join" className="link">
        회원가입하기
      </Link>
      <Line>or</Line>
      <SocialLoginInfo>SNS로 로그인</SocialLoginInfo>
      <SocialLoginBtns>
        <GoogleLogin></GoogleLogin>
        <NaverLogin></NaverLogin>
      </SocialLoginBtns>
    </div>
  );
}

export default LoginForm;
