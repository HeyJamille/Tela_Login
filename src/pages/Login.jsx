import React from 'react'

// Assets
import image from '../assets/image.png';
import icon from '../assets/icon.png';
import login from '../assets/login.svg';
import mail from '../assets/mail.svg';
import mailFocus from '../assets/mail-focus.svg';


const Login = () => {
  return (
    <article className="flex flex-row justify-center items-center bg-[#1E1E1E] w-full h-screen"> 
      <form className="flex flex-col gap-5 p-5 w-full sm:w-[500px] lg:h-auto lg:m-20 lg:px-[5%] lg:py-10 lg:bg-[#24221F]">
        <section className="flex flex-row gap-1">
          <img src={icon} alt="imagem"/>
          <h2>camp.in</h2>
        </section>
			
        <section>
					<div className="flex flex-row gap-2">
						<img src={login} alt="login" />
						<h1>Faça seu login</h1>
					</div>
          <p>Entre com suas informações de cadastro.</p>
        </section>

        <section className="flex flex-col gap-2">
          <div>
            <label htmlFor="email">E-mail</label>
            <input className="w-full h-[40px]" type="email" id="email" name="email"/>
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input className="w-full h-[40px]" type="password" id="senha" name="senha"/>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <input type="checkbox" id="lembre_me"/>
              <label className="ml-1" htmlFor="lembre_me">Lembre-me</label>
            </div>
            <div>
              <p id="yellowColor">Esqueci minha senha</p>
            </div>
          </div>
        </section>

        <section> 
          <button className="bg-[#FFC632] w-full h-[50px] mb-2" type="submit">Entrar</button>
          <p className="text-center" id="yellowColor">Não tem uma conta? Registre-se</p>
        </section>
      </form>

      <img className="hidden lg:block lg:h-full lg:w-[60%]" src={image} alt="imagem"/>
    </article>
  )
}

export default Login
