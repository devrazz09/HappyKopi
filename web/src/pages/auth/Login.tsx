import whiteLogo from '../../assets/imgs/wlogo.png';
import blackLogo from '../../assets/imgs/blogo.png';
const LoginPage = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center relative font-primary">
      <div className="w-2/5 h-full bg-secondary relative flex flex-col justify-end items-center overflow-hidden">
        <div className="w-4/5 h-[30%] flex flex-col justify-evenly items-center mb-30">
          <img src={whiteLogo} alt="logo" />
          <p className="font-bold text-4xl text-white tracking-wider text-center">Happy Kopi<br />Your Flavorful Escape</p>
          <p className="font-light text-base text-white tracking-wider text-center">Every cup is brewed with care, every moment infused with warmth.<br/> Together, we create experiences worth savoring.</p>
        </div>
      </div>
      <div className="w-3/5 h-full relative flex justify-center items-center overflow-hidden">
        {/* Login Form Component Goes Here */}
        <form onSubmit={()=>{}} className="w-2/4 h-3/5 flex flex-col justify-between items-center">
          <div className='w-full h-1/3 flex flex-col justify-around items-center'>
            <img src={blackLogo} alt="logo" className=''/>
            <p className='text-3xl font-semibold'>Welcome to Happy<span className='text-primary'>Kopi</span></p>
            <p className='text-base font-semibold'>Fueling Productivity, One Cup at a Time</p>
          </div>
          <div className='w-full h-3/5 '>
            <div className='w-full h-3/5'>
              <label className='block text-xs font-semibold mb-1' htmlFor="username">Username</label>
              <input name='username' type="text" className='w-full p-4 mb-6 text-xs font-semibold border border-gray-300 rounded-lg' placeholder='Enter Username' />
              <label className='block text-xs font-semibold mb-1' htmlFor="password">Password</label>
              <input name='password' type="password" className='w-full p-4 mb-6 text-xs font-semibold border border-gray-300 rounded-lg' placeholder='Enter Password' />
            </div>
            <div>
              <button type='submit' className='w-full bg-primary text-white text-base py-4 rounded-md mt-4'>Login</button>
              <p className='text-textSecondary text-xs font-semibold mt-2'>Forgot Password</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
