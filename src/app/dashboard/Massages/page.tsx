import Massages from "@/components/dashboard_ui/Massages/AllMassages";
import Chat from "@/components/dashboard_ui/Massages/Chat";

const Messages = () => {
    return (
      <div className="flex">
        <Massages/>
        <Chat/>
      </div>
    );
  }
  
  export default Messages;