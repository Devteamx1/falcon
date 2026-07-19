import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {closeDeleteModal,clearSelectedMessage,deleteMessage} from "../../redux/slice/communicationSlice";
import CommunicationStats from "../admin/communications/CommunicationStats";
import CommunicationForm from "../admin/communications/CommunicationForm";
import CommunicationHistory from "../admin/communications/CommunicationHistory";
import CommunicationProfile from "../admin/communications/CommunicationProfile";
import DeleteCommunicationModal from "../admin/communications/DeleteCommunicationModal";

const CommunicationManagement = () => {

  const navigate = useNavigate();

  return (
    <div className="space-y-4 p-10">

      {/* Header */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate("/admin")}
          className="
            w-20
            h-20
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
            Communication Center
          </h1>

          <p className="text-slate-500 mt-1">
            Send announcements and manage communication history.
          </p>

        </div>

      </div>

      {/* Statistics */}

      <CommunicationStats />

      {/* Form & History */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <CommunicationForm />

        <CommunicationHistory />

      </div>

      {/* Drawer */}

      <CommunicationProfile />

      {/* Delete Modal */}

      <DeleteCommunicationModal />

    </div>
  );
};

export default CommunicationManagement;