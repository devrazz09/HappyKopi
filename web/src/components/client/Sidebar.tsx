import SidebarLogo from "../../assets/imgs/sidebarlogo.png";
import SignoutIcon from "../../assets/icons/Signout";
import DarkmodeIcon from "../../assets/icons/Darkmode";
const Sidebar = () => {
  
  return (
    <div className="w-64 h-screen bg-white font-primary">
      <img className="m-auto mb-3 py-6" src={SidebarLogo} alt="" />
      <p className="w-4/5 m-auto font-semibold text-base text-gray-400">Menu</p>
      <div className="w-full h-2/5 mb-12 flex flex-col items-center justify-around"> {/* Menu Section */}
        <div className="w-4/5 h-16 flex justify-center items-center z-10 tracking-widest rounded-md bg-[url(./assets/imgs/sidebarmilktea.png)] bg-center">
          <p className="uppercase font-semibold text-white">milktea</p>
        </div>
        <div className="w-4/5 h-16 flex justify-center items-center z-10 tracking-widest rounded-md bg-[url(./assets/imgs/sidebaricedcoffee.png)] bg-center">
          <p className="uppercase font-semibold text-white">iced coffee</p>
        </div>
        <div className="w-4/5 h-16 flex justify-center items-center z-10 tracking-widest rounded-md bg-[url(./assets/imgs/sidebarfrappuccino.png)] bg-center">
          <p className="uppercase font-semibold text-white">frapuccino</p>
        </div>
        <div className="w-4/5 h-16 flex justify-center items-center z-10 tracking-widest rounded-md bg-[url(./assets/imgs/sidebarfruittea.png)] bg-center">
          <p className="uppercase font-semibold text-white">fruit tea</p>
        </div>
      </div>
      <div className="w-full"> {/* Management Section */}
        <p className="w-4/5 m-auto mb-6 font-semibold text-base text-gray-400">Management</p>
        <div className="w-4/5 h-16 m-auto flex justify-center items-center rounded-md bg-[url(./assets/imgs/sidebarsales.png)] bg-center mb-6">
          <p className="z-10 tracking-widest uppercase font-semibold text-white">sales</p>
        </div>
      </div>
      <div className="w-full h-[18%] mt-20 flex flex-col justify-evenly items-center">
        <p className="w-4/5 font-bold text-gray-400">Others</p>
        <div className="w-4/5">
          <DarkmodeIcon />
        </div>
        <button className="w-4/5 py-3 rounded-lg flex justify-center items-center bg-primary font-semibold text-textOnPrimary gap-1">
          <SignoutIcon />
          Sign Out  
        </button>
      </div>
    </div>
  );
}
export default Sidebar;