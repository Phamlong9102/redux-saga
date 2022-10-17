import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <>
      <div>
        <div className="w-full cursor-pointer bg-white hover:bg-[#ccc] border-b-1px border-black">
          <Link to="/admin/dashboard" className="text-[22px] text-black">
            Dashboard
          </Link>
        </div>
        <div className="w-full bg-white cursor-pointer hover:bg-[#ccc] border-b-1px border-black">
          <Link to="/admin/student" className="text-[22px] text-black">
            Students
          </Link> 
        </div>
      </div>
    </>
  );
}
