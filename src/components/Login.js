import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [form, setForm] = useState({
    username:'',  //아이디 저장
    password:'' //패스워드 저장
  });

  const [error, setError] = useState(''); //값이 1개일 경우 소괄호로
  const navigate = useNavigate(); //url주소 이동

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value//사용자가 입력한 것을
    });
    setError('');
  }

  // 로그인 버튼 클릭시 실행되는 함수
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const {data} = await axios.post('https://port-0-backend-express-server-mkvweoae71d9732c.sel3.cloudtype.app/ginipet_login',form);
      // 성공시 작업
      //JWT 토근 저장
      localStorage.setItem('token', data.token);        // 토큰 저장
      localStorage.setItem('username', form.username);  // 사용자 아이디 저장

      alert('로그인 성공 메인페이지로 이동합니다.');
      navigate('/');  //메인 페이지 경로로 이동합니다.
    }catch(err){
      setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요');
    }
  }

  return (
    <main>
      <section>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <input type='radio' id='member' name='member' />
            <label htmlFor='member'>회원</label>
            <input type='radio' id='no_member' name='member' />
            <label htmlFor='no_member'>비회원</label>
          </p>
          <p>
            <label htmlFor='username'>아이디</label>
            <input type='text' id='username' name='username' placeholder='아이디' value={form.username} onChange={handleChange} required />
          </p>

          <p>
            <label htmlFor='password'>패스워드</label>
            <input type='password' id='password' name='password' placeholder='패스워드' value={form.password} onChange={handleChange} required />
          </p>

          <p>
            <input type='checkbox' id='username_check' />
            <label htmlFor='username_check'>아이디 저장</label>
          </p>

          <p>
            {/* <input type='submit' value='로그인' /> */}
            <button type='submit'>로그인</button>
          </p>

          <p>
            <Link to='/id_search'>아이디 찾기</Link>
            &#10072; 
            <Link to='/pw_search'>비번찾기</Link>
            &#10072;
            <Link to='/join'>회원가입</Link>
          </p>
          {error&&<p style={{color:'#f00'}}>{error}</p>}
        </form>
      </section>
    </main>
  );
};


export default Login;
