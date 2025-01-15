const Header = () => {
  return (
    <div className="container mx-auto">
      {/* Navber */}
      <div className="lg:flex justify-between pt-10 px-3 lg:px-0">
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
          <button className="btn text-xl font-bold bg-[#797DFC] text-white rounded-full">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
