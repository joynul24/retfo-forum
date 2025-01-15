
const MarkAssRead = () => {
    return (
        <div className="md:w-1/3 border-2 border-yellow-600 bg-gray-200 p-6 container mx-auto rounded-xl">
            <div className="flex justify-between opacity-70">
                <h2 className="text-xl font-bold">Title</h2>
                <h2 className="text-xl font-bold"><i className="text-green-500 fa-solid fa-check-double"></i> Mark Ass Read ({0})</h2>
            </div>
        </div>
    );
};

export default MarkAssRead;