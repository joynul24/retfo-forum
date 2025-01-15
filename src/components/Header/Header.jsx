const Header = () => {
  return (
    <div className="container mx-auto  px-2 lg:px-0">
      {/* Navber */}
      <div className="lg:flex justify-between pt-10">
        <h2 className="mb-5 lg:mb-0 text-3xl text-center lg:text-left lg:text-4xl font-black text-[#12132D]">ReTro</h2>
        <div className="flex items-center justify-center gap-6">
          <span className="bg-gray-300 p-2 lg:p-3 rounded-full cursor-pointer">
            <i className="fa-solid fa-house"></i>
          </span>
          <span className="bg-gray-300 p-2 lg:p-3 rounded-full cursor-pointer">
            <i className="fa-solid fa-pencil"></i>
          </span>
          <span className="bg-gray-300 p-2 lg:p-3 rounded-full cursor-pointer">
            <i className="fa-solid fa-user-plus"></i>
          </span>
          <span className="bg-gray-300 p-2 lg:p-3 rounded-full cursor-pointer">
            <i className="fa-solid fa-flag"></i>
          </span>
          <button className="btn text-xl font-bold bg-[#797DFC] text-white rounded-full border-none">Sign In</button>
        </div>
      </div>

      {/* Banner */}
      <div className="rounded-3xl p-12 lg:p-24 bg-[#12132D] bg-[url(https://joynul2024.sirv.com/retro-forum-project/bgbanner.png)] bg-cover bg-center lg:flex flex-col lg:flex-row justify-between mt-5 lg:mt-12">
        <div className="text-white space-y-5 mb-10 lg:mb-0">
         <h2 className="text-2xl  lg:text-6xl font-black">Welcome to the <br /> <span className="text-[#797DFC]">ReTro</span> Forum</h2>
         <p className="text-xl font-medium opacity-70">Share your favorite opinion and win and wp <br /> forum coffee mug!</p>
         {/* Search */}
         <div className="flex justify-between bg-white p-2 rounded-full">
           <input className="rounded-full pl-2 text-black outline-none font-medium" type="text" placeholder="Search here anything" />
           <button className="btn text-xl font-bold bg-[#797DFC] text-white rounded-full border-none">Search</button>
         </div>
        </div>
        {/*  */}
        <div className="flex gap-14 bg-white p-5 lg:p-12 rounded-3xl lg:text-2xl font-medium text-[#12132DCC]">
            <div className="space-y-6">
            <p>Registered Users</p>
            <p>Forum</p>
            <p>Topics</p>
            <p>Replies</p>
            </div>
            <div  className="space-y-6">
                <p>02</p>
                <p>08</p>
                <p>09</p>
                <p>03</p>
            </div>
        </div>
      </div>

      <div className="mt-9 text-center">
                <h2 className="text-4xl font-black">Let’s Discuss</h2>
                <p className="opacity-70 mt-6">Yes, you can run unit tests and view the results directly within the app. The <br /> integrated testing features allow for a streamlined .</p>
      </div>

    </div>
  );
};

export default Header;
