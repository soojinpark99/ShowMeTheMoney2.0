import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postLoginForm } from "../api";
import Spinner from "../Spinner.gif";

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
      }
    } catch (error) {
      alert("회원가입 요청 중 에러가 발생했습니다.");
      window.location.reload();
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form" name="loginForm">
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
            <p>가입하기</p>
          )}
        </button>
        <Link to="/join" className="link">
          회원가입하기
        </Link>
      </form>
    </>
  );
}

export default LoginForm;