import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [menuOpen,setMenuOpen] = useState(false);

  // 로컬스토리지 값 받아오기
  const username = localStorage.getItem('username');
  //localStorage.getItem('token'); 
  //localStorage.removeItem('token');//토큰삭제
  const handleLogout =(e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('login');  //로그인 페이지로 이동하기
    window.location.reload();
    // setMenuOpen(false);
  }

  const navigate = useNavigate();
  return (
    <>
      <header className='header'>
        <h1>
          <Link to='/' title='메인페이지로 바로가기' onClick={()=>setMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt='상단로고' />
          </Link>
        </h1>

        <button className='toggle_btn' onClick={()=>setMenuOpen(true)}>
          <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt='전체메뉴' />
        </button>

        <Link to='/cart' title='장바구니' className='cart_btn' onClick={()=>setMenuOpen(false)}>
          <img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt='장바구니' />
        </Link>
        <nav className='navi' style={menuOpen ?{left:'0px'}:{left:'-100%'}}>
          <button className='close_btn' onClick={()=>setMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt='닫기' />
          </button>


          <ul className='gnb'>
            { username&&
            <li className='member_info'>{username}님 어서오세요</li>
            }
            <li><Link to='/' title='지니펫쇼핑몰' onClick={()=>setMenuOpen(false)}>지니펫쇼핑몰</Link></li>
            <li><Link to='/intro' title='브랜드 소개' onClick={()=>setMenuOpen(false)}>브랜드 소개</Link></li>
            <li><Link to='/info' title='반려견 정보' onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
            <li><Link to='/event' title='이벤트' onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
            <li><Link to='/customer' title='고객지원' onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
          </ul>

          <ul className='form_navi'>
            {!username?(
            <>
            <li><Link to='/login' title='로그인' onClick={()=>setMenuOpen(false)}>로그인</Link></li>
            <li><Link to='/join' title='회원가입' onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
            </>
            ):
            (<><li><Link to='/' title='로그아웃' onClick={handleLogout}>로그아웃</Link></li>
            <li>&nbsp;</li></>)
            }
            <li><Link to='/order' title='주문조회' onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
            <li><Link to='/cart' title='장바구니' onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;