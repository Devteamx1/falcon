import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

import { openModal } from "../../redux/slice/coachSlice";

import CoachSearch from "../../pages/admin/coaches/CoachSearch";
import CoachStats from "../../pages/admin/coaches/CoachStats";
import CoachTable from "../../pages/admin/coaches/CoachTable";
import CoachCard from "../../pages/admin/coaches/CoachCard";
import CoachModal from "../../pages/admin/coaches/CoachModal";
import CoachProfile from "../../pages/admin/coaches/CoachProfile";
import DeleteCoachModal from "../../pages/admin/coaches/DeleteCoachModal";

const CoachManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="space-y-8 p-10">

      {/* ================= Header ================= */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/admin")}
            className="
              w-15 h-15
              rounded-xl
              bg-white
              shadow-md
              border
              flex
              items-center
              justify-center
              hover:bg-blue-600
              hover:text-white
              transition
            "
          >
            <FaArrowLeft />
          </button>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Coach Management
            </h1>

            <p className="text-slate-500 mt-1">
              Manage swimming academy coaches, batches and salary details.
            </p>

          </div>

        </div>

        <button
          onClick={() => dispatch(openModal())}
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            shadow-lg
            transition
          "
        >
          <FaPlus />

          Add Coach

        </button>

      </div>

      {/* ================= Statistics ================= */}

      <CoachStats />

      {/* ================= Search ================= */}

      <div className="bg-white rounded-2xl shadow-md p-5">

        <CoachSearch />

      </div>

      {/* ================= Desktop Table ================= */}

      <div className="hidden lg:block">

        <CoachTable />

      </div>

      {/* ================= Mobile Cards ================= */}

      <div className="block lg:hidden">

        <CoachCard />

      </div>

      {/* ================= Drawer & Modals ================= */}

      <CoachModal />

      <CoachProfile />

      <DeleteCoachModal />

    </div>
  );
};

export default CoachManagement;