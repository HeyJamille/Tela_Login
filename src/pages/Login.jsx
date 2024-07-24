import React from 'react'

// Assets
import image from '../assets/image.png';
import icon from '../assets/icon.png';

const Login = () => {
  return (
		<article className="flex flex-row  bg-[#1E1E1E] w-full h-screen lg:justify-center lg:items-center"> 
			<form className="flex flex-col gap-5 p-5 lg:m-20 lg:px-[150px] lg:py-10 h-screen w-full lg:w-[45%] lg:h-auto lg:bg-[#24221F]">
				<section>
					<img src={icon} alt="imagem"/>
					<h2>camp.in</h2>
				</section>

				<section>
					<h1>Faça seu login</h1>
					<p>Entre com suas informações de cadastro.</p>
				</section>

				<section className="flex flex-col gap-2">
					<div>
						<label for="email">E-mail</label>
						<input className="w-full h-[35px] " type="text" id="email" name="email"/>
					</div>
					<div>
						<label for="senha">Senha</label>
						<input className="w-full h-[35px]" type="text" id="senha" name="senha"/>
					</div>
					<div className="flex flex-row justify-between">
						<div>
							<input type="checkbox" id="lembre_me"/>
							<label className="ml-1">Lembre-me</label>
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

			<img className="hidden lg:block h-full w-[55%]" src={image} alt="imagem"/>
		</article>
  )
}

export default Login