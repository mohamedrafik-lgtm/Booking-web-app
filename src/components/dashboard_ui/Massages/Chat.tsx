// import bgChat from '@/images/chat background/793df797732aaf145a0f8a40d7e92cc1.jpg'
//  style={{backgroundImage:`url(${bgChat.src})`}}
const Chat = () => {
    return (
      <div className="w-full h-screen flex flex-col bg-white overflow-hidden border-t">
        
        <div className="flex-1 overflow-y-auto p-4">
          {/* enter massages her */}
        </div>
  
        {/* input massage */}
        <form className="px-6 py-3 bg-gray-100 shadow-md w-full flex gap-4">
          <input type="text" className="w-full p-2 border rounded-lg outline-none" placeholder="Enter Massage..." />
          <button className=" flex justify-center items-center ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
          </button>
        </form>
      </div>
    );
  };
  
  export default Chat;
  