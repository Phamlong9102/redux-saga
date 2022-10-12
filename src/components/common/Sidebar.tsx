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
          <Link to="/admin/student/add" className="text-[22px] text-black">
            Student Add
          </Link>
        </div>
        <div className="w-full bg-white cursor-pointer hover:bg-[#ccc] border-b-1px border-black">
          <Link to="/admin/student/:studentId" className="text-[22px] text-black">
            Student Id
          </Link>
        </div>
      </div>
    </>
  );
}
